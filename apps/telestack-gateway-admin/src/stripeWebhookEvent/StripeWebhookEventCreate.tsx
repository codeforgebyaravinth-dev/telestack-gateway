import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

export const StripeWebhookEventCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="eventId" source="eventId" />
        <div />
        <BooleanInput label="processed" source="processed" />
        <DateTimeInput label="receivedAt" source="receivedAt" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
