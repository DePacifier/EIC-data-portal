// Library Imports
import React from "react";
import { NavLink } from "react-router-dom";

// React-Icon Imports
import { GoDashboard, GoDiffAdded, GoDatabase, GoInbox } from "react-icons/go";
import { FaUserPlus, FaUserCog } from "react-icons/fa";

// Style Imports
import "./navigation.styles.scss";

// Navigation Available based on User Authorization
// const userNavigations = {
//   "Data-Entry": {},
//   Admin: {},
//   "Super-Admin": {},
// };

export const Navigation = () => {
  return (
    <div className="nav-layout">
      <img id="nav-logo" src="/eic-logo-small.png" alt="EIC Logo" />
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <GoDashboard className="nav-icons" />
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/add-investment"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <GoDiffAdded className="nav-icons" />
              Add Investment
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/data-centers"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <GoDatabase className="nav-icons" />
              Data Centers
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/data-requests"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <GoInbox className="nav-icons" />
              Data Requests
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/admin/add-user"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <FaUserPlus className="nav-icons" />
              Add User
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/admin/manage-users"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <FaUserCog className="nav-icons" />
              Manage Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
