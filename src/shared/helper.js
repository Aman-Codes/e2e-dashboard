import { formatDuration, intervalToDuration } from "date-fns";

export const readableNameConverter = (name) => name?.replace(/-/g, " ");

export const timeDifference = (startTime, endTime) => {
  const durations = intervalToDuration({
    start: new Date(startTime),
    end: new Date(endTime),
  });
  return formatDuration(durations) || "0 second";
};

export const getTotalPipelineTime = (pipelines) => {
  let totalTime = 0;
  pipelines.forEach((pipeline) => {
    totalTime +=
      new Date(pipeline?.completed_at).getTime() -
      new Date(pipeline?.started_at).getTime();
  });
  const now = new Date();
  return timeDifference(now, new Date(now.getTime() + totalTime));
};
