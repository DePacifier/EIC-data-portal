import React from "react";
import {
  Button,
  IconButton,
  TextField,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
} from "@mui/material";

// React Hook Form, Yup and Imports for form validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import addUserFormSchema from "../../pages/users/add/validation-schema";

// Select-Data
import { regions } from "../../mock/mock-select-data";
const privileges = ["Super Admin", "Admin", "Data Entry Specialist"];

export default function FormDialog({
  fTitle,
  fContent,
  ariaLabel,
  onformSubmit,
  children,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "all",
    resolver: yupResolver(addUserFormSchema),
  });

  const privilegeValue = watch("privilege");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton aria-label={ariaLabel} onClick={handleClickOpen}>
        {children}
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{fTitle}</DialogTitle>
        <form onSubmit={handleSubmit()}>
          <DialogContent>
            <DialogContentText>{fContent}</DialogContentText>
            <Stack spacing={2}>
              <TextField
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name && errors?.name?.message}
                label="Name"
                fullWidth
              />
              <TextField
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email && errors?.email?.message}
                label="Email"
                type="email"
                fullWidth
              />
              <TextField
                {...register("phoneNumber")}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber && errors?.phoneNumber?.message}
                label="Phone Number"
                type="tel"
                fullWidth
              />
              <TextField
                {...register("privilege")}
                error={!!errors.privilege}
                helperText={errors.privilege && errors?.privilege?.message}
                select
                label="Choose Privilege"
                defaultValue={""}
                fullWidth
              >
                {privileges.map((privilege, idx) => (
                  <MenuItem key={idx} value={privilege}>
                    {privilege}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                {...register("region")}
                disabled={
                  privilegeValue !== "Data Entry Specialist" ? true : false
                }
                error={!!errors.region}
                helperText={errors.region && errors?.region?.message}
                select
                label="Choose Region"
                defaultValue={"Addis Ababa"}
                fullWidth
              >
                {regions.map((region) => (
                  <MenuItem key={region.code} value={region.region}>
                    {region.region}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
