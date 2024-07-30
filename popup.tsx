import {useState} from "react"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from "@mui/material/Button";
import {LicenseInfo} from '@mui/x-license';

import {
  DataGridPremium, type GridColDef, type GridRowsProp, GridToolbarContainer, GridToolbarExport,
} from "@mui/x-data-grid-premium";

function CustomerToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport/>
    </GridToolbarContainer>
  )
}

function IndexPopup() {
  const [data, setData] = useState("")
  LicenseInfo.setLicenseKey('e0d9bb8070ce0054c9d9ecb6e82cb58fTz0wLEU9MzI0NzIxNDQwMDAwMDAsUz1wcmVtaXVtLExNPXBlcnBldHVhbCxLVj0y');
  const rows: GridRowsProp = [
    {id: 1, col1: 'Hello', col2: 'World'},
    {id: 2, col1: '张斯克', col2: 'is Awesome'},
    {id: 3, col1: 'MUI', col2: 'is Amazing'},
  ];

  const columns: GridColDef[] = [
    {field: 'col1', headerName: 'Column 1', width: 150},
    {field: 'col2', headerName: 'Column 2', width: 150},
  ];

  return (
    <div
      style={{
        padding: 16
      }}>
      <h2>
        Welcome to your{" "}
        <a href="https://www.plasmo.com" target="_blank">
          Plasmo
        </a>{" "}
        Extension!
      </h2>
      <Button variant="contained">Hello world</Button>
      <div style={{height: 300, width: '100%'}}>
        <DataGridPremium rows={rows} columns={columns} slots={
          {toolbar: CustomerToolbar}
        }/>
      </div>
      <input onChange={(e) => setData(e.target.value)} value={data}/>
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}

export default IndexPopup
