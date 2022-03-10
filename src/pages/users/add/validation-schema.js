import * as yup from "yup";
import "yup-phone";

const addUserFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("User's name is required!")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets(a-z|A-Z) are allowed!"),
  email: yup
    .string()
    .email("Please enter a valid email!")
    .required("User's email address is required!"),
  phoneNumber: yup
    .string()
    .phone("ET", true, "Please enter a valid Ethiopian phone number!")
    .required("User's phone number is required!"),
  privilege: yup.string().required("User designated privilege is required!"),
  region: yup.string().required("User designated region is required!"),
});

export default addUserFormSchema;
