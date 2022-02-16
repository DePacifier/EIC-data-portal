import * as yup from "yup";

const categorySchema = yup.object().shape({
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
});

export default categorySchema;
