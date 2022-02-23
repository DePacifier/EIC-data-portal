import React from "react";

import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  MenuItem,
  Stack,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  FormHelperText,
  Paper,
  Chip,
  styled,
} from "@mui/material";

// Styles Import
import "./investment-status-form.styles.scss";

// Component Imports
import AddExpatriots from "../add-expatriots/add-expatriots.component";

// Yup Validation and Schema Import
import { yupResolver } from "@hookform/resolvers/yup";
import statusSchema from "./validation-schema";

// Mock data
import { regions } from "../../mock/mock-select-data";

// Option values
const investmentStatuses = [
  "Implementation",
  "Operational",
  "Multi-regional",
  "Cancellation",
  "Capital Change",
  "Project Address Change",
  "Investor Name Change",
  "Activity Change",
  "Status Change",
  "Expatriate Employees",
  "Other Changes",
];

function InvestmentStatusForm({ onBack, onSubmit }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      licenseRegions: [],
      expatriotEmployees: [],
    },
    resolver: yupResolver(statusSchema),
  });

  const [terminateValue, expatriotEmployeesValue] = watch([
    "terminate",
    "expatriotEmployees",
  ]);

  const mysubmit = (data) => {
    console.log(data);
    console.log("called");
  };

  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  // Handle Expatriot Employees Add Form
  const handleAddExpat = (newExpatItem) => {
    console.log(newExpatItem);
    if (
      expatriotEmployeesValue.filter(
        (expatriotItem) => expatriotItem === newExpatItem
      ).length === 0
    ) {
      setValue("expatriotEmployees", [
        ...expatriotEmployeesValue,
        newExpatItem,
      ]);
    }
  };

  // Handle Chip Deletion
  const handleDelete = (chipToDelete) => () => {
    console.log(chipToDelete);
    setValue(
      "expatriotEmployees",
      expatriotEmployeesValue.filter(
        (expatriotItem) => expatriotItem !== chipToDelete
      )
    );
  };

  return (
    <form
      className="invest-form"
      onSubmit={handleSubmit(mysubmit, () => console.log("invalid state"))}
    >
      <span className="form-page-title">Status Information</span>
      <section className="form-page">
        <section className="left">
          <Stack spacing={2}>
            <Stack
              direction={"row"}
              spacing={2}
              justifyContent={"space-between"}
            >
              <TextField
                error={!!errors.investmentStatus}
                helperText={
                  errors.investmentStatus && errors?.investmentStatus?.message
                }
                select
                {...register("investmentStatus")}
                label="Investment Status"
                defaultValue={""}
                fullWidth
              >
                {investmentStatuses.map((status, idx) => (
                  <MenuItem key={idx} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                error={!!errors.dateOfStatusChange}
                helperText={
                  errors.dateOfStatusChange &&
                  errors?.dateOfStatusChange?.message
                }
                {...register("dateOfStatusChange")}
                type="date"
                label="Date of Status Change"
                defaultValue={""}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </Stack>
            <Stack
              direction={"row"}
              spacing={2}
              justifyContent={"space-between"}
            >
              <TextField
                error={!!errors.terminate}
                helperText={errors.terminate && errors?.terminate?.message}
                select
                {...register("terminate")}
                label="Terminate"
                defaultValue={false}
                fullWidth
              >
                <MenuItem value={false}>No</MenuItem>
                <MenuItem value={true}>Yes</MenuItem>
              </TextField>
              <TextField
                disabled={!(terminateValue === true)}
                error={!!errors.dateOfTermination}
                helperText={
                  errors.dateOfTermination && errors?.dateOfTermination?.message
                }
                {...register("dateOfTermination", { required: false })}
                type="date"
                label="Date of Termination"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </Stack>
            <TextField
              error={!!errors.numberOfPermanentEmployees}
              helperText={
                errors.numberOfPermanentEmployees &&
                errors?.numberOfPermanentEmployees?.message
              }
              {...register("numberOfPermanentEmployees", {
                required: true,
              })}
              label="Number of Permanent Employees"
            />
            <TextField
              error={!!errors.numberOfTemporaryEmployees}
              helperText={
                errors.numberOfTemporaryEmployees &&
                errors?.numberOfTemporaryEmployees?.message
              }
              {...register("numberOfTemporaryEmployees", {
                required: true,
              })}
              label="Number of Temporary Employees"
            />
            <div className="special-input"></div>
          </Stack>
        </section>
        <section className="right">
          <Stack spacing={2}>
            <Paper
              sx={{
                display: "flex",
                justifyContent: "left",
                flexWrap: "wrap",
                listStyle: "none",
                p: 0.5,
                m: 0,
              }}
              component="ul"
            >
              {expatriotEmployeesValue.length > 0 ? (
                expatriotEmployeesValue.map((data, idx) => (
                  <ListItem key={data.idx}>
                    <Chip label={data} onDelete={handleDelete(data)} />
                  </ListItem>
                ))
              ) : (
                <ListItem>
                  <Chip
                    label={
                      "Use Inputs below to add Expatriot Employees here ..."
                    }
                  />
                </ListItem>
              )}
            </Paper>
            <AddExpatriots submissionHandle={handleAddExpat} />
            <Controller
              name="licenseRegions"
              control={control}
              render={({ field }) => (
                <FormControl error={!!errors.licenseRegions}>
                  <InputLabel>License Regions</InputLabel>
                  <Select
                    {...field}
                    multiple
                    input={<OutlinedInput label="Trade License Regions" />}
                    defaultValue={[]}
                  >
                    {regions.map((region) => (
                      <MenuItem key={region.code} value={region.code}>
                        {region.region}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>
                    {errors.licenseRegions
                      ? errors?.licenseRegions?.message
                      : "Can select multiple regions"}
                  </FormHelperText>
                </FormControl>
              )}
            />
            <Stack
              direction={"row"}
              spacing={2}
              justifyContent={"space-between"}
            >
              <TextField
                error={!!errors.typeOfChange}
                helperText={
                  errors.typeOfChange && errors?.typeOfChange?.message
                }
                select
                {...register("typeOfChange")}
                label="Type of Change"
                defaultValue={""}
                fullWidth
              >
                {investmentStatuses.map((status, idx) => (
                  <MenuItem key={idx} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                error={!!errors.dateOfChange}
                helperText={
                  errors.dateOfChange && errors?.dateOfChange?.message
                }
                {...register("dateOfChange")}
                type="date"
                label="Date of Change"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </Stack>
          </Stack>
        </section>
      </section>

      <div className="form-submission">
        <Button size="large" onClick={onBack}>
          Back
        </Button>

        <Button
          type="submit"
          size="large"
          onClick={() => console.log("clicked")}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

export default InvestmentStatusForm;
