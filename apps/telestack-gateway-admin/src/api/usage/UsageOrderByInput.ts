import { SortOrder } from "../../util/SortOrder";

export type UsageOrderByInput = {
  apiCalls?: SortOrder;
  cost?: SortOrder;
  createdAt?: SortOrder;
  functionExecs?: SortOrder;
  id?: SortOrder;
  isLimited?: SortOrder;
  overUsage?: SortOrder;
  periodEnd?: SortOrder;
  periodStart?: SortOrder;
  projectId?: SortOrder;
  storageUsed?: SortOrder;
  updatedAt?: SortOrder;
};
