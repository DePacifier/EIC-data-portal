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
} from "@mui/material";

// Yup Validation and Schema Import
import { yupResolver } from "@hookform/resolvers/yup";
import statusSchema from "./validation-schema";

// Mock data
import { regions } from "../../mock/mock-select-data";

// Option values
const investmentStatuses = [
  "Pre-implementation",
  "Implementation",
  "Operational",
];

function InvestmentStatusForm({ onBack, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      tradeLicenseRegions: [],
    },
    resolver: yupResolver(statusSchema),
  });

  return (
    <form className="invest-form" onSubmit={handleSubmit(onSubmit)}>
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
            <Controller
              name="tradeLicenseRegions"
              control={control}
              render={({ field }) => (
                <FormControl>
                  <InputLabel>Trade License Regions</InputLabel>
                  <Select
                    error={!!errors.tradeLicenseRegions}
                    helperText={
                      errors.tradeLicenseRegions &&
                      errors?.tradeLicenseRegions?.message
                    }
                    {...field}
                    multiple
                    input={<OutlinedInput label="Trade License Regions" />}
                    defaultValue={""}
                  >
                    {regions.map((region) => (
                      <MenuItem key={region.code} value={region.code}>
                        {region.region}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
            <TextField
              error={!!errors.dateTradeLicense}
              helperText={
                errors.dateTradeLicense && errors?.dateTradeLicense?.message
              }
              {...register("dateTradeLicense")}
              type="date"
              label="Date Trade License"
              InputLabelProps={{
                shrink: true,
              }}
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
            <TextField
              error={!!errors.tinNumber}
              helperText={errors.tinNumber && errors?.tinNumber?.message}
              {...register("tinNumber", {
                required: true,
              })}
              label="TIN Number"
            />
            <TextField
              error={!!errors.grossOutputPerMonth}
              helperText={
                errors.grossOutputPerMonth &&
                errors?.grossOutputPerMonth?.message
              }
              {...register("grossOutputPerMonth", {
                required: true,
              })}
              label="Gross Output per Month"
            />
          </Stack>
        </section>
      </section>

      <div className="form-submission">
        <Button size="large" onClick={onBack}>
          Back
        </Button>

        <Button type="submit" size="large">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default InvestmentStatusForm;
