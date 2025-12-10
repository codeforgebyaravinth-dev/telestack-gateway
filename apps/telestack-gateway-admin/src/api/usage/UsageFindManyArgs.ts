import { UsageWhereInput } from "./UsageWhereInput";
import { UsageOrderByInput } from "./UsageOrderByInput";

export type UsageFindManyArgs = {
  where?: UsageWhereInput;
  orderBy?: Array<UsageOrderByInput>;
  skip?: number;
  take?: number;
};
