import React, { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Scaffold from 'containers/layouts/Scaffold';
import { SuspenseLoader } from 'components/SuspenseLoader';

const ErrorPage = lazy(() => import('pages/ErrorPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const DataTable = lazy(() => import('components/Table'));
const ScheduledRuns = lazy(() => import('pages/ScheduledRuns'));
const ManualRuns = lazy(() => import('pages/ManualRuns'));

const Routes = () => {
  return (
    <Scaffold>
      <SuspenseLoader style={{ height: '80vh' }}>
        <Switch>
          <Route exact path="/home" render={(props) => <HomePage {...props} />} />
          <Route exact path="/manual-runs" render={(props) => <ManualRuns {...props} />} />
          <Route exact path="/manual-runs/:pipelineName" component={DataTable} />
          <Route exact path="/scheduled-runs" render={(props) => <ScheduledRuns {...props} />} />
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