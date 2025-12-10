import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";

export type PlanWhereInput = {
  features?: JsonFilter;
  id?: StringFilter;
  monthlyPrice?: FloatNullableFilter;
  name?: StringNullableFilter;
  projects?: ProjectListRelationFilter;
  stripePriceId?: StringNullableFilter;
  yearlyPrice?: FloatNullableFilter;
};
