import { Project } from "../project/Project";

export type Usage = {
  apiCalls: number | null;
  cost: number | null;
  createdAt: Date;
  functionExecs: number | null;
  id: string;
  isLimited: boolean | null;
  overUsage: boolean | null;
  periodEnd: Date | null;
  periodStart: Date | null;
  project?: Project | null;
  storageUsed: number | null;
  updatedAt: Date;
};
