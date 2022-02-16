import * as yup from "yup";

const statusSchema = yup.object().shape({
  investmentStatus: yup.string().required(),
  dateOfStatusChange: yup.date().required(),
  Terminate: yup.boolean().required(),
  dateOfTermination: yup.date().required(),
  numberOfPermanentEmployees: yup.number().typeError().required(),
  numberOfTemporaryEmployees: yup.number().typeError().required(),
  tradeLicenseRegions: yup.array().required(),
  // dateTradeLicense: yup.date().required(),
  typeOfChange: yup.string().typeError().required(),
  dateOfChange: yup.date().required(),
  tinNumber: yup.number().typeError().required(),
  grossOutputPerMonth: yup.number().typeError().required(),
});

export default statusSchema;
