import React, { useEffect } from 'react';
import { LitmusThemeProvider } from 'litmus-ui';
import { Router } from 'react-router-dom';
import history from 'utils/history';
import { sendGetRequest } from 'api/sendRequest';
import endpoints from 'constants/endpoints';
import { filterWorkflow } from 'api/filterWorkflow';
import Routes from './Routes';
import { getLocalStorage, setLocalStorage } from 'shared/storageHelper';

const App = () => {
  useEffect(() => {
    if (!getLocalStorage("allRuns")) {
      sendGetRequest(endpoints.allWorkflows())
      .then((data) => {
        setLocalStorage("allRuns", data);
        const {scheduled, manual} = filterWorkflow(data);
        setLocalStorage("scheduledRuns", scheduled);
        setLocalStorage("manualRuns", manual);
      });
    }
  }, [])

  return (
    <LitmusThemeProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </LitmusThemeProvider>
  );
}

export default App;