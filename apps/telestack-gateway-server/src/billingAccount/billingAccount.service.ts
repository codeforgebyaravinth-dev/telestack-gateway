import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BillingAccountServiceBase } from "./base/billingAccount.service.base";

@Injectable()
export class BillingAccountService extends BillingAccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
