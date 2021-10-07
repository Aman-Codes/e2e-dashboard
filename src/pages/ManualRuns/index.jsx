import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Typography } from 'litmus-ui';
import Center from 'containers/layouts/Center';
import Table from 'components/Table';
import CustomRadialChart from 'components/CustomRadialChart';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  label: {
    color: '#0000008a'
  }
}));

const ManualRuns = ({ manualData }) => {
  const classes = useStyles();
  const [pipelineName, setPipelineName] = useState('');

  const handleChange = (event) => {
    setPipelineName(event.target.value);
  };

  return (
    <>
      <Center>
        <Typography>Select Manual Pipeline:</Typography>
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
            {manualData && manualData.map((manualItem) => 
              <option value={manualItem.name} key={manualItem.id}>{manualItem.readableName}</option>)}
          </Select>
        </FormControl>
      </Center>
      {pipelineName && <>
        <Center><CustomRadialChart pass={20} fail={5} pending={2} size="large" /></Center>        
        <Table tableName={pipelineName} />
      </>}
    </>
  );
};

export default ManualRuns;