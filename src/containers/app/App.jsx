import React, { lazy } from 'react';
import { LitmusThemeProvider } from 'litmus-ui';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import history from "../../history";
import Scaffold from 'containers/layouts/Scaffold';
import { SuspenseLoader } from 'components/SuspenseLoader';

const ErrorPage = lazy(() => import('pages/ErrorPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const DataTable = lazy(() => import('pages/Table'));

const Routes = () => {
  return (
    <Scaffold>
      <SuspenseLoader style={{ height: '80vh' }}>
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/table" component={DataTable} />
          <Redirect exact path="/" to="/home" />
          <Route exact path="/404" component={ErrorPage} />
          <Redirect to="/404" />
        </Switch>
      </SuspenseLoader>
    </Scaffold>
  );
};

function App() {
  return (
    <LitmusThemeProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </LitmusThemeProvider>
  );
}

export default App;