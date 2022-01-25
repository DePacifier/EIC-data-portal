// Library Imports
import React from "react";

// Style Imports
import "./add-user.styles.scss";

// Component Imports
import Header from "../../../components/header/header.component";

const AddUserPage = () => {
  return (
    <div className="content">
      <Header
        title="Add User"
        userName="Abebe Debebe"
        userAuthority="Super Admin"
      />
      <section className="grid-center">
        <h1>Coming Soon</h1>
      </section>
    </div>
  );
};

export default AddUserPage;
