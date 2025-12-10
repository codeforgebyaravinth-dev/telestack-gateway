import { InputJsonValue } from "../../types";
import { ProjectCreateNestedManyWithoutPlansInput } from "./ProjectCreateNestedManyWithoutPlansInput";

export type PlanCreateInput = {
  features?: InputJsonValue;
  monthlyPrice?: number | null;
  name?: string | null;
  projects?: ProjectCreateNestedManyWithoutPlansInput;
  stripePriceId?: string | null;
  yearlyPrice?: number | null;
};
