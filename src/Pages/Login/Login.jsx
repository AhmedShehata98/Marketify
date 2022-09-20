import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";

// 3rd party libraries

import { Formik, Form } from "formik";
import InputField from "../../Components/FormComponents/InputField";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./SC/formStyles.css";
// utilities
import { RoutesList } from "../../Routes/RoutesList";

// Redux
import {
  BACK_TO_NORMAL_STATE,
  LOGIN_ACTION,
  AUTH_USER_ACTION,
  GET_USERDATA_ACTION,
} from "../../Redux/Slice/UserSlice";

//components
import CustomziedButton from "../../Components/Buttons/CustomziedButton";
import InputsWrapper from "../../Components/FormComponents/InputsWrapper";
import FormButton from "../../Components/FormComponents/FormButton";
import ButtonsWrapper from "../../Components/FormComponents/ButtonsWrapper";
import Logo from "../../Components/HeaderBar/SC/Logo";
import SectionWrapper from "../../Layout/SectionWrapper";
import darkLogo from "../../assets/images/register-dark-mode.png";
import lightLogo from "../../assets/images/register-light-mode.png";
import FormBoard from "../../Components/FormComponents/FormBoard";
import FormHeadding from "../../Components/FormComponents/FormHeadding";
import StyledAnchor from "../../Components/StyledAnchor/StyledAnchor";

const Login = () => {
  const {
    user: {
      loginSuccess,
      loginError,
      loginErrorMessage,
      loginSuccessMessage,
      isLoading,
      isAuth,
    },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [redirectTimer, setRedirectTimer] = useState(6);
  const intervalRef = useRef(null);
  const timeOutRef = useRef(null);
  const initialValues = {
    user: "",
    password: "",
    rememberMe: false,
  };
  //

  const dispatchUserAuth = useCallback(
    (token) => dispatch(AUTH_USER_ACTION(token)),
    []
  );
  const dispatchUserData = useCallback(
    () => dispatch(GET_USERDATA_ACTION()),
    []
  );
  const dispatchBackTonormalState = useCallback(
    () => dispatch(BACK_TO_NORMAL_STATE()),
    []
  );

  useEffect(() => {
    if (loginError === true || loginSuccess === true) {
      setShowAlert((alert) => (alert = true));
    }
    if (loginError) {
      timeOutRef.current = setTimeout(() => {
        dispatch(BACK_TO_NORMAL_STATE());
      }, 2000);
    }

    return () => {
      clearTimeout(timeOutRef.current);
      setShowAlert((alert) => (alert = false));
    };
  }, [loginError, loginSuccess]);

  useEffect(() => {
    let timer = 6;
    const token = document.cookie.split("=")[1];
    //
    if (loginSuccess) {
      intervalRef.current = setInterval(() => {
        timer = timer - 1;
        setRedirectTimer((c) => (c = timer));
      }, 1000);
      token !== null && dispatchUserAuth(token);
    }
  }, [loginSuccess]);

  useEffect(() => {
    if (redirectTimer === 0) {
      clearInterval(intervalRef.current);
      const getuserData = async () => {
        if (isAuth) dispatchUserData();
      };
      getuserData();
      navigate(RoutesList.app);
      dispatchBackTonormalState();
    }
  }, [redirectTimer]);

  useEffect(() => {
    document.title = "Marketify - Login";
  }, []);

  const handleSendRequest = useCallback((values, { setSubmitting }) => {
    setSubmitting(false);
    let data = {
      request: {
        u: values.user,
        password: values.password,
      },
      rememberMe: values.rememberMe,
    };
    dispatch(LOGIN_ACTION(data));
  });

  return (
    <SectionWrapper
      className="justify-content-center align-items-center"
      background="linear-gradient(30deg,var(--fourth-color), var(--secondary-color));"
    >
      <FormBoard>
        <FormHeadding className="py-4">
          <span>
            <StyledAnchor href={"/"} outline>
              <i className="fi fi-rr-angle-small-left lh-1"></i>
              <small> home</small>
            </StyledAnchor>
          </span>
          <span>
            <div className="col-12 d-flex justify-content-center align-items-center"></div>
          </span>
          <span>
            <small>Login</small>
          </span>
        </FormHeadding>
        <article className="row w-100 px-3">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <Logo Type="light" />
          </div>
        </article>
        <article className="row w-100 px-3 mt-1">
          <div className="col-6">
            <CustomziedButton sm style={{ backgroundColor: "#173458" }}>
              <small>continue with google </small>
              <i className="fi fi-brands-google lh-1"></i>
            </CustomziedButton>
          </div>
          <div className="col-6">
            <CustomziedButton sm style={{ backgroundColor: "#1877f2" }}>
              <small>continue with facebook </small>
              <i className="fi fi-brands-facebook lh-1"></i>
            </CustomziedButton>
          </div>
        </article>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSendRequest}
          //
        >
          {(Formik) => {
            return (
              <Form className="loginForm ">
                <article className="row w-100 px-3">
                  <div className="col">
                    <InputsWrapper Direction="col">
                      <InputField
                        type="text"
                        name="user"
                        id="user"
                        required
                        placeholder={"enter your username or email ..."}
                        autoComplete="off"
                      />
                      <InputField
                        type="password"
                        name="password"
                        id="password"
                        required
                        placeholder=" enter your password..."
                      />
                    </InputsWrapper>
                  </div>
                  <div className="col-12 text-muted">
                    <StyledAnchor
                      to={RoutesList.passwordReset}
                      typographXs
                      textStart
                    >
                      forget password ?
                    </StyledAnchor>
                  </div>
                </article>
                <ButtonsWrapper Login>
                  <FormButton
                    type="submit"
                    className="shadow-sm"
                    id="login-button"
                    Loading={isLoading}
                    Error={loginError}
                    Success={loginSuccess}
                    message={
                      loginSuccess
                        ? `redirect after ${redirectTimer}`
                        : `${loginErrorMessage}`
                    }
                  >
                    login
                  </FormButton>
                  <p className="small text-muted text-center my-2"></p>
                </ButtonsWrapper>
                <div className="row d-flex flex-column justify-content-center align-items-center my-2 w-100">
                  <div className="col-12 text-center py-3">
                    <small className="text-capitalize fw-bold opacity-50 me-3">
                      didn't have account yet ?
                    </small>
                    <Link
                      className=" text-decoration-underline text-dark"
                      to={"/" + RoutesList.signup}
                    >
                      sign up
                    </Link>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </FormBoard>
    </SectionWrapper>
  );
};

export default Login;
