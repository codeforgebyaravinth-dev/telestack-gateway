import { Module } from "@nestjs/common";
import { BillingAccountModuleBase } from "./base/billingAccount.module.base";
import { BillingAccountService } from "./billingAccount.service";
import { BillingAccountController } from "./billingAccount.controller";
import { BillingAccountResolver } from "./billingAccount.resolver";

@Module({
  imports: [BillingAccountModuleBase],
  controllers: [BillingAccountController],
  providers: [BillingAccountService, BillingAccountResolver],
  exports: [BillingAccountService],
})
export class BillingAccountModule {}
