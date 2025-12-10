import { Plan } from "../plan/Plan";
import { Usage } from "../usage/Usage";
import { User } from "../user/User";

export type Project = {
  appwriteProjectId: string | null;
  createdAt: Date;
  id: string;
  isActive: boolean | null;
  name: string | null;
  plan?: Plan | null;
  suspendedAt: Date | null;
  updatedAt: Date;
  usages?: Array<Usage>;
  user?: User | null;
};
