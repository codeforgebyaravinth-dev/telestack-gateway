import * as graphql from "@nestjs/graphql";
import { UsageResolverBase } from "./base/usage.resolver.base";
import { Usage } from "./base/Usage";
import { UsageService } from "./usage.service";

@graphql.Resolver(() => Usage)
export class UsageResolver extends UsageResolverBase {
  constructor(protected readonly service: UsageService) {
    super(service);
  }
}
