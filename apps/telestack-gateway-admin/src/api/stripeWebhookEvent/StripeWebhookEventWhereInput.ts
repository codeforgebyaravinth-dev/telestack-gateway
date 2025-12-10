import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type StripeWebhookEventWhereInput = {
  eventId?: StringNullableFilter;
  id?: StringFilter;
  payload?: JsonFilter;
  processed?: BooleanNullableFilter;
  receivedAt?: DateTimeNullableFilter;
  typeField?: StringNullableFilter;
};
