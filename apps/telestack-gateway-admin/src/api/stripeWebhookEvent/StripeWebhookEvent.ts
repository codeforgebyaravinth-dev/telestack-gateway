import { JsonValue } from "type-fest";

export type StripeWebhookEvent = {
  createdAt: Date;
  eventId: string | null;
  id: string;
  payload: JsonValue;
  processed: boolean | null;
  receivedAt: Date | null;
  typeField: string | null;
  updatedAt: Date;
};
