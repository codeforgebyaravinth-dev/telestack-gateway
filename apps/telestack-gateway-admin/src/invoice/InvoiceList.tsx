import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BILLINGACCOUNT_TITLE_FIELD } from "../billingAccount/BillingAccountTitle";

export const InvoiceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Invoices"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amount" source="amount" />
        <ReferenceField
          label="billingAccount"
          source="billingaccount.id"
          reference="BillingAccount"
        >
          <TextField source={BILLINGACCOUNT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="issuedAt" source="issuedAt" />
        <TextField label="paidAt" source="paidAt" />
        <TextField label="status" source="status" />
        <TextField label="stripeInvoiceId" source="stripeInvoiceId" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
