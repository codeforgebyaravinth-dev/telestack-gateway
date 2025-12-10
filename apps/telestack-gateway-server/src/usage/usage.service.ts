import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UsageServiceBase } from "./base/usage.service.base";

@Injectable()
export class UsageService extends UsageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
