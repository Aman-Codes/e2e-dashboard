import React, { lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Scaffold from "containers/layouts/Scaffold";
import SuspenseLoader from "components/SuspenseLoader";

const ErrorPage = lazy(() => import("pages/ErrorPage"));
const HomePage = lazy(() => import("pages/HomePage"));
const WorkflowPage = lazy(() => import("pages/WorkflowPage"));

const Routes = () => (
  <Scaffold>
    <SuspenseLoader style={{ height: "80vh" }}>
      <Switch>
        <Route exact path="/" render={(props) => <HomePage {...props} />} />
        <Route
          exact
          path="/workflows"
          render={(props) => <WorkflowPage {...props} />}
        />
        <Route exact path="/404" component={ErrorPage} />
        <Redirect to="/404" />
      </Switch>
    </SuspenseLoader>
  </Scaffold>
);

export default Routes;
