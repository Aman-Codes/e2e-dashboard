import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { 
  Typography, 
  Grid,
} from '@material-ui/core';
import { RadialChart, Drawer, TextButton, Icon } from 'litmus-ui';
import data from 'data/podLevelRun';
import { readableNameConverter } from 'shared/helper';
import useStyles, { CustomTooltip } from './styles';
import VerticalTabs from './VerticalTabs';

const DataTable = ({ tableName, match:{ params: { pipelineName } } }) => {
  const [pageSize, setPageSize] = useState(5);
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
      {tableName || readableNameConverter(pipelineName)}
    </Typography>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        id={tableName || pipelineName}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        disableSelectionOnClick
      />
    </div>
    <Drawer
        anchor="right"
        icon="close"
        variant="temporary"
        onButtonClose={toggleDrawer(false)}
        onClose={toggleDrawer(false)}
        open={displayDrawer}
      >
        <div className={classes.drawerContainer}>
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
                <CustomTooltip 
                  title={<p>Pass: 2<br/>Fail: 1<br/>Pending: 2</p>} 
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
                          value: 2
                        },
                        {
                          baseColor: '#5252F6',
                          label: 'Pending',
                          value: 2
                        },
                        {
                          baseColor: '#CA2C2C',
                          label: 'Failed',
                          value: 1
                        }
                      ]}
                      showCenterHeading={false}
                    />      
                  </div>
                </CustomTooltip>
              </p>
            </Grid>
          </Grid>
          <hr/>
          <p>
          <VerticalTabs/>
          </p>
          <hr/>
        </div>
      </Drawer>
    </>
  );
}

export default DataTable;