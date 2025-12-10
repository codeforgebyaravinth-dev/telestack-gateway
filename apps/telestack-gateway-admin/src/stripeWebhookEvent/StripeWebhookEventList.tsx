import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const StripeWebhookEventList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"StripeWebhookEvents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="eventId" source="eventId" />
        <TextField label="ID" source="id" />
        <TextField label="payload" source="payload" />
        <BooleanField label="processed" source="processed" />
        <TextField label="receivedAt" source="receivedAt" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
