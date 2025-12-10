import * as graphql from "@nestjs/graphql";
import { StripeWebhookEventResolverBase } from "./base/stripeWebhookEvent.resolver.base";
import { StripeWebhookEvent } from "./base/StripeWebhookEvent";
import { StripeWebhookEventService } from "./stripeWebhookEvent.service";

@graphql.Resolver(() => StripeWebhookEvent)
export class StripeWebhookEventResolver extends StripeWebhookEventResolverBase {
  constructor(protected readonly service: StripeWebhookEventService) {
    super(service);
  }
}
