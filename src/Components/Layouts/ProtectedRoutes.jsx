import React from "react";
import UseUserContext from "../../Hooks/UseUserContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { userInfo } = UseUserContext();

  return userInfo?.accessToken ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoutes;
