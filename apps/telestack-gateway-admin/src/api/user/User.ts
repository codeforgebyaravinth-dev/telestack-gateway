import { BillingAccount } from "../billingAccount/BillingAccount";
import { Project } from "../project/Project";
import { JsonValue } from "type-fest";

export type User = {
  billingAccounts?: Array<BillingAccount>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  projects?: Array<Project>;
  roles: JsonValue;
  stripeCustomerId: string | null;
  updatedAt: Date;
  username: string;
};
