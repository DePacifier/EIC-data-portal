import React from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  MenuItem,
  Stack,
  InputAdornment,
} from "@mui/material";

// Yup Validation and Schema Import
import { yupResolver } from "@hookform/resolvers/yup";
import categorySchema from "./validation-schema";

// Mock Data Import
import {
  sectors,
  subsectors,
  groups,
  regions,
} from "../../mock/mock-select-data";

// Select Option Data
const formOfCompany = ["Sole", "Public", "Share", "PLC"];
const typeOfInvestor = [
  "Domestic",
  "Ethiopian by Birth",
  "Foreign but Domestic",
  "Wholly foreign",
  "Joint with Domestic",
  "Public",
];
const investmentTypes = ["Domestic", "Foreign", "Public"];
const typesOfInvestmentLicense = ["New", "Expansion"];
const economicSectors = ["Primary", "Secondary", "Tertiary"];

function InvestmentCategoryForm({ onBack, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(categorySchema),
  });

  return (
    <form className="invest-form" onSubmit={handleSubmit(onSubmit)}>
      <section className="form-page">
        <section className="left">
          <Stack spacing={2}>
            <Stack
              direction={"row"}
              spacing={2}
              justifyContent={"space-between"}
            >
              <TextField
                {...register("formOfCompany")}
                select
                label="Form of Company"
                defaultValue={""}
                fullWidth
              >
                {formOfCompany.map((companyForm, idx) => (
                  <MenuItem key={idx} value={companyForm}>
                    {companyForm}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                {...register("typeOfInvestor")}
                select
                label="Type of Investor"
                defaultValue=""
                fullWidth
              >
                {typeOfInvestor.map((investorType, idx) => (
                  <MenuItem key={idx} value={investorType}>
                    {investorType}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
            <Stack
              direction={"row"}
              spacing={2}
              justifyContent={"space-between"}
            >
              <TextField
                {...register("investmentType")}
                select
                label="Investment Type"
                defaultValue=""
                fullWidth
              >
                {investmentTypes.map((investmentType, idx) => (
                  <MenuItem key={idx} value={investmentType}>
                    {investmentType}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                {...register("typeOfInvestmentLicense", {
                  required: true,
                })}
                select
                label="Type of Investment License"
                defaultValue={""}
                fullWidth
              >
                {typesOfInvestmentLicense.map((licenseType, idx) => (
                  <MenuItem key={idx} value={licenseType}>
                    {licenseType}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
            <TextField
              {...register("percentageOfForeignShare", {
                required: true,
              })}
              type="number"
              label="Percentage of Foreign Share"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">%</InputAdornment>
                ),
              }}
            />
            <TextField
              {...register("economicSector")}
              select
              label="Economic Sector"
              defaultValue={""}
            >
              {economicSectors.map((economicSector, idx) => (
                <MenuItem key={idx} value={economicSector}>
                  {economicSector}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              {...register("sector")}
              select
              label="Sector"
              defaultValue={""}
            >
              {sectors.map((sector) => (
                <MenuItem key={sector.code} value={sector.code}>
                  {sector.description}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              {...register("subsector")}
              select
              label="Subsector"
              defaultValue={""}
            >
              {subsectors.map((subsector) => (
                <MenuItem
                  key={subsector.subsector_code}
                  value={subsector.subsector_code}
                >
                  {subsector.description}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              {...register("division")}
              select
              label="Division"
              defaultValue={""}
            >
              {groups.map((group) => (
                <MenuItem key={group.group_code} value={group.group_code}>
                  {group.description}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </section>
        <section className="right">
          <Stack spacing={2}>
            <TextField
              multiline
              variant="filled"
              {...register("investmentActivity")}
              label="Investment Activity"
              minRows={2}
            />
            <TextField
              {...register("regionOfInvestment")}
              select
              defaultValue={""}
            >
              {regions.map((region) => (
                <MenuItem key={region.code} value={region.code}>
                  {region.region}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              multiline
              variant="filled"
              maxRows={2}
              {...register("zoneOfInvestment")}
              label="Zone of Investment"
            />
            <TextField
              multiline
              variant="filled"
              maxRows={2}
              {...register("citytownOfInvestment")}
              label="City/Town of Investment"
            />
            <TextField
              multiline
              variant="filled"
              maxRows={2}
              {...register("weredaOfInvestment")}
              label="Wereda of Investment"
            />
            <TextField
              {...register("capital")}
              label="Capital"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">Birr</InputAdornment>
                ),
              }}
            />
            <Stack direction={"row"} spacing={2}>
              <TextField
                {...register("sourceFromSelf")}
                label="Source from Self"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">Birr</InputAdornment>
                  ),
                }}
              />
              <TextField
                {...register("sourceFromLoan")}
                label="Source from Loan"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">Birr</InputAdornment>
                  ),
                }}
              />
            </Stack>
            <TextField
              {...register("landSizeRequired")}
              label="Land Size Required"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    m<sup>2</sup>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </section>
      </section>
      <div className="form-submission">
        <Button type="submit" size="large">
          Next
        </Button>

        <Button size="large" onClick={onBack}>
          Back
        </Button>
      </div>
    </form>
  );
}

export default InvestmentCategoryForm;
