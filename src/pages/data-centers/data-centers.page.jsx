// Library Imports
import React from "react";

// Style Imports
import "./data-centers.styles.scss";

// Component Imports
import Header from "../../components/header/header.component";

const DataCenterPage = () => {
  return (
    <div className="content">
      <Header
        title="Data Centers"
        userName="Abebe Debebe"
        userAuthority="Super Admin"
      />
      <section className="grid-center">
        <h1>Coming Soon</h1>
      </section>
    </div>
  );
};

export default DataCenterPage;
