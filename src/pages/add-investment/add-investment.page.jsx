// Library Imports
import React, { useState, useEffect } from "react";

// Style Imports
import "./add-investment.styles.scss";

// Form Components
import InvestmentGeneralForm from "../../components/investment-general-form/investment-general-form.component";
import InvestmentCategoryForm from "../../components/investment-category-form/investment-category-form.component";
import InvestmentStatusForm from "../../components/investment-status-form/investment-status-form.component";

const AddInvestmentPage = () => {
  const [pageStatus, setPageStatus] = useState(0);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    console.log(formData);
  }, [formData, setFormData]);

  const onNextSubmit = (data) => {
    // console.log(formData);
    setFormData({ ...formData, ...data });
    setPageStatus(pageStatus + 1);
  };

  const onBack = () => {
    setPageStatus(pageStatus - 1);
  };

  const onSubmit = (data) => {
    console.log("finally");
    setFormData({ ...formData, ...data });
    setPageStatus(0);
  };

  return (
    <section className="form-container">
      <h4 className="form-title">Add Investment</h4>
      {pageStatus === 0 ? (
        <InvestmentGeneralForm onSubmit={onNextSubmit} />
      ) : null}
      {pageStatus === 1 ? (
        <InvestmentCategoryForm onBack={onBack} onSubmit={onNextSubmit} />
      ) : null}
      {pageStatus === 2 ? (
        <InvestmentStatusForm onBack={onBack} onSubmit={onSubmit} />
      ) : null}
    </section>
  );
};

export default AddInvestmentPage;
