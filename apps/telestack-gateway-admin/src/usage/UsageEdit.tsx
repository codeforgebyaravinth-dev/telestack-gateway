import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProjectTitle } from "../project/ProjectTitle";

export const UsageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="apiCalls" source="apiCalls" />
        <NumberInput label="cost" source="cost" />
        <NumberInput step={1} label="functionExecs" source="functionExecs" />
        <BooleanInput label="isLimited" source="isLimited" />
        <BooleanInput label="overUsage" source="overUsage" />
        <DateTimeInput label="periodEnd" source="periodEnd" />
        <DateTimeInput label="periodStart" source="periodStart" />
        <ReferenceInput source="project.id" reference="Project" label="project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
        <NumberInput label="storageUsed" source="storageUsed" />
      </SimpleForm>
    </Edit>
  );
};
