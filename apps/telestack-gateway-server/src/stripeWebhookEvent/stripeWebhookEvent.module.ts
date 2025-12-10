import { Module } from "@nestjs/common";
import { StripeWebhookEventModuleBase } from "./base/stripeWebhookEvent.module.base";
import { StripeWebhookEventService } from "./stripeWebhookEvent.service";
import { StripeWebhookEventController } from "./stripeWebhookEvent.controller";
import { StripeWebhookEventResolver } from "./stripeWebhookEvent.resolver";

@Module({
  imports: [StripeWebhookEventModuleBase],
  controllers: [StripeWebhookEventController],
  providers: [StripeWebhookEventService, StripeWebhookEventResolver],
  exports: [StripeWebhookEventService],
})
export class StripeWebhookEventModule {}
