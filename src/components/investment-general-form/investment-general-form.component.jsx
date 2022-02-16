import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, MenuItem, Stack } from "@mui/material";

// Yup Validation and Schema Import
import { yupResolver } from "@hookform/resolvers/yup";
import generalSchema from "./validation-schema";

// Mock data Import
import { regions, countries, nationalities } from "../../mock/mock-select-data";

function InvestmentGeneralForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(generalSchema),
  });

  return (
    <form className="invest-form" onSubmit={handleSubmit(onSubmit)}>
      <span className="form-page-title">General Information</span>
      <section className="form-page">
        <section className="left">
          <Stack spacing={2}>
            <TextField
              {...register("fileNumber")}
              error={!!errors.fileNumber}
              helperText={errors.fileNumber && errors?.fileNumber?.message}
              label="File Number"
            />
            <TextField
              {...register("permitNumber")}
              error={!!errors.permitNumber}
              {...register("permitNumber")}
              label="Permit Number"
            />
            <TextField
              {...register("dateOfPermit")}
              type="date"
              label="Date of Permit"
              defaultValue={""}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              {...register("licensingOffice")}
              select
              label="Licensing Office"
              defaultValue={""}
              helperText="Please select the Licensing Office where the Permit is registered at."
            >
              {regions.map((office) => (
                <MenuItem key={office.code} value={office.region}>
                  {office.region}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </section>
        <section className="right">
          <Stack spacing={2}>
            <TextField
              {...register("nameOfInvestor")}
              label="Name of Investor"
            />
            <Stack direction={"row"} spacing={2}>
              <TextField
                {...register("countryOfOrigin")}
                select
                label="Country of Origin"
                defaultValue="Ethiopia"
                fullWidth
              >
                {countries.map((country, idx) => (
                  <MenuItem key={idx} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                {...register("countryOfRegistration")}
                select
                label="Country of Registration"
                defaultValue="Ethiopia"
                fullWidth
              >
                {countries.map((country, idx) => (
                  <MenuItem key={idx} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
            <TextField
              select
              {...register("Nationality")}
              label="Nationality"
              defaultValue="Ethiopian"
            >
              {nationalities.map((nationality, idx) => (
                <MenuItem key={idx} value={nationality}>
                  {nationality}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              {...register("phoneNumber")}
              label="Phone Number"
              type="tel"
            />
            <TextField {...register("email")} label="Email" type="email" />
            <Stack direction={"row"} spacing={2}>
              <TextField {...register("post")} label="Post" />
              <TextField {...register("fax")} label="Fax" type="tel" />
            </Stack>
          </Stack>
        </section>
      </section>
      <div className="form-submission">
        <Button type="submit" size="large">
          Next
        </Button>
      </div>
    </form>
  );
}

export default InvestmentGeneralForm;
