// Library Imports

// Style Imports
import "./header.styles.scss";

// Icon Imports
import { FiLogOut } from "react-icons/fi";

import React from "react";

const Header = (props) => {
  return (
    <header className="header">
      <div className="page-title">{props.title}</div>
      <div className="user-region">{props.title}</div>
      <div className="logout">
        <FiLogOut />
        Logout
      </div>
    </header>
  );
};

export default Header;
