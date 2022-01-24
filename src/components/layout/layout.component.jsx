// Library Imports
import { Outlet } from "react-router-dom";
import React from "react";

// Style Imports
import "./layout.styles.scss";

// Component Imports
import { Navigation } from "../navigation/navigation.component";

export const Layout = () => {
  return (
    <main>
      <header>Header</header>
      <div>
        <Navigation />
        <section>
          <Outlet />
        </section>
      </div>
    </main>
  );
};
