import { InputJsonValue } from "../../types";

export type StripeWebhookEventUpdateInput = {
  eventId?: string | null;
  payload?: InputJsonValue;
  processed?: boolean | null;
  receivedAt?: Date | null;
  typeField?: string | null;
};
