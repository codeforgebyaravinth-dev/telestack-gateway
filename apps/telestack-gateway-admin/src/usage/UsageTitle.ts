import { Usage as TUsage } from "../api/usage/Usage";

export const USAGE_TITLE_FIELD = "id";

export const UsageTitle = (record: TUsage): string => {
  return record.id?.toString() || String(record.id);
};
