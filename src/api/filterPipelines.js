import sendGetRequest from "api/sendRequest";
import endpoints from "constants/endpoints";

export const objectToArray = (obj) => {
  console.log("obj is", obj);
  // console.log("expected is", Object.values(obj));
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (const key in obj) {
    console.log("key is", key, "value is", obj[key]);
  }
  return obj;
  // const arr = [];
  // // eslint-disable-next-line no-restricted-syntax
  // for (const [key] of Object.entries(obj)) {
  //   arr.push(obj[key]);
  // }
  // console.log("arr is", arr);
  // return arr;
  // return Object.values(obj);
};

const filterPipelines = (pipelineData) => {
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
    manual: [],
    nightly: [],
  };
  console.log("pipelineData received is", pipelineData);
  pipelineData?.manual?.forEach((run) => {
    sendGetRequest(`${endpoints.pipelinesByWorkflow(run.id)}?per_page=1`).then(
      (response) => {
        // pipelineMap.manual[run.name] = {
        //   ...run,
        //   workflow_runs: response?.workflow_runs?.[0],
        // };
        pipelineMap.manual.push({
          ...run,
          workflow_runs: response?.workflow_runs?.[0],
        });
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
  pipelineData?.nightly?.forEach((run) => {
    sendGetRequest(`${endpoints.pipelinesByWorkflow(run.id)}?per_page=1`).then(
      (response) => {
        // pipelineMap.nightly[run.name] = {
        //   ...run,
        //   workflow_runs: response?.workflow_runs?.[0],
        // };
        pipelineMap.nightly.push({
          ...run,
          workflow_runs: response?.workflow_runs?.[0],
        });
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
  console.log("pipelineMap was", pipelineMap);
  // pipelineMap.manual = objectToArray(pipelineMap.manual);
  // pipelineMap.nightly = objectToArray(pipelineMap.nightly);
  return pipelineMap;
};

export default filterPipelines;
