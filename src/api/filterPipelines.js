import { getLocalStorage } from "shared/storageHelper";
import sendGetRequest from "api/sendRequest";
import endpoints from "constants/endpoints";

const manualRuns = getLocalStorage("manualRuns");
const nightlyRuns = getLocalStorage("nightlyRuns");
const pipelineMap = {
  all: {
    id: 0,
    name: "all-workflows",
    readableName: "All Workflows",
    badge_url:
      "https://img.shields.io/badge/All%20Workflows-passing-%2331c754?logo=GitHub",
    workflow_runs: {
      updated_at: new Date(0).toISOString(),
    },
    html_url:
      "https://github.com/litmuschaos/litmus-e2e/tree/master/.github/workflows",
  },
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
        if (
          new Date(pipelineMap.all.workflow_runs.updated_at).getTime() <
          new Date(response?.workflow_runs?.[0]?.updated_at).getTime()
        ) {
          pipelineMap.all.workflow_runs.updated_at = new Date(
            response?.workflow_runs?.[0]?.updated_at
          ).toISOString();
        }
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
        if (
          new Date(pipelineMap.all.workflow_runs.updated_at).getTime() <
          new Date(response?.workflow_runs?.[0]?.updated_at).getTime()
        ) {
          pipelineMap.all.workflow_runs.updated_at = new Date(
            response?.workflow_runs?.[0]?.updated_at
          ).toISOString();
        }
      }
    );
  });
  return pipelineMap;
};

export default filterPipelines;
