import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StripeWebhookEventServiceBase } from "./base/stripeWebhookEvent.service.base";

@Injectable()
export class StripeWebhookEventService extends StripeWebhookEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
