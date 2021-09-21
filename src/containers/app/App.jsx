import React, { useState, useEffect } from 'react';
import { LitmusThemeProvider } from 'litmus-ui';
import { Router } from 'react-router-dom';
import history from 'utils/history';
import { sendGetRequest } from 'api/sendRequest';
import { endpoints } from 'constants/endpoints';
import { filterWorkflow } from 'api/filterWorkflow';
import Routes from './Routes';

const App = () => {
  const [scheduledData, setScheduledData] = useState([]);
  const [manualData, setManualData] = useState([]);
  useEffect(() => {
    sendGetRequest(endpoints.allWorkflows())
    .then((data) => {
      console.log("data is", data);
      const {scheduled, manual} = filterWorkflow(data);
      setScheduledData(scheduled);
      setManualData(manual);
    });
  }, [])

  return (
    <LitmusThemeProvider>
      <Router history={history}>
        <Routes scheduledData={scheduledData} manualData={manualData}/>
      </Router>
    </LitmusThemeProvider>
  );
}

export default App;