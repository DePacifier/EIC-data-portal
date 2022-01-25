// Library Imports

// Style Imports
import "./header.styles.scss";

// Icon Imports
import { FiLogOut } from "react-icons/fi";

import React from "react";

const Header = (props) => {
  return (
    <header className="header">
      <div className="page-title vcenter">{props.title}</div>
      <div className="user-region vcenter">
        <img className="region-logo" src="/ethiopia.png" alt="Ethiopia" />
        <div className="user-details">
          <span className="user name">{props.userName}</span>
          <span className="user auth">{props.userAuthority}</span>
        </div>
      </div>
      <div className="logout vcenter pointer-cursor">
        <FiLogOut className="icon" />
        Logout
      </div>
    </header>
  );
};

export default Header;
