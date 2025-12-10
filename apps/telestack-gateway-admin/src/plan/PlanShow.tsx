import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { PLAN_TITLE_FIELD } from "./PlanTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PlanShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="features" source="features" />
        <TextField label="ID" source="id" />
        <TextField label="monthlyPrice" source="monthlyPrice" />
        <TextField label="name" source="name" />
        <TextField label="stripePriceId" source="stripePriceId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="yearlyPrice" source="yearlyPrice" />
        <ReferenceManyField
          reference="Project"
          target="planId"
          label="Projects"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="appwriteProjectId" source="appwriteProjectId" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="isActive" source="isActive" />
            <TextField label="name" source="name" />
            <ReferenceField label="plan" source="plan.id" reference="Plan">
              <TextField source={PLAN_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="suspendedAt" source="suspendedAt" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
