import { BillingAccountWhereInput } from "./BillingAccountWhereInput";
import { BillingAccountOrderByInput } from "./BillingAccountOrderByInput";

export type BillingAccountFindManyArgs = {
  where?: BillingAccountWhereInput;
  orderBy?: Array<BillingAccountOrderByInput>;
  skip?: number;
  take?: number;
};
