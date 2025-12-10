import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

export const StripeWebhookEventEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="eventId" source="eventId" />
        <div />
        <BooleanInput label="processed" source="processed" />
        <DateTimeInput label="receivedAt" source="receivedAt" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
