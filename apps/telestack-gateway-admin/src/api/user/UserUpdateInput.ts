import { BillingAccountUpdateManyWithoutUsersInput } from "./BillingAccountUpdateManyWithoutUsersInput";
import { ProjectUpdateManyWithoutUsersInput } from "./ProjectUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  billingAccounts?: BillingAccountUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  projects?: ProjectUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  stripeCustomerId?: string | null;
  username?: string;
};
