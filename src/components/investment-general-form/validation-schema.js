import * as yup from "yup";
import "yup-phone";

const generalSchema = yup.object().shape({
  fileNumber: yup
    .string()
    .typeError("Please enter a valid file number")
    .required("File number is required!"),
  permitNumber: yup
    .string()
    .typeError("Please enter a valid permit number")
    .required("Permit number is required!"),
  dateOfPermit: yup
    .date()
    .typeError("Please select the Date of the Permit!")
    .required("Date of Permit is required!"),
  tinNumber: yup
    .string()
    .matches(/^[0-9]+$/, "Please enter a valid Tin Number")
    .length(10, "Tin Number must be 10 number characters.")
    .required(),
  licensingOffice: yup.string().required("Licensing office is required!"),
  countryOfOrigin: yup.string().required("Country of Origin is required!"),
  countryOfRegistration: yup
    .string()
    .required("Country of Registration is required!"),
  nationality: yup.string().required("Nationality is required!"),
  phoneNumber: yup
    .string()
    .phone("ET", true, "Please enter a valid Ethiopian phone number!")
    .required("Phone number is required!"),
  email: yup
    .string()
    .email("Please enter a valid email!")
    .required("Email is required please !"),
  post: yup
    .number()
    .typeError("Please enter a valid post number!")
    .required("Post Number is required please !"),
  fax: yup
    .number()
    .typeError("Please enter a valid fax number!")
    .required("Fax Number is required please !"),
});

export default generalSchema;
