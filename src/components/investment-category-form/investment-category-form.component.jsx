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
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(categorySchema),
  });

  const [
    // economicSectorValue,
    sectorValue,
    subsectorValue,
    capitalValue,
    sourceFromSelfValue,
  ] = watch([
    // "economicSector",
    "sector",
    "subsector",
    "capital",
    "sourceFromSelf",
  ]);

  return (
    <form className="invest-form" onSubmit={handleSubmit(onSubmit)}>
      <span className="form-page-title">Categorical Information</span>
      <section className="form-page">
        <section className="left">
          <Stack spacing={2}>
            <TextField
              {...register("nameOfInvestor")}
              error={!!errors.nameOfInvestor}
              helperText={
                errors.nameOfInvestor && errors?.nameOfInvestor?.message
              }
              label="Name of Investor/Company"
            />
            <Stack
              direction={"row"}
              spacing={2}
              justifyContent={"space-between"}
            >
              <TextField
                {...register("formOfCompany")}
                error={!!errors.formOfCompany}
                helperText={
                  errors.formOfCompany && errors?.formOfCompany?.message
                }
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
                error={!!errors.typeOfInvestor}
                helperText={
                  errors.typeOfInvestor && errors?.typeOfInvestor?.message
                }
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
                error={!!errors.investmentType}
                helperText={
                  errors.investmentType && errors?.investmentType?.message
                }
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
                {...register("typeOfInvestmentLicense")}
                error={!!errors.typeOfInvestmentLicense}
                helperText={
                  errors.typeOfInvestmentLicense &&
                  errors?.typeOfInvestmentLicense?.message
                }
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
              {...register("percentageOfForeignShare")}
              error={!!errors.percentageOfForeignShare}
              helperText={
                errors.percentageOfForeignShare &&
                errors?.percentageOfForeignShare?.message
              }
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
              error={!!errors.economicSector}
              helperText={
                errors.economicSector && errors?.economicSector?.message
              }
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
              {...register("sector", {
                onChange: (e) => console.log(e.target.value),
              })}
              error={!!errors.sector}
              helperText={errors.sector && errors?.sector?.message}
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
              error={!!errors.subsector}
              helperText={errors.subsector && errors?.subsector?.message}
              select
              label="Subsector"
              defaultValue={""}
            >
              {sectorValue !== undefined ? (
                subsectors
                  .filter((subsector) => subsector.sector_code === sectorValue)
                  .map((filterSubsector) => (
                    <MenuItem
                      key={filterSubsector.subsector_code}
                      value={filterSubsector.subsector_code}
                    >
                      {filterSubsector.description}
                    </MenuItem>
                  ))
              ) : (
                <MenuItem value={""}>Please select a sector first ...</MenuItem>
              )}
            </TextField>
            <TextField
              {...register("division")}
              error={!!errors.division}
              helperText={errors.division && errors?.division?.message}
              select
              label="Division"
              defaultValue={""}
            >
              {sectorValue !== undefined ? (
                groups
                  .filter((group) => group.subsector_code === subsectorValue)
                  .map((group) => (
                    <MenuItem key={group.group_code} value={group.group_code}>
                      {group.description}
                    </MenuItem>
                  ))
              ) : (
                <MenuItem value={""}>
                  Please select a subsector first ...
                </MenuItem>
              )}
            </TextField>
          </Stack>
        </section>
        <section className="right">
          <Stack spacing={2}>
            <TextField
              multiline
              variant="filled"
              {...register("investmentActivity")}
              error={!!errors.investmentActivity}
              helperText={
                errors.investmentActivity && errors?.investmentActivity?.message
              }
              label="Investment Activity"
              minRows={2}
            />
            <TextField
              {...register("regionOfInvestment")}
              error={!!errors.regionOfInvestment}
              helperText={
                errors.regionOfInvestment && errors?.regionOfInvestment?.message
              }
              select
              defaultValue={""}
              label="Region(s) of Investment"
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
              error={!!errors.zoneOfInvestment}
              helperText={
                errors.zoneOfInvestment && errors?.zoneOfInvestment?.message
              }
              label="Zone of Investment"
            />
            <TextField
              multiline
              variant="filled"
              maxRows={2}
              {...register("citytownOfInvestment")}
              error={!!errors.citytownOfInvestment}
              helperText={
                errors.citytownOfInvestment &&
                errors?.citytownOfInvestment?.message
              }
              label="City/Town of Investment"
            />
            <TextField
              multiline
              variant="filled"
              maxRows={2}
              {...register("weredaOfInvestment")}
              error={!!errors.weredaOfInvestment}
              helperText={
                errors.weredaOfInvestment && errors?.weredaOfInvestment?.message
              }
              label="Wereda of Investment"
            />
            <TextField
              {...register("capital")}
              error={!!errors.capital}
              helperText={errors.capital && errors?.capital?.message}
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
                error={!!errors.sourceFromSelf}
                helperText={
                  errors.sourceFromSelf && errors?.sourceFromSelf?.message
                }
                label="Source from Self"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">Birr</InputAdornment>
                  ),
                }}
              />
              <TextField
                {...register("sourceFromLoan", {
                  deps: ["capital", "sourceFromSelf"],
                })}
                error={!!errors.sourceFromLoan}
                helperText={
                  errors.sourceFromLoan && errors?.sourceFromLoan?.message
                }
                disabled
                label="Source from Loan"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">Birr</InputAdornment>
                  ),
                }}
                value={
                  capitalValue !== undefined &&
                  sourceFromSelfValue !== undefined
                    ? capitalValue - sourceFromSelfValue
                    : ""
                }
              />
            </Stack>
            <TextField
              {...register("landSizeRequired")}
              error={!!errors.landSizeRequired}
              helperText={
                errors.landSizeRequired && errors?.landSizeRequired?.message
              }
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
