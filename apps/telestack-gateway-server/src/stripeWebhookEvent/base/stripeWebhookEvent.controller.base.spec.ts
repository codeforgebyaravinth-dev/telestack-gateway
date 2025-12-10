import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { StripeWebhookEventController } from "../stripeWebhookEvent.controller";
import { StripeWebhookEventService } from "../stripeWebhookEvent.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  eventId: "exampleEventId",
  id: "exampleId",
  processed: "true",
  receivedAt: new Date(),
  typeField: "exampleTypeField",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  eventId: "exampleEventId",
  id: "exampleId",
  processed: "true",
  receivedAt: new Date(),
  typeField: "exampleTypeField",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    eventId: "exampleEventId",
    id: "exampleId",
    processed: "true",
    receivedAt: new Date(),
    typeField: "exampleTypeField",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  eventId: "exampleEventId",
  id: "exampleId",
  processed: "true",
  receivedAt: new Date(),
  typeField: "exampleTypeField",
  updatedAt: new Date(),
};

const service = {
  createStripeWebhookEvent() {
    return CREATE_RESULT;
  },
  stripeWebhookEvents: () => FIND_MANY_RESULT,
  stripeWebhookEvent: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("StripeWebhookEvent", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StripeWebhookEventService,
          useValue: service,
        },
      ],
      controllers: [StripeWebhookEventController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /stripeWebhookEvents", async () => {
    await request(app.getHttpServer())
      .post("/stripeWebhookEvents")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        receivedAt: CREATE_RESULT.receivedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /stripeWebhookEvents", async () => {
    await request(app.getHttpServer())
      .get("/stripeWebhookEvents")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          receivedAt: FIND_MANY_RESULT[0].receivedAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /stripeWebhookEvents/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/stripeWebhookEvents"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /stripeWebhookEvents/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/stripeWebhookEvents"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        receivedAt: FIND_ONE_RESULT.receivedAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /stripeWebhookEvents existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/stripeWebhookEvents")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        receivedAt: CREATE_RESULT.receivedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/stripeWebhookEvents")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
