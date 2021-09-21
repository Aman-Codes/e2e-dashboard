import { readableNameConverter } from "shared/helper";

export const filterWorkflow = (responseData) => {
  const total_count = responseData.total_count;
  const scheduledData = [];
  const manualData = [];
  responseData.workflows.forEach((element) => {
    const matches = element.name.match(/^Scheduled.*$/);
    if (matches != null) {
      scheduledData.push({
        id: element.id,
        name: element.name,
        readableName: readableNameConverter(element.name)
      })
    }
    else {
      manualData.push({
        id: element.id,
        name: element.name,
        readableName: readableNameConverter(element.name)
      })
    }    
  });
  console.log("total_count is", total_count);
  console.log("scheduledData is", scheduledData);
  console.log("manualData is", manualData);
  return {
    scheduled: scheduledData,
    manual: manualData,
  }
}