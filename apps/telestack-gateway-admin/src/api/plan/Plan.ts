import { JsonValue } from "type-fest";
import { Project } from "../project/Project";

export type Plan = {
  createdAt: Date;
  features: JsonValue;
  id: string;
  monthlyPrice: number | null;
  name: string | null;
  projects?: Array<Project>;
  stripePriceId: string | null;
  updatedAt: Date;
  yearlyPrice: number | null;
};
