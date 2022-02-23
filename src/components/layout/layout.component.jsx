// Library Imports
import { Outlet } from "react-router-dom";
import React from "react";

// Style Imports
import "./layout.styles.scss";

// Component Imports
import { Navigation } from "../navigation/navigation.component";
import Header from "../../components/header/header.component";

export const Layout = () => {
  return (
    <div className="layout">
      <Navigation className="navigation" />
      <main>
        <div className="content">
          <Header
            title="Add Investment"
            userName="Abebe Debebe"
            userAuthority="Super Admin"
          />
          <Outlet />
        </div>
      </main>
    </div>
  );
};
