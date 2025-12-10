import { InputJsonValue } from "../../types";
import { ProjectUpdateManyWithoutPlansInput } from "./ProjectUpdateManyWithoutPlansInput";

export type PlanUpdateInput = {
  features?: InputJsonValue;
  monthlyPrice?: number | null;
  name?: string | null;
  projects?: ProjectUpdateManyWithoutPlansInput;
  stripePriceId?: string | null;
  yearlyPrice?: number | null;
};
