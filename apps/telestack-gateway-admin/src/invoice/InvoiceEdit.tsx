import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { BillingAccountTitle } from "../billingAccount/BillingAccountTitle";

export const InvoiceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput
          source="billingAccount.id"
          reference="BillingAccount"
          label="billingAccount"
        >
          <SelectInput optionText={BillingAccountTitle} />
        </ReferenceInput>
        <DateTimeInput label="issuedAt" source="issuedAt" />
        <DateTimeInput label="paidAt" source="paidAt" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="stripeInvoiceId" source="stripeInvoiceId" />
      </SimpleForm>
    </Edit>
  );
};
