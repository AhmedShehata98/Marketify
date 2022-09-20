import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = (props) => {
  const { isAuth, isError } = useAuth();

  return isAuth !== null ? (
    props.children
  ) : (
    <Navigate to={props.$redirectTo || "#"} />
  );
};

export default ProtectedRoute;
