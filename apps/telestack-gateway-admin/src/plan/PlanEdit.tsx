import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProjectTitle } from "../project/ProjectTitle";

export const PlanEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <NumberInput label="monthlyPrice" source="monthlyPrice" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput source="projects" reference="Project">
          <SelectArrayInput
            optionText={ProjectTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="stripePriceId" source="stripePriceId" />
        <NumberInput label="yearlyPrice" source="yearlyPrice" />
      </SimpleForm>
    </Edit>
  );
};
