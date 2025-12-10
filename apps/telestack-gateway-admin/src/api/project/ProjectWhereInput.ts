import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { PlanWhereUniqueInput } from "../plan/PlanWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UsageListRelationFilter } from "../usage/UsageListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectWhereInput = {
  appwriteProjectId?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  name?: StringNullableFilter;
  plan?: PlanWhereUniqueInput;
  suspendedAt?: DateTimeNullableFilter;
  usages?: UsageListRelationFilter;
  user?: UserWhereUniqueInput;
};
