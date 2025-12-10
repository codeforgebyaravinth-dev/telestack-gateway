import { InvoiceCreateNestedManyWithoutBillingAccountsInput } from "./InvoiceCreateNestedManyWithoutBillingAccountsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BillingAccountCreateInput = {
  currentPeriodEnd?: Date | null;
  invoices?: InvoiceCreateNestedManyWithoutBillingAccountsInput;
  isActive?: boolean | null;
  stripeCustomerId?: string | null;
  user?: UserWhereUniqueInput | null;
};
