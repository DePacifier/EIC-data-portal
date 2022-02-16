import * as yup from "yup";

const schema = yup.object().shape({
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
  formOfCompany: yup.string().required(),
  typeOfInvestor: yup.string().required(),
  investmentType: yup.string().required(),
  typeOfInvestmentLicense: yup.string().required(),
  percentageOfForeignShare: yup.number().typeError().required(),
  economicSector: yup.string().required(),
  sector: yup.string().required(),
  subsector: yup.string().required(),
  division: yup.string().required(),
  investmentActivity: yup.string().typeError().min(200).max(1000).required(),
  regionOfInvestment: yup.string().required(),
  zoneOfInvestment: yup.string().typeError().min(3).max(37).required(),
  citytownOfInvestment: yup.string().typeError().min(3).max(37).required(),
  weredaOfInvestment: yup.string().typeError().min(3).max(37).required(),
  capital: yup.number().typeError().required(),
  sourceFromSelf: yup.number().typeError().required(),
  sourceFromLoan: yup.number().typeError().required(),
  landSizeRequired: yup.number().typeError().required(),
  investmentStatus: yup.string().required(),
  dateOfStatusChange: yup.date().required(),
  Terminate: yup.boolean().required(),
  dateOfTermination: yup.date().required(),
  numberOfPermanentEmployees: yup.number().typeError().required(),
  numberOfTemporaryEmployees: yup.number().typeError().required(),
  tradeLicenseRegions: yup.array().required(),
  dateTradeLicense: yup.date().required(),
  typeOfChange: yup.string().typeError().required(),
  dateOfChange: yup.date().required(),
  tinNumber: yup.number().typeError().required(),
  grossOutputPerMonth: yup.number().typeError().required(),
});

export default schema;
