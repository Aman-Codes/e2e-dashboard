import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Typography } from '@material-ui/core';
import { RadialChart } from 'litmus-ui';
import data from 'data/podLevelRun';
import useStyles, { CustomTooltip } from './styles';

const DataTable = () => {
  const [pageSize, setPageSize] = useState(5);
  const classes = useStyles();
  const columns = [
    { 
      field: 'id',
      headerName: 'Pipeline Id',
      flex: 1,
      renderCell: (params) => (
        <a href={`https://github.com/litmuschaos/litmus-e2e/actions/runs/${params.value}`} target="_blank" rel="noopener noreferrer">
          {params.value}
        </a>
      ),
    },
    {
      field: 'executionTime',
      headerName: 'Execution Time',
      flex: 1,
    },
    {
      field: 'version',
      headerName: 'Version',
      flex: 1,
    },
    { 
      field: 'status',
      headerName: 'Status',
      flex: 1,
      renderCell: (params) => (
        <CustomTooltip 
          title={<p>Pass: {params.value.pass}<br/>Fail: {params.value.fail}<br/>Pending: {params.value.pending}</p>} 
          placement="right" 
          arrow
        >
        <div className={classes.smallRadialChart} >         
          <RadialChart
            arcWidth={4}
            showLegend={false}
            circleExpandOnHover={3}
            radialData={[
              {
                baseColor: '#00CC9A',
                label: 'Pass',
                value: params.value.pass
              },
              {
                baseColor: '#5252F6',
                label: 'Pending',
                value: params.value.pending
              },
              {
                baseColor: '#CA2C2C',
                label: 'Failed',
                value: params.value.fail
              }
            ]}
            showCenterHeading={false}
          />      
        </div>
      </CustomTooltip> 
      ),
    },
  ];
  return (
    <>
    <Typography variant="h3" component="h2" align="center">
      Pod Level E2E Runs
    </Typography>
    {/* <Grid container justify = "center">
    <div
      style={{
        height: '12rem',
        margin: '0.5rem',
        width: '22rem'
      }}
    >
      <RadialChart
        alignLegendTable="right"
        heading="Total"
        legendTableHeight={100}
        radialData={[
          {
            baseColor: '#00CC9A',
            label: 'Pass',
            value: 60
          },
          {
            baseColor: '#5252F6',
            label: 'Pending',
            value: 30
          },
          {
            baseColor: '#CA2C2C',
            label: 'Failed',
            value: 50
          }
        ]}
        showCenterHeading
      />
    </div> 
    </Grid> */}
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        id="podLevelRunTable"
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        disableSelectionOnClick
      />
    </div>
    </>
  );
}

export default DataTable;
