import { BillingAccountCreateNestedManyWithoutUsersInput } from "./BillingAccountCreateNestedManyWithoutUsersInput";
import { ProjectCreateNestedManyWithoutUsersInput } from "./ProjectCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  billingAccounts?: BillingAccountCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  projects?: ProjectCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  stripeCustomerId?: string | null;
  username: string;
};
