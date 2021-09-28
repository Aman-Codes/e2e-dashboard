import React from 'react';
import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineConnector, 
  TimelineContent, 
  TimelineDot 
} from '@material-ui/lab';
import { Icon } from 'litmus-ui';

const colours = {
  success: '#09825d',
  fail: '#dd2b0e',
  running: '#3a97d4',
  pending: '#949ab7'
}

const TimelineItemComponent = ({ step, connectorLine=true }) => {
  /*
    Possible status values are:
    completed
    in_progress
    pending
    queued
    requeued
    waiting
  */

  if (step.status === "completed") {
    /*
    Possible conclusion values are:
    action_required
    cancelled
    failure
    neutral
    skipped
    stale
    startup_failure
    success
    timed_out
    */  
    switch (step.conclusion) {
      case "success":
        return (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <Icon name="experimentPassed" color={colours.success} />
            </TimelineDot>
            {connectorLine && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>{step.name}</TimelineContent>
        </TimelineItem>      
        );
      case "failure":
        return (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot>
                <Icon name="experimentFailed" color={colours.fail}/>
              </TimelineDot>
              {connectorLine && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>{step.name}</TimelineContent>
          </TimelineItem>      
        );
      case "skipped":
        return (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot>
                <Icon name="experimentSkipped"  color={colours.pending}/>
              </TimelineDot>
              {connectorLine && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>{step.name}</TimelineContent>
          </TimelineItem> 
        )
      default:
        return (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot>
                <Icon name="experimentError" color={colours.fail} />
              </TimelineDot>
              {connectorLine && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>{step.name}</TimelineContent>
          </TimelineItem> 
        )
    }
  }  
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot>
          {step.conclusion}
          <Icon name="experimentPending"  color={colours.running}/>
        </TimelineDot>
        {connectorLine && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>{step.name}</TimelineContent>
    </TimelineItem>
  )
};

const TimelineComponent = ({ job }) => {
  return (
    <Timeline>
      {job.steps && job.steps.map((step, index) => {
        if(index === job.steps.length - 1) {
          return <TimelineItemComponent step={step} connectorLine={false}/>
        }
        return <TimelineItemComponent step={step} />
      })}
  </Timeline>
  )
}

export default TimelineComponent;