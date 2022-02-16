import * as yup from "yup";

const generalSchema = yup.object().shape({
  fileNumber: yup
    .number()
    .typeError("Please enter a valid file number")
    .required("File number is required!"),
  permitNumber: yup
    .string()
    .typeError("Please enter a valid permit number")
    .required("Permit number is required!"),
  dateOfPermit: yup.date().required("Date of Permit is required!"),
  licensingOffice: yup.string().required("Country is required please !"),
  nameOfInvestor: yup.string().typeError().required(),
  countryOfOrigin: yup.string().required(),
  countryOfRegistration: yup.string().required(),
  Nationality: yup.string().typeError().required(),
  phoneNumber: yup.number().typeError().required(),
  email: yup
    .string()
    .email("Please enter a valid email format !")
    .required("Email is required please !"),
  post: yup.number().typeError().required(),
  fax: yup.number().typeError().required(),
});

export default generalSchema;
