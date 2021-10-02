import formatDistanceStrict from 'date-fns/formatDistanceStrict';

export const readableNameConverter = (name) => (name.replace(/-/g, " "));

export const timeDifference = (startTime, endTime) => {
  return formatDistanceStrict(
    new Date(startTime),
    new Date(endTime)
  )
}
