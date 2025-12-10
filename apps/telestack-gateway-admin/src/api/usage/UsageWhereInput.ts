import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type UsageWhereInput = {
  apiCalls?: IntNullableFilter;
  cost?: FloatNullableFilter;
  functionExecs?: IntNullableFilter;
  id?: StringFilter;
  isLimited?: BooleanNullableFilter;
  overUsage?: BooleanNullableFilter;
  periodEnd?: DateTimeNullableFilter;
  periodStart?: DateTimeNullableFilter;
  project?: ProjectWhereUniqueInput;
  storageUsed?: FloatNullableFilter;
};
