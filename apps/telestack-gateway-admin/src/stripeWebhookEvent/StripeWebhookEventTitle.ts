import { StripeWebhookEvent as TStripeWebhookEvent } from "../api/stripeWebhookEvent/StripeWebhookEvent";

export const STRIPEWEBHOOKEVENT_TITLE_FIELD = "eventId";

export const StripeWebhookEventTitle = (
  record: TStripeWebhookEvent
): string => {
  return record.eventId?.toString() || String(record.id);
};
