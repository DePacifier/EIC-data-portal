// Library Imports
import React from "react";
import { Paper, MenuItem } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExportContainer,
  GridCsvExportMenuItem,
  GridPrintExportMenuItem,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";

// Style Imports
import "./data-center.styles.scss";

// Component Imports
import ExcelExportMenuItem from "../../components/excel-export/excel-export.component";

// Mock Data
const rows = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome" },
  { id: 3, col1: "MUI", col2: "is Amazing" },
];

const data = [
  {
    id: 1,
    fileNumber: 0,
    permitNumber: 0,
    dateOfPermit: 0,
    tinNumber: 0,
    licensingOffice: 0,
    countryOfOrigin: 0,
    countryOfRegistration: 0,
    nationality: 0,
    phoneNumber: 0,
    email: 0,
    post: 0,
    fax: 0,
    nameOfInvestor: 0,
    formOfCompany: 0,
    typeOfInvestor: 0,
    investmentType: 0,
    typeOfInvestmentLicense: 0,
    percentageOfForeignShare: 0,
    economicSector: 0,
    sector: 0,
    subsector: 0,
    division: 0,
    investmentActivity: 0,
    regionOfInvestment: 0,
    zoneOfInvestment: 0,
    citytownOfInvestment: 0,
    weredaOfInvestment: 0,
    capital: 0,
    sourceFromSelf: 0,
    sourceFromLoan: 0,
    landSizeRequired: 0,
    investmentStatus: 0,
    dateOfStatusChange: 0,
    terminate: 0,
    dateOfTermination: 0,
    numberOfPermanentEmployees: 0,
    numberOfTemporaryEmployees: 0,
    licenseRegions: 0,
    typeOfChange: 0,
    dateOfChange: 0,
  },
];

// Mapping Data
const columns = [
  {
    field: "col1",
    headerName: "Column 1",
    description: "Description Needed",
    width: 200,
  },
  { field: "col2", headerName: "Column 2" },
];

const csvOptions = { delimiter: ";" };

const CustomExportButton = (props) => (
  <GridToolbarExportContainer {...props}>
    <ExcelExportMenuItem />
    <GridCsvExportMenuItem options={csvOptions} />
    <GridPrintExportMenuItem />
  </GridToolbarExportContainer>
);

const CustomToolbar = (props) => (
  <GridToolbarContainer {...props}>
    <GridToolbarColumnsButton />
    <GridToolbarFilterButton />
    <GridToolbarDensitySelector />
    <CustomExportButton />
  </GridToolbarContainer>
);

const DataCenterPage = () => {
  return (
    <section className="page-container">
      <h4 className="page-title">Data Center</h4>
      <Paper className="grid-container">
        <DataGrid
          rows={rows}
          columns={columns}
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      </Paper>
    </section>
  );
};

export default DataCenterPage;
