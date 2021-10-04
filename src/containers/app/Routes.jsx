import React, { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Scaffold from 'containers/layouts/Scaffold';
import { SuspenseLoader } from 'components/SuspenseLoader';

const ErrorPage = lazy(() => import('pages/ErrorPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const DataTable = lazy(() => import('components/Table'));

const Routes = ({ scheduledData, manualData }) => {
  return (
    <Scaffold scheduledData={scheduledData} manualData={manualData}>
      <SuspenseLoader style={{ height: '80vh' }}>
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/manual-runs" component={DataTable} />
          <Route exact path="/manual-runs/:pipelineName" component={DataTable} />
          <Route exact path="/scheduled-runs" component={DataTable} />
          <Route exact path="/scheduled-runs/:pipelineName" render={(props) => <DataTable {...props} displayVersion={false} />} />
          <Route exact path="/404" component={ErrorPage} />
          <Redirect exact path="/" to="/home" />          
          <Redirect to="/404" />
        </Switch>
      </SuspenseLoader>
    </Scaffold>
  );
};

export default Routes;