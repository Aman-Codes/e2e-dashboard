import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Typography } from 'litmus-ui';
import Center from 'containers/layouts/Center';
import Table from 'components/Table';
import { getLocalStorage } from 'shared/storageHelper';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  label: {
    color: '#0000008a'
  }
}));

const ScheduledRuns = ({ defaultPipeline='' }) => {
  const classes = useStyles();
  const [pipelineName, setPipelineName] = useState(defaultPipeline);
  const scheduledData = getLocalStorage("scheduledRuns");
  const handleChange = (event) => {
    setPipelineName(event.target.value);
  };
  return (
    <>
      <Center>
        <Typography>Select Scheduled Pipeline:</Typography>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-pipelineName" className={classes.label}>Pipeline Name</InputLabel>
          <Select
            native
            value={pipelineName}
            onChange={handleChange}
            label="pipelineName"
            inputProps={{
              name: 'pipelineName',
              id: 'outlined-pipelineName',
            }}
          >
            <option aria-label="None" value="" />
            {scheduledData && scheduledData.map((scheduledItem) => 
              <option value={scheduledItem.name} key={scheduledItem.id}>{scheduledItem.readableName}</option>)}
          </Select>
        </FormControl>
      </Center>
      {pipelineName && <Table tableName={pipelineName} />}
    </>
  );
};

export default ScheduledRuns;