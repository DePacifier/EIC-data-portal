// Library Imports
import React from "react";

// Style Imports
import "./add-investment.styles.scss";

// Component Imports
import Header from "../../components/header/header.component";

const AddInvestmentPage = () => {
  return (
    <div className="content">
      <Header
        title="Add Investment"
        userName="Abebe Debebe"
        userAuthority="Super Admin"
      />
      <section className="grid-center">
        <h1>Coming Soon</h1>
      </section>
    </div>
  );
};

export default AddInvestmentPage;
