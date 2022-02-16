// Library Imports

// Style Imports
import "./header.styles.scss";

// Icon Imports
import { FiLogOut } from "react-icons/fi";

import React from "react";

const Header = (props) => {
  return (
    <header className="header">
      <div className="page-title">{""}</div>
      <div className="user-region">
        <div className="region-logo">
          <img src="/ethiopia.png" alt="Ethiopia" />
        </div>
        <div className="user-details">
          <span className="user name">{props.userName}</span>
          <span className="user auth">{props.userAuthority}</span>
        </div>
        <div className="logout pointer-cursor">
          <FiLogOut className="icon" />
          Logout
        </div>
      </div>
    </header>
  );
};

export default Header;
