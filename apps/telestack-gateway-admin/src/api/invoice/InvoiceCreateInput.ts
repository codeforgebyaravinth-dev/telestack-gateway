import { BillingAccountWhereUniqueInput } from "../billingAccount/BillingAccountWhereUniqueInput";

export type InvoiceCreateInput = {
  amount?: number | null;
  billingAccount?: BillingAccountWhereUniqueInput | null;
  issuedAt?: Date | null;
  paidAt?: Date | null;
  status?: "Option1" | null;
  stripeInvoiceId?: string | null;
};
