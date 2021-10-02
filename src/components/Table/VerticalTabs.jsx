import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { OutlinedPills, Icon } from 'litmus-ui';
import CustomRadialChart from 'components/CustomRadialChart';
import TimelineComponent from './TimelineComponent';
import jobs from './data';
import { jobStepResult } from './helper';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 'max-content',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tab: {
    '& span.MuiTab-wrapper': {
      alignItems: 'flex-start',
    },    
  },
  outlinedPills: {
    display: 'block',
    margin: '0.5rem',
    width: 'min-content',
    borderRadius: '1rem',
    padding: '0.5rem 1rem 1.5rem 1rem',
    fontWeight: '500'
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(jobStepResult(jobs["jobs"][0]["steps"]) || {
    pending: 0,
    pass: 0,
    fail: 0,
  });

  const handleChange = (_event, newValue) => {
    setValue(newValue);
    console.log(jobStepResult(jobs.jobs[newValue]["steps"]));
    setResult(jobStepResult(jobs.jobs[newValue]["steps"]));
  };

  return (
    <>
      <hr/>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={7}>
          <p>
            Pipeline Id: <a href="https://github.com" target="_blank" rel="noopener noreferrer">12345 <Icon name="externalLink"/></a><br/>
            <Icon name="clock"/> &nbsp;Time Duration: 1h:10m:5s <br/>
          </p>
        </Grid>
        <Grid item xs={5}>
          <p style={{ paddingRight: '1rem' }}>
            { result && <CustomRadialChart 
              pass={result.pass}
              fail={result.fail}
              pending={result.pending}
            />}
          </p>
        </Grid>
      </Grid>
      <hr/>
      <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab 
          label={
            <OutlinedPills
              color="primary"
              label="Chaos_Result_Component_Test"
              size="medium"
              variant="succeeded"
              className={classes.outlinedPills}
            />
          }
          {...a11yProps(0)}
          className={classes.tab}
        />
        <Tab 
          label={
            <OutlinedPills
              color="primary"
              label="Chaos_Operator_Component_Test"
              size="medium"
              variant="succeeded"
              className={classes.outlinedPills}
            />
          }
          {...a11yProps(1)} 
          className={classes.tab}
          />
        <Tab 
          label={
            <OutlinedPills
              color="primary"
              label="Chaos_Engine_Component_Test"
              size="medium"
              variant="failed"
              className={classes.outlinedPills}
            />
          }
          {...a11yProps(2)} 
          className={classes.tab}
          />
        <Tab 
          label={
            <OutlinedPills
              color="primary"
              label="Chaos_Experiment_Component_Test"
              size="medium"
              variant="running"
              className={classes.outlinedPills}
            />
          }
          {...a11yProps(3)} 
          className={classes.tab}
          />
        <Tab 
          label={
            <OutlinedPills
              color="primary"
              label="Pipeline_Update"
              size="medium"
              variant="pending"
              className={classes.outlinedPills}
            />
          }
          {...a11yProps(4)} 
          className={classes.tab}
          />
      </Tabs>
      {jobs && jobs.jobs.map((job, index) => (
        <TabPanel value={value} index={index}>
          <TimelineComponent job={job} />
        </TabPanel>
      ))}
    </div>
    <hr/>
    </>
  );
}
