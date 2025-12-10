import { SortOrder } from "../../util/SortOrder";

export type PlanOrderByInput = {
  createdAt?: SortOrder;
  features?: SortOrder;
  id?: SortOrder;
  monthlyPrice?: SortOrder;
  name?: SortOrder;
  stripePriceId?: SortOrder;
  updatedAt?: SortOrder;
  yearlyPrice?: SortOrder;
};
