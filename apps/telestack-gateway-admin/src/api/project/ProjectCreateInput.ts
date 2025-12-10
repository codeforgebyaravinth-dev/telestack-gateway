import { PlanWhereUniqueInput } from "../plan/PlanWhereUniqueInput";
import { UsageCreateNestedManyWithoutProjectsInput } from "./UsageCreateNestedManyWithoutProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  appwriteProjectId?: string | null;
  isActive?: boolean | null;
  name?: string | null;
  plan?: PlanWhereUniqueInput | null;
  suspendedAt?: Date | null;
  usages?: UsageCreateNestedManyWithoutProjectsInput;
  user?: UserWhereUniqueInput | null;
};
