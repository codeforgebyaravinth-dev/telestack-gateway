import { BillingAccount as TBillingAccount } from "../api/billingAccount/BillingAccount";

export const BILLINGACCOUNT_TITLE_FIELD = "stripeCustomerId";

export const BillingAccountTitle = (record: TBillingAccount): string => {
  return record.stripeCustomerId?.toString() || String(record.id);
};
