import * as graphql from "@nestjs/graphql";
import { BillingAccountResolverBase } from "./base/billingAccount.resolver.base";
import { BillingAccount } from "./base/BillingAccount";
import { BillingAccountService } from "./billingAccount.service";

@graphql.Resolver(() => BillingAccount)
export class BillingAccountResolver extends BillingAccountResolverBase {
  constructor(protected readonly service: BillingAccountService) {
    super(service);
  }
}
