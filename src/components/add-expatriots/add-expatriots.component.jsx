import React, { useState } from "react";

import { TextField, MenuItem, Button, Stack, Box } from "@mui/material";

// Mock data
import { nationalities } from "../../mock/mock-select-data";

const AddExpatriots = ({ submissionHandle }) => {
  const [nationality, setNationality] = useState("");
  const [numberOfEmployees, setNumberOfEmployees] = useState("");
  const [error, setError] = useState({});

  const addExpat = (event) => {
    event.preventDefault();
    setError({});
    let validation = {};

    // Validate Nationality
    if (nationality === "") {
      validation = {
        nationality: "Nationality of Employees is required!",
      };
    }

    if (numberOfEmployees === "" || numberOfEmployees < 0) {
      // Validate Number of Employees
      validation = {
        ...validation,
        numberOfEmployees: "Nationality of Employees is required!",
      };
    }

    if (Object.keys(validation).length === 0) {
      let data = nationality + " : " + numberOfEmployees;
      submissionHandle(data);
      setNationality("");
      setNumberOfEmployees("");
    } else {
      setError(validation);
    }
  };

  return (
    <Box>
      <Stack direction={"row"} spacing={2}>
        <TextField
          error={!!error.nationality}
          helperText={!!error.nationality && error.nationality}
          sx={{ width: 2 / 5 }}
          select
          value={nationality}
          onChange={(e) => {
            setNationality(e.target.value);
            setError({});
          }}
          label="Expatriots Nationality"
          defaultValue={""}
        >
          {nationalities.map((nationality, idx) => (
            <MenuItem key={idx} value={nationality}>
              {nationality}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          error={!!error?.numberOfEmployees}
          helperText={!!error?.numberOfEmployees && error?.numberOfEmployees}
          type="number"
          value={numberOfEmployees}
          onChange={(e) => {
            setNumberOfEmployees(e.target.value);
            setError({});
          }}
          label="Number of Employees"
          sx={{ width: 2 / 5 }}
        />
        <Button sx={{ width: 1 / 5 }} onClick={addExpat}>
          Add Expat
        </Button>
      </Stack>
    </Box>
  );
};

export default AddExpatriots;
