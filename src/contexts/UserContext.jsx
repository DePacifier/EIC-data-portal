import React, { createContext, useState, useMemo } from "react";
import { Outlet } from "react-router-dom";

export const context = createContext({
  userName: {},
  setUserName: () => {},
});

const UserContext = () => {
  const [userName, setUserName] = useState({});
  const value = useMemo(() => ({ userName, setUserName }), [userName]);
  return (
    <context.Provider value={value}>
      <Outlet />
    </context.Provider>
  );
};

export default UserContext;
