// Library Imports
import React from "react";

// Style Imports
import "./manage-user.styles.scss";

// Component Imports
import Header from "../../../components/header/header.component";

const ManageUsersPage = () => {
  return (
    <div className="content">
      <Header
        title="Manage Users"
        userName="Abebe Debebe"
        userAuthority="Super Admin"
      />
      <section className="grid-center">
        <h1>Coming Soon</h1>
      </section>
    </div>
  );
};

export default ManageUsersPage;
