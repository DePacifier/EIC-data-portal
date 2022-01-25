// Library Imports
import { Outlet } from "react-router-dom";
import React from "react";

// Style Imports
import "./layout.styles.scss";

// Component Imports
import { Navigation } from "../navigation/navigation.component";

export const Layout = () => {
  return (
    <div className="layout">
      <Navigation className="navigation" />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
