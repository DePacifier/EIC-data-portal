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
    mode: "all",
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
              helperText={errors.permitNumber && errors?.permitNumber?.message}
              label="Permit Number"
            />
            <TextField
              {...register("dateOfPermit")}
              error={!!errors.dateOfPermit}
              helperText={errors.dateOfPermit && errors?.dateOfPermit?.message}
              type="date"
              label="Date of Permit"
              defaultValue={""}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              error={!!errors.tinNumber}
              helperText={errors.tinNumber && errors?.tinNumber?.message}
              {...register("tinNumber", {
                required: true,
              })}
              label="TIN Number"
            />
            <TextField
              {...register("licensingOffice")}
              select
              label="Licensing Office"
              defaultValue={""}
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
            <Stack direction={"row"} spacing={2}>
              <TextField
                {...register("countryOfOrigin")}
                error={!!errors.countryOfOrigin}
                helperText={
                  errors.countryOfOrigin && errors?.countryOfOrigin?.message
                }
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
                error={!!errors.countryOfRegistration}
                helperText={
                  errors.countryOfRegistration &&
                  errors?.countryOfRegistration?.message
                }
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
              {...register("nationality")}
              error={!!errors.nationality}
              helperText={errors.nationality && errors?.nationality?.message}
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
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber && errors?.phoneNumber?.message}
              label="Phone Number"
              type="tel"
            />
            <TextField
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email && errors?.email?.message}
              label="Email"
              type="email"
            />
            <Stack direction={"row"} spacing={2}>
              <TextField
                {...register("post")}
                error={!!errors.post}
                helperText={errors.post && errors?.post?.message}
                label="Post"
                fullWidth
              />
              <TextField
                {...register("fax")}
                error={!!errors.fax}
                helperText={errors.fax && errors?.fax?.message}
                label="Fax"
                type="tel"
                fullWidth
              />
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
