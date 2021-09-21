const baseUrl = "https://api.github.com";

export const endpoints = {
  allWorkflows: () => `${baseUrl}/repos/litmuschaos/litmus-e2e/actions/workflows`,
  allPipelines: () => `${baseUrl}/repos/litmuschaos/litmus-e2e/actions/runs`,
  pipelinesByWorkflow: (workflowName) => `${baseUrl}/repos/litmuschaos/litmus-e2e/actions/workflows/${workflowName}/runs`,
}