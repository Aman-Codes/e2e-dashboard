import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { RadialChart } from 'litmus-ui';
import data from 'data/podLevelRun';

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
];

const DataTable = () => {
  return (
    <>
    <div
      style={{
        height: '14rem',
        margin: '0.5rem',
        width: '22rem'
      }}
    >
      <RadialChart
        alignLegendTable="right"
        heading="total"
        legendTableHeight={100}
        radialData={[
          {
            baseColor: '#00CC9A',
            label: 'pass',
            value: 60
          },
          {
            baseColor: '#5252F6',
            label: 'pending',
            value: 30
          },
          {
            baseColor: '#CA2C2C',
            label: 'failed',
            value: 50
          }
        ]}
        showCenterHeading
      />
    </div>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        id="id"
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        disableSelectionOnClick
      />
    </div>
    </>
  );
}

export default DataTable;
