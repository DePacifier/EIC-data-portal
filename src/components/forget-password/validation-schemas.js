import * as yup from "yup";
import "yup-phone";

export const sendEmailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email!")
    .required("User's email address is required!"),
});

export const sendPasswordSchema = yup.object().shape({
  password: yup
    .string("Type your new Password.")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password can not be more than 20 characters")
    .test(
      "password-standard-enforcement",
      "Password must contain ...!",
      (value) => value !== ""
    )
    .required("New Password is required!"),
  rePassword: yup
    .string()
    .test(
      "password-provided-is-similar-to-previous-value",
      "Password provided must be the same for both fields!",
      (value, context) => value === context.options.parent.password
    )
    .required("Retyping the new Password is required!"),
});
