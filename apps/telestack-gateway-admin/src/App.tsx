import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { InvoiceList } from "./invoice/InvoiceList";
import { InvoiceCreate } from "./invoice/InvoiceCreate";
import { InvoiceEdit } from "./invoice/InvoiceEdit";
import { InvoiceShow } from "./invoice/InvoiceShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { UsageList } from "./usage/UsageList";
import { UsageCreate } from "./usage/UsageCreate";
import { UsageEdit } from "./usage/UsageEdit";
import { UsageShow } from "./usage/UsageShow";
import { PlanList } from "./plan/PlanList";
import { PlanCreate } from "./plan/PlanCreate";
import { PlanEdit } from "./plan/PlanEdit";
import { PlanShow } from "./plan/PlanShow";
import { BillingAccountList } from "./billingAccount/BillingAccountList";
import { BillingAccountCreate } from "./billingAccount/BillingAccountCreate";
import { BillingAccountEdit } from "./billingAccount/BillingAccountEdit";
import { BillingAccountShow } from "./billingAccount/BillingAccountShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { StripeWebhookEventList } from "./stripeWebhookEvent/StripeWebhookEventList";
import { StripeWebhookEventCreate } from "./stripeWebhookEvent/StripeWebhookEventCreate";
import { StripeWebhookEventEdit } from "./stripeWebhookEvent/StripeWebhookEventEdit";
import { StripeWebhookEventShow } from "./stripeWebhookEvent/StripeWebhookEventShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Telestack-Gateway"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Invoice"
          list={InvoiceList}
          edit={InvoiceEdit}
          create={InvoiceCreate}
          show={InvoiceShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="Usage"
          list={UsageList}
          edit={UsageEdit}
          create={UsageCreate}
          show={UsageShow}
        />
        <Resource
          name="Plan"
          list={PlanList}
          edit={PlanEdit}
          create={PlanCreate}
          show={PlanShow}
        />
        <Resource
          name="BillingAccount"
          list={BillingAccountList}
          edit={BillingAccountEdit}
          create={BillingAccountCreate}
          show={BillingAccountShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="StripeWebhookEvent"
          list={StripeWebhookEventList}
          edit={StripeWebhookEventEdit}
          create={StripeWebhookEventCreate}
          show={StripeWebhookEventShow}
        />
      </Admin>
    </div>
  );
};

export default App;
