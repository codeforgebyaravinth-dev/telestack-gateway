import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  appwriteProjectId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  planId?: SortOrder;
  suspendedAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
