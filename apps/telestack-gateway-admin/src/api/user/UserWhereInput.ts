import { BillingAccountListRelationFilter } from "../billingAccount/BillingAccountListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";

export type UserWhereInput = {
  billingAccounts?: BillingAccountListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  projects?: ProjectListRelationFilter;
  stripeCustomerId?: StringNullableFilter;
  username?: StringFilter;
};
