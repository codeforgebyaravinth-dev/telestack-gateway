import { InvoiceUpdateManyWithoutBillingAccountsInput } from "./InvoiceUpdateManyWithoutBillingAccountsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BillingAccountUpdateInput = {
  currentPeriodEnd?: Date | null;
  invoices?: InvoiceUpdateManyWithoutBillingAccountsInput;
  isActive?: boolean | null;
  stripeCustomerId?: string | null;
  user?: UserWhereUniqueInput | null;
};
