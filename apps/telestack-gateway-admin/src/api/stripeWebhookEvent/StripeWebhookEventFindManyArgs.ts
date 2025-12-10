import { StripeWebhookEventWhereInput } from "./StripeWebhookEventWhereInput";
import { StripeWebhookEventOrderByInput } from "./StripeWebhookEventOrderByInput";

export type StripeWebhookEventFindManyArgs = {
  where?: StripeWebhookEventWhereInput;
  orderBy?: Array<StripeWebhookEventOrderByInput>;
  skip?: number;
  take?: number;
};
