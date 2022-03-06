// Library Imports
import React from "react";

import { MenuItem, TextField, Stack, Button } from "@mui/material";

// Style Imports
import "./add-user.styles.scss";

// React Hook Form, Yup and Imports for form validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import addUserFormSchema from "./validation-schema";

// Select-Data
import { regions } from "../../../mock/mock-select-data";
const privileges = ["Super Admin", "Admin", "Data Entry Specialist"];

const AddUserPage = () => {
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

  const onSubmit = (data) => {
    alert("submit button clicked", data);
    console.log(data);
  };

  return (
    <form className="page-container" onSubmit={handleSubmit(onSubmit)}>
      <h4 className="page-title">Add User</h4>
      <section className="add-user-form">
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
            disabled={privilegeValue !== "Data Entry Specialist" ? true : false}
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
      </section>
      <div className="form-submission">
        <Button
          color="warning"
          size="large"
          onClick={(e) => {
            console.log("clear form");
          }}
        >
          Clear Form
        </Button>
        <Button type="submit" size="large">
          Add User
        </Button>
      </div>
    </form>
  );
};

export default AddUserPage;
