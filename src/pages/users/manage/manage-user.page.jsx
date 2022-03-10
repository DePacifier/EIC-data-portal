// Library Imports
import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
} from "@mui/material";

// Style Imports
import "./manage-user.styles.scss";

// Mock Data Imports
import { usersData } from "../../../mock/mock-table-data";

// User Attributes
const userAttributes = [
  "Name",
  "Privilege",
  "Region",
  "Email",
  "Phone-Number",
  "Status",
  "Actions",
];

const ManageUsersPage = () => {
  return (
    <section className="page-container">
      <h4 className="page-title">Manage Users</h4>
      <TableContainer component={Paper}>
        <Table aria-label="List of Users Table">
          <TableHead>
            <TableRow>
              {userAttributes.map((attribute) => (
                <TableCell
                  variant="head"
                  sx={{ fontWeight: "bold", fontSize: "1rem" }}
                >
                  {attribute}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {usersData.map((user, idx) => (
              <TableRow key={idx}>
                <TableCell>{user.Name}</TableCell>
                <TableCell>{user.Privilege}</TableCell>
                <TableCell>{user.Region}</TableCell>
                <TableCell>{user.Email}</TableCell>
                <TableCell>{user.phoneNumber}</TableCell>
                <TableCell>{user.Status}</TableCell>
                <TableCell>Action Buttons</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default ManageUsersPage;
