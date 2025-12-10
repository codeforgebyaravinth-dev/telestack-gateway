import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StripeWebhookEventService } from "./stripeWebhookEvent.service";
import { StripeWebhookEventControllerBase } from "./base/stripeWebhookEvent.controller.base";

@swagger.ApiTags("stripeWebhookEvents")
@common.Controller("stripeWebhookEvents")
export class StripeWebhookEventController extends StripeWebhookEventControllerBase {
  constructor(protected readonly service: StripeWebhookEventService) {
    super(service);
  }
}
