import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Typography } from '@material-ui/core';
import { Drawer, TextButton } from 'litmus-ui';
import CustomRadialChart from 'components/CustomRadialChart';
import data from 'data/podLevelRun';
import { readableNameConverter } from 'shared/helper';
import useStyles from './styles';
import VerticalTabs from './VerticalTabs';

const DataTable = ({ tableName, match:{ params: { pipelineName } = {}} = {}, displayVersion=true }) => {
  const [pageSize, setPageSize] = useState(10);
  const [displayDrawer, setDisplayDrawer] = useState(false);
  const classes = useStyles();
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDisplayDrawer(open);
  };
  const columns = [
    { 
      field: 'id',
      headerName: 'Pipeline Id',
      flex: 1,
      renderCell: (params) => (
        <TextButton 
          size="small" 
          variant="highlight"
          onClick={toggleDrawer(true)}  
        >
          {params.value}
        </TextButton>
      ),
    },
    {
      field: 'executionTime',
      headerName: 'Execution Time',
      flex: 1,
    },
    {
      field: 'commit',
      headerName: 'Description',
      flex: 1,
      renderCell: (params) => (
        <>
        <a href={`https://github.com/litmuschaos/litmus-e2e/commit/${params.value.id}`}>
          {`#${params.value.id.substring(1,7)}`}
        </a> &nbsp;
        Repository: {params.value.repository}
        </>
      ),
    },
    ...(displayVersion ? [{
      field: 'version',
      headerName: 'Version',
      flex: 1,
    }]: []),
    { 
      field: 'status',
      headerName: 'Status',
      flex: 1,
      renderCell: (params) => (
        <CustomRadialChart 
          pass={params.value.pass}
          fail={params.value.fail}
          pending={params.value.pending}
        />
      ),
    },
  ];
  return (
    <>
    <Typography variant="h3" component="h2" align="center" className={classes.topMargin}>
      {readableNameConverter(tableName) || readableNameConverter(pipelineName)}
    </Typography>
    <Typography variant="subtitle1" component="h3" align="center" className={classes.topMargin}>
      It contains the test cases (GO BDDs) for component-level generic experiments
    </Typography>
    <br/>
    <DataGrid
      rows={data}
      columns={columns}
      id={tableName || pipelineName}
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[5, 10, 20]}
      autoHeight={true}
      pagination
      disableSelectionOnClick
    />
    <Drawer
        anchor="right"
        icon="close"
        variant="temporary"
        onButtonClose={toggleDrawer(false)}
        onClose={toggleDrawer(false)}
        open={displayDrawer}
      >
        <div className={classes.drawerContainer}>
          <VerticalTabs/>
        </div>
      </Drawer>
    </>
  );
}

export default DataTable;