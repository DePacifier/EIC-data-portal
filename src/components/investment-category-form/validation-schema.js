import * as yup from "yup";

const categorySchema = yup.object().shape({
  nameOfInvestor: yup.string().required("Name of Investor is required!"),
  formOfCompany: yup.string().required("Form of Company is required!"),
  typeOfInvestor: yup.string().required("Type of Investor is required!"),
  investmentType: yup.string().required("Investment Type is required!"),
  typeOfInvestmentLicense: yup
    .string()
    .required("Type of Investment License is required!"),
  percentageOfForeignShare: yup
    .number()
    .min(0, "Percentage cannot be below 0%")
    .max(100, "Percentage cannot be above 100%")
    .typeError("Please insert a valid Foreign Share Percentage value!")
    .required("File number is required!"),
  economicSector: yup.string().required("File number is required!"),
  sector: yup
    .string()
    .typeError("Please select a valid sector!")
    .required("File number is required!"),
  subsector: yup
    .string()
    .typeError("Please select a valid sub-sector!")
    .required("File number is required!"),
  division: yup
    .string()
    .typeError("Please select a valid division!")
    .required("File number is required!"),
  investmentActivity: yup.string().typeError().min(200).max(1000).required(),
  regionOfInvestment: yup.string().required("File number is required!"),
  zoneOfInvestment: yup
    .string()
    .typeError()
    .min(3)
    .max(37)
    .required("File number is required!"),
  citytownOfInvestment: yup
    .string()
    .typeError()
    .min(3)
    .max(37)
    .required("File number is required!"),
  weredaOfInvestment: yup
    .string()
    .typeError()
    .min(3)
    .max(37)
    .required("File number is required!"),
  capital: yup
    .number()
    .positive()
    .typeError()
    .required("File number is required!"),
  sourceFromSelf: yup
    .number()
    .test(
      "is-less-than-or-equal-to-capital",
      "Value must be equal or less than Capital!",
      (value, context) => value <= context.options.parent.capital
    )
    .positive()
    .typeError()
    .required("File number is required!"),
  sourceFromLoan: yup
    .number()
    .min(0)
    .typeError()
    .required("File number is required!"),
  landSizeRequired: yup
    .number()
    .positive()
    .typeError()
    .required("File number is required!"),
});

export default categorySchema;
