// Library Imports
import React from "react";

// Style Imports
import "./dashboard.styles.scss";

// Component Imports
import Header from "../../components/header/header.component";

const DashboardPage = () => {
  return (
    <div className="content">
      <Header
        title="Dashboard"
        userName="Abebe Debebe"
        userAuthority="Super Admin"
      />
      <section className="grid-center">
        <h1>Coming Soon</h1>
      </section>
    </div>
  );
};

export default DashboardPage;