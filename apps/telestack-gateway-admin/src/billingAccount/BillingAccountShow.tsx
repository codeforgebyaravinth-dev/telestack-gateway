import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BILLINGACCOUNT_TITLE_FIELD } from "./BillingAccountTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const BillingAccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="currentPeriodEnd" source="currentPeriodEnd" />
        <TextField label="ID" source="id" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="stripeCustomerId" source="stripeCustomerId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Invoice"
          target="billingAccountId"
          label="Invoices"
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
