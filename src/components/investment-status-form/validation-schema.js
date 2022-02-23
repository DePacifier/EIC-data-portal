import * as yup from "yup";

const statusSchema = yup.object().shape({
  investmentStatus: yup.string().required(),
  dateOfStatusChange: yup.date().required(),
  terminate: yup.boolean().optional(),
  dateOfTermination: yup
    .date()
    .test(
      "have-value-if-terminate-is-true",
      "Termination date must be provided!",
      (value, context) =>
        context.options.parent.terminate ? value !== undefined : true
    ),
  numberOfPermanentEmployees: yup.number().typeError().required(),
  numberOfTemporaryEmployees: yup.number().typeError().required(),
  licenseRegions: yup
    .array()
    .min(1, "Please provide atleast one License Region!")
    .required(),
  typeOfChange: yup.string().typeError().required(),
  dateOfChange: yup.date().required(),
});

export default statusSchema;
