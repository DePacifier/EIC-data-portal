import * as yup from "yup";
import "yup-phone";

const expatriotSchema = yup.object().shape({
  nationality: yup.string().required("Nationality of Employees is required!"),
  numberOfEmployees: yup
    .number()
    .typeError(
      "Please provide a valid number of employees for the selected nationality!"
    )
    .positive("Number of Employees must be greater than zero!")
    .required(),
});

export default expatriotSchema;
