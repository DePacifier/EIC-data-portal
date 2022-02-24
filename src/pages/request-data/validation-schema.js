import * as yup from "yup";
import "yup-phone";

const requestFormSchema = yup.object().shape({
  personsName: yup.string().required("Name of data requestor is required!"),
  organizationAgencyName: yup
    .string()
    .required("Name of data requesting Organization or Agency is required!"),
  informationRequested: yup
    .string()
    .required("Information requested is required!"),
  address: yup.string().required("Address of requestor is required!"),
  mobileNumber: yup
    .string()
    .phone("ET", true, "Please enter a valid Ethiopian mobile number!")
    .required("Phone number is required!"),
  pobox: yup
    .number()
    .typeError("Please enter a valid P.O. Box Address!")
    .nullable()
    .optional(),
  email: yup
    .string()
    .email("Please enter a valid email!")
    .required("Email is required!"),
  officeNumber: yup
    .string()
    .phone("ET", true, "Please enter a valid Ethiopian phone number!")
    .required("Phone number is required!"),
  fax: yup.number().typeError("Please enter a valid fax number!").optional(),
  modality: yup.string().required("Modality is required!"),
});

export default requestFormSchema;
