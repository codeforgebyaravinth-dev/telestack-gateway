import { BillingAccount } from "../billingAccount/BillingAccount";

export type Invoice = {
  amount: number | null;
  billingAccount?: BillingAccount | null;
  createdAt: Date;
  id: string;
  issuedAt: Date | null;
  paidAt: Date | null;
  status?: "Option1" | null;
  stripeInvoiceId: string | null;
  updatedAt: Date;
};
