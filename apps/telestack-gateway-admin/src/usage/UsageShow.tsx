import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const UsageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="apiCalls" source="apiCalls" />
        <TextField label="cost" source="cost" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="functionExecs" source="functionExecs" />
        <TextField label="ID" source="id" />
        <BooleanField label="isLimited" source="isLimited" />
        <BooleanField label="overUsage" source="overUsage" />
        <TextField label="periodEnd" source="periodEnd" />
        <TextField label="periodStart" source="periodStart" />
        <ReferenceField label="project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="storageUsed" source="storageUsed" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
