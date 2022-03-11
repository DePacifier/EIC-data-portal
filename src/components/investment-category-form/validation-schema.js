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
    .required("Percentage of Foreign Share of the Investment is required!"),
  economicSector: yup
    .string()
    .required("Investment's economic sector category is required!"),
  sector: yup
    .string()
    .typeError("Please select a valid sector!")
    .required("Investment's sector category is required!"),
  subsector: yup
    .string()
    .typeError("Please select a valid sub-sector!")
    .required("Investment's sub-sector category is required!"),
  division: yup
    .string()
    .typeError("Please select a valid division!")
    .required("Investment's division category is required!"),
  investmentActivity: yup.string().typeError().min(20).max(200).required(),
  regionOfInvestment: yup.string().required("Region of Investment required!"),
  zoneOfInvestment: yup
    .string()
    .typeError()
    .min(3)
    .max(37)
    .required("Zone of Investment required!"),
  citytownOfInvestment: yup
    .string()
    .typeError()
    .min(3)
    .max(37)
    .required("City or Town of Investment required!"),
  weredaOfInvestment: yup
    .string()
    .typeError()
    .min(3)
    .max(37)
    .required("Wereda of Investment is required!"),
  capital: yup
    .number()
    .positive()
    .typeError()
    .required("Capital of Investment is required!"),
  sourceFromSelf: yup
    .number()
    .test(
      "is-less-than-or-equal-to-capital",
      "Value must be equal or less than Capital!",
      (value, context) => value <= context.options.parent.capital
    )
    .positive()
    .typeError()
    .required("Capital provided personally is required!"),
  sourceFromLoan: yup
    .number()
    .min(0)
    .typeError()
    .required("Capital provided from loan is required!"),
  landSizeRequired: yup
    .number()
    .positive()
    .typeError()
    .required("Land Size is required!"),
});

export default categorySchema;
