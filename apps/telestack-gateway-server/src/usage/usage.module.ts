import { Module } from "@nestjs/common";
import { UsageModuleBase } from "./base/usage.module.base";
import { UsageService } from "./usage.service";
import { UsageController } from "./usage.controller";
import { UsageResolver } from "./usage.resolver";

@Module({
  imports: [UsageModuleBase],
  controllers: [UsageController],
  providers: [UsageService, UsageResolver],
  exports: [UsageService],
})
export class UsageModule {}
