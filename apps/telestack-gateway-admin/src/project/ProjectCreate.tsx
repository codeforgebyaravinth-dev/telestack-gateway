import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PlanTitle } from "../plan/PlanTitle";
import { UsageTitle } from "../usage/UsageTitle";
import { UserTitle } from "../user/UserTitle";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="appwriteProjectId" source="appwriteProjectId" />
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="name" source="name" />
        <ReferenceInput source="plan.id" reference="Plan" label="plan">
          <SelectInput optionText={PlanTitle} />
        </ReferenceInput>
        <DateTimeInput label="suspendedAt" source="suspendedAt" />
        <ReferenceArrayInput source="usages" reference="Usage">
          <SelectArrayInput
            optionText={UsageTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
