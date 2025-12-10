import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UsageService } from "./usage.service";
import { UsageControllerBase } from "./base/usage.controller.base";

@swagger.ApiTags("usages")
@common.Controller("usages")
export class UsageController extends UsageControllerBase {
  constructor(protected readonly service: UsageService) {
    super(service);
  }
}
