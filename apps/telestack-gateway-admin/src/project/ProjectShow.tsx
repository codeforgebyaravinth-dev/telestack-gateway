import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PROJECT_TITLE_FIELD } from "./ProjectTitle";
import { PLAN_TITLE_FIELD } from "../plan/PlanTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ProjectShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="Usage" target="projectId" label="Usages">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="apiCalls" source="apiCalls" />
            <TextField label="cost" source="cost" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="functionExecs" source="functionExecs" />
            <TextField label="ID" source="id" />
            <BooleanField label="isLimited" source="isLimited" />
            <BooleanField label="overUsage" source="overUsage" />
            <TextField label="periodEnd" source="periodEnd" />
            <TextField label="periodStart" source="periodStart" />
            <ReferenceField
              label="project"
              source="project.id"
              reference="Project"
            >
              <TextField source={PROJECT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="storageUsed" source="storageUsed" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
