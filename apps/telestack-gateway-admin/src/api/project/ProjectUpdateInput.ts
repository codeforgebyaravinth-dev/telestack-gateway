import { PlanWhereUniqueInput } from "../plan/PlanWhereUniqueInput";
import { UsageUpdateManyWithoutProjectsInput } from "./UsageUpdateManyWithoutProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  appwriteProjectId?: string | null;
  isActive?: boolean | null;
  name?: string | null;
  plan?: PlanWhereUniqueInput | null;
  suspendedAt?: Date | null;
  usages?: UsageUpdateManyWithoutProjectsInput;
  user?: UserWhereUniqueInput | null;
};
