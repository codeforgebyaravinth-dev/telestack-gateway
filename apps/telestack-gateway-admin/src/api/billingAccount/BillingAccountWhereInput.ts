import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BillingAccountWhereInput = {
  currentPeriodEnd?: DateTimeNullableFilter;
  id?: StringFilter;
  invoices?: InvoiceListRelationFilter;
  isActive?: BooleanNullableFilter;
  stripeCustomerId?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
