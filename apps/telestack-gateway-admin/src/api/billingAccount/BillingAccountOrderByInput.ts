import { SortOrder } from "../../util/SortOrder";

export type BillingAccountOrderByInput = {
  createdAt?: SortOrder;
  currentPeriodEnd?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  stripeCustomerId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
