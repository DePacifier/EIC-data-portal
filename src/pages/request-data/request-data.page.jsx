import React from "react";

import {
  Box,
  Container,
  CssBaseline,
  MenuItem,
  TextField,
  Typography,
  Stack,
  Button,
} from "@mui/material";

// React Hook Form, Yup and Imports for form validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import requestFormSchema from "./validation-schema";
import { number } from "yup/lib/locale";

// Select-Data
const modalities = ["Hardcopy", "Email", "Telephone", "Softcopy"];

export default function RequestData() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(requestFormSchema),
    defaultValues: { pobox: undefined },
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" sx={{ backgroundColor: "#f9fafc" }}>
        <Box sx={{ backgroundColor: "#f9fafc" }}>
          <form onSubmit={handleSubmit()}>
            <Stack spacing={2}>
              <Typography variant="h2" sx={{ mb: 1, textAlign: "center" }}>
                Data Request Form
              </Typography>
              <Stack direction={"row"} spacing={2}>
                <TextField
                  {...register("personsName")}
                  error={!!errors.personsName}
                  helperText={
                    errors.personsName && errors?.personsName?.message
                  }
                  label="Name"
                  fullWidth
                />
                <TextField
                  {...register("organizationAgencyName")}
                  error={!!errors.organizationAgencyName}
                  helperText={
                    errors.organizationAgencyName &&
                    errors?.organizationAgencyName?.message
                  }
                  label="Organization/Agency Name"
                  fullWidth
                />
              </Stack>
              <TextField
                {...register("informationRequested")}
                error={!!errors.informationRequested}
                helperText={
                  errors.informationRequested &&
                  errors?.informationRequested?.message
                }
                multiline
                rows={2}
                variant="filled"
                label="Information Requested"
              />
              <TextField
                {...register("address")}
                error={!!errors.address}
                helperText={errors.address && errors?.address?.message}
                multiline
                rows={2}
                label="Address"
              />
              <Stack direction={"row"} spacing={2}>
                <TextField
                  {...register("mobileNumber")}
                  error={!!errors.mobileNumber}
                  helperText={
                    errors.mobileNumber && errors?.mobileNumber?.message
                  }
                  type="tel"
                  label="Mobile Number"
                  fullWidth
                />
                <TextField
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email && errors?.email?.message}
                  type="email"
                  label="Email"
                  fullWidth
                />
              </Stack>
              <TextField
                {...register("officeNumber")}
                error={!!errors.officeNumber}
                helperText={
                  errors.officeNumber && errors?.officeNumber?.message
                }
                type="tel"
                label="Telephone or Office Number"
              />
              <Stack direction={"row"} spacing={2}>
                <TextField
                  {...register("pobox")}
                  error={!!errors.pobox}
                  helperText={errors.pobox && errors?.pobox?.message}
                  label="P.O. Box"
                  fullWidth
                />
                <TextField
                  {...register("fax")}
                  error={!!errors.fax}
                  helperText={errors.fax && errors?.fax?.message}
                  label="Fax"
                  fullWidth
                />
              </Stack>
              <TextField
                {...register("modality")}
                error={!!errors.modality}
                helperText={errors.modality && errors?.modality?.message}
                select
                label="Choose Modality"
                defaultValue={""}
                fullWidth
              >
                {modalities.map((modality, idx) => (
                  <MenuItem key={idx} value={modality}>
                    {modality}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
            <Stack alignItems={"flex-end"}>
              <Button
                sx={{ mt: 3, mb: 4, textAlign: "right", width: 1 / 5 }}
                size="large"
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
}
