import { Plan as TPlan } from "../api/plan/Plan";

export const PLAN_TITLE_FIELD = "name";

export const PlanTitle = (record: TPlan): string => {
  return record.name?.toString() || String(record.id);
};
