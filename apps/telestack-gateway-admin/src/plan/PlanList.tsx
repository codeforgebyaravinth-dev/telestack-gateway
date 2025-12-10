import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PlanList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Plans"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="features" source="features" />
        <TextField label="ID" source="id" />
        <TextField label="monthlyPrice" source="monthlyPrice" />
        <TextField label="name" source="name" />
        <TextField label="stripePriceId" source="stripePriceId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="yearlyPrice" source="yearlyPrice" />{" "}
      </Datagrid>
    </List>
  );
};
