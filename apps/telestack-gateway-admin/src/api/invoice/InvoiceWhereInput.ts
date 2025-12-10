import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BillingAccountWhereUniqueInput } from "../billingAccount/BillingAccountWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InvoiceWhereInput = {
  amount?: FloatNullableFilter;
  billingAccount?: BillingAccountWhereUniqueInput;
  id?: StringFilter;
  issuedAt?: DateTimeNullableFilter;
  paidAt?: DateTimeNullableFilter;
  status?: "Option1";
  stripeInvoiceId?: StringNullableFilter;
};
