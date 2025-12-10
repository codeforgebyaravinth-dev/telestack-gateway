import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type UsageCreateInput = {
  apiCalls?: number | null;
  cost?: number | null;
  functionExecs?: number | null;
  isLimited?: boolean | null;
  overUsage?: boolean | null;
  periodEnd?: Date | null;
  periodStart?: Date | null;
  project?: ProjectWhereUniqueInput | null;
  storageUsed?: number | null;
};
