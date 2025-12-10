import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { BILLINGACCOUNT_TITLE_FIELD } from "../billingAccount/BillingAccountTitle";

export const InvoiceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
