import { SortOrder } from "../../util/SortOrder";

export type StripeWebhookEventOrderByInput = {
  createdAt?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  payload?: SortOrder;
  processed?: SortOrder;
  receivedAt?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
