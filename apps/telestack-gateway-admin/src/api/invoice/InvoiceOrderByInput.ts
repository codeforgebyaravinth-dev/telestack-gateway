import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  amount?: SortOrder;
  billingAccountId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  issuedAt?: SortOrder;
  paidAt?: SortOrder;
  status?: SortOrder;
  stripeInvoiceId?: SortOrder;
  updatedAt?: SortOrder;
};
