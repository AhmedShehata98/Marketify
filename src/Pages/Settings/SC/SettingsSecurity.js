import React, { useEffect, useMemo, useState } from "react";

// components
import InputsWrapper from "../../../Components/FormComponents/InputsWrapper";
import InputField from "../../../Components/FormComponents/InputField";

// 3rd party libraries
import styled from "styled-components";

import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

// redux
import { UPDATE_USER_PASSWORD } from "../../../Redux/Slice/UserSlice";

const SettingsSecurityWrapper = styled.article`
  width: 100%;
  min-height: 50vh;
  padding: 0.5rem;
  background-color: var(--fourth-color);
`;

const StyledLabels = styled.label`
  color: var(--text-color);
  text-transform: capitalize;
`;

function SettingsSecurity() {
  var {
    user: {
      userData,
      isLoading,
      isAuth,
      updatePasswordError,
      updatePasswordSuccess,
    },
  } = useSelector((state) => state);
  var initialValues = {
    oldPassword: "",
    newPassword: "",
  };
  var dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.title = "Marketify - Security Information";
  }, []);

  function sendUpdatePassword(values) {
    const data = {
      oldPass: values.oldPassword,
      newPass: values.newPassword,
    };
    dispatch(UPDATE_USER_PASSWORD(data));
  }
  return (
    <SettingsSecurityWrapper>
      <Formik initialValues={initialValues}>
        {(formik) => {
          return (
            <div className="row">
              <div className="row d-flex align-items-center">
                <div className="col-12 col-md-3">
                  <StyledLabels>old password :</StyledLabels>
                </div>
                <div className="col-12 col-md-8">
                  <InputsWrapper
                    Direction={"row"}
                    Background={"var(--fourth-color)"}
                  >
                    <InputField
                      type="password"
                      name="oldPassword"
                      placeholder="password"
                    />
                  </InputsWrapper>
                </div>
              </div>
              <div className="row d-flex align-items-center">
                <div className="col-12 col-md-3">
                  <StyledLabels>new password :</StyledLabels>
                </div>
                <div className="col-12 col-md-8">
                  <InputsWrapper
                    Direction={"row"}
                    Background={"var(--fourth-color)"}
                  >
                    <InputField
                      type="password"
                      name="newPassword"
                      placeholder="password"
                    />
                  </InputsWrapper>
                </div>
              </div>
              <div className="row">
                <div className="col-3 d-none d-md-flex"></div>
                <div className="col-12 col-md-9 my-2">
                  {updatePasswordSuccess !== null && (
                    <span className="alert alert-dark py-2 w-100 " role="alert">
                      {updatePasswordSuccess.data}
                    </span>
                  )}
                  {updatePasswordError !== null && (
                    <span
                      className="alert alert-danger py-2 w-100 "
                      role="alert"
                    >
                      {updatePasswordError.data}
                    </span>
                  )}
                </div>
              </div>
              <div className="row d-flex justify-content-start mt-3 text-capitalize">
                <div className="col-6 col-md-2 my-2">
                  <button
                    className="btn btn-sm btn-secondary rounded-1 w-100 text-capitalize"
                    type="reset"
                  >
                    reset all
                  </button>
                </div>
                <div className="col-6 col-md-4 my-2">
                  <button
                    className="btn btn-sm btn-success rounded-1 w-100 text-capitalize"
                    type="submit"
                    onClick={() => sendUpdatePassword(formik.values)}
                  >
                    change password
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    </SettingsSecurityWrapper>
  );
}

export default SettingsSecurity;
