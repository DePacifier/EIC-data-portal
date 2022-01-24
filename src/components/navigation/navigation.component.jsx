// Library Imports
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Style Imports
import "./navigation.styles.scss";

// Navigation Available based on User Authorization
const userNavigations = {
  "Data-Entry": {},
  Admin: {},
  "Super-Admin": {},
};

export const Navigation = () => {
  const [showAdminOptions, setShowAdminOptions] = useState(false);

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "red" : "blue")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add-investment"
            className={({ isActive }) => (isActive ? "red" : "blue")}
          >
            Add Investment
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/data-centers"
            className={({ isActive }) => (isActive ? "red" : "blue")}
          >
            Data Centers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/data-requests"
            className={({ isActive }) => (isActive ? "red" : "blue")}
          >
            Data Requests
          </NavLink>
        </li>
        <li>
          <div onClick={() => setShowAdminOptions(!showAdminOptions)}>
            Administrator
            {showAdminOptions ? (
              <ul>
                <li>
                  <NavLink
                    to="/admin/add-user"
                    className={({ isActive }) => (isActive ? "red" : "blue")}
                  >
                    Add User
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/manage-users"
                    className={({ isActive }) => (isActive ? "red" : "blue")}
                  >
                    Manage Users
                  </NavLink>
                </li>
              </ul>
            ) : null}
          </div>
        </li>
      </ul>
    </nav>
  );
};
