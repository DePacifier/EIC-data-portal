// Library Imports
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

// Style Imports
import "./layout.styles.scss";

// Component Imports
import { Navigation } from "../navigation/navigation.component";
import Header from "../../components/header/header.component";
import { context } from "../../contexts/UserContext";

export const Layout = () => {
  const { userName } = useContext(context);
  console.log(userName);
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
