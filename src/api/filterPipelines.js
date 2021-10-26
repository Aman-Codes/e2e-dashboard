import { getLocalStorage } from "shared/storageHelper";
import sendGetRequest from "api/sendRequest";
import endpoints from "constants/endpoints";

const manualRuns = getLocalStorage("manualRuns");
const nightlyRuns = getLocalStorage("nightlyRuns");
const pipelineMap = {
  manual: {},
  nightly: {},
};

const filterPipelines = () => {
  manualRuns?.forEach((run) => {
    sendGetRequest(`${endpoints.pipelinesByWorkflow(run.id)}?per_page=1`).then(
      (response) => {
        pipelineMap.manual[run.name] = {
          ...run,
          workflow_runs: response?.workflow_runs?.[0],
        };
      }
    );
  });
  nightlyRuns?.forEach((run) => {
    sendGetRequest(`${endpoints.pipelinesByWorkflow(run.id)}?per_page=1`).then(
      (response) => {
        pipelineMap.nightly[run.name] = {
          ...run,
          workflow_runs: response?.workflow_runs?.[0],
        };
      }
    );
  });
  return pipelineMap;
};

export default filterPipelines;
