import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const UsageList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Usages"} perPage={50} pagination={<Pagination />}>
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
        <ReferenceField label="project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="storageUsed" source="storageUsed" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
