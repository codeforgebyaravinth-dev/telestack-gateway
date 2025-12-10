import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { InvoiceTitle } from "../invoice/InvoiceTitle";
import { UserTitle } from "../user/UserTitle";

export const BillingAccountCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="currentPeriodEnd" source="currentPeriodEnd" />
        <ReferenceArrayInput source="invoices" reference="Invoice">
          <SelectArrayInput
            optionText={InvoiceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="stripeCustomerId" source="stripeCustomerId" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
