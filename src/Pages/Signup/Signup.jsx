import React, { useCallback, useEffect, useState } from "react";

// 3rd party libraries
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// utilities
import "./form-styles.css";
import { schema } from "./ValidationSchema";

// Redux
import {
  SIGN_UP_ACTION,
  BACK_TO_NORMAL_STATE,
} from "../../Redux/Slice/UserSlice";
import { SHOW_NOTIFICATION } from "../../Redux/Slice/ToastNotificationsSlice";

// components
import Logo from "../../Components/HeaderBar/SC/Logo";
import InputsWrapper from "../../Components/FormComponents/InputsWrapper";
import SectionWrapper from "../../Layout/SectionWrapper";
import { RoutesList } from "../../Routes/RoutesList";
import { Formik, Form } from "formik";
import Loading from "../../Layout/Loading/Loading";
import FormWrapper from "../../Components/FormComponents/FormWrapper";
import ButtonsWrapper from "../../Components/FormComponents/ButtonsWrapper";
import StyledAnchor from "../../Components/StyledAnchor/StyledAnchor";
import FormBoard from "../../Components/FormComponents/FormBoard";
import FormHeadding from "../../Components/FormComponents/FormHeadding";

const SubmissionAlertBox = React.lazy(() => import("./SC/SubmissionAlertBox"));
const FormButton = React.lazy(() =>
  import("../../Components/FormComponents/FormButton")
);
const ProgressSteps = React.lazy(() =>
  import("../../Components/PrgressSteps/ProgressSteps")
);
const InputField = React.lazy(() =>
  import("../../Components/FormComponents/InputField")
);

const Signup = () => {
  const { user, app } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [step, setSteps] = useState({
    progressSteps: 0,
    formStep: 1,
    buttonStep: 1,
  });

  useEffect(() => {
    if (user.signupError) {
      dispatch(
        SHOW_NOTIFICATION({
          message: user.signupErrorMessage,
          severity: "error",
          timeout: 7500,
        })
      );
      dispatch(BACK_TO_NORMAL_STATE());
      //
      // back to prev step
      handleGoback();
    }
    if (user.signupSuccess) {
      setSteps((step) => {
        return {
          ...step,
          progressSteps: step.progressSteps + 1,
        };
      });
    }
  }, [user.signupError, user.signupSuccess]);

  const handleSendRequest = async (values) => {
    // const loginformData = new FormData();
    // loginformData.append("firstname", values["full-name"].split(" ")[0]);
    // loginformData.append("lastname", values["full-name"].split(" ")[1]);
    // loginformData.append("username", values.username);
    // loginformData.append("email", values.email);
    // loginformData.append("password", values.password);

    const firstName = values["full-name"].split(" ")[0];
    const firstLast = values["full-name"].split(" ")[1];
    const data = {
      firstname: firstName,
      lastname: firstLast,
      username: values.username,
      email: values.email || undefined,
      password: values.password,
      avatar: values.avatar || undefined,
    };
    dispatch(SIGN_UP_ACTION(data));

    if (user.signupSuccess === true) {
      setSteps((step) => {
        return {
          progressSteps: step.progressSteps + 1,
          formStep: step.formStep + 1,
          buttonStep: step.buttonStep + 1,
        };
      });
      console.log("succes");
    } else {
      console.log("error");
    }
  };

  const handleGoback = () => {
    setSteps((state) => {
      return {
        ...state,
        formStep: state.formStep - 1,
        buttonStep: state.buttonStep - 1,
        progressSteps: state.progressSteps - 1,
      };
    });
  };
  const handleForward = () => {
    setSteps((state) => {
      return {
        ...state,
        formStep: state.formStep + 1,
        buttonStep: state.buttonStep + 1,
        progressSteps: state.progressSteps + 1,
      };
    });
  };

  // useEffect
  useEffect(() => {
    document.title = "Marketify - Signup";
  }, []);

  const initialValues = {
    avatar: "",
    "full-name": "",
    username: "",
    email: "",
    password: "",
  };

  //
  useEffect(() => {
    if (user.signupSuccess) {
      setSteps((step) => {
        return {
          ...step,
          progressSteps: step.progressSteps + 1,
          formStep: step.formStep + 1,
          buttonStep: step.buttonStep + 1,
        };
      });
    }
  }, [user.signupSuccess]);

  return (
    <SectionWrapper
      className="justify-content-center align-items-center"
      background={"var(--accent-primary-color)"}
    >
      <FormBoard>
        <FormHeadding>
          <span>
            <StyledAnchor href={"/"} outline>
              <i className="fi fi-rr-angle-small-left lh-1"></i>
              <small> home</small>
            </StyledAnchor>
          </span>
          <span>
            <div className="col-12 d-flex justify-content-center align-items-center">
              <Logo Type="light" />
            </div>
          </span>
          <span>
            <small>sign up</small>
          </span>
        </FormHeadding>
        <div className="row w-100 d-flex flex-column justify-content-center align-items-center">
          <div className="col-12">
            <ProgressSteps Step={step.progressSteps} />
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          // onSubmit={handleSendRequest}
          validationSchema={schema}
        >
          {(Formik) => {
            return (
              <Form className="signup-main-form " style={{ minHeight: "30%" }}>
                <React.Suspense fallback={<Loading />}>
                  <FormWrapper step={step.formStep}>
                    <InputsWrapper
                      id="account-setup"
                      Direction="col"
                      ItemsStart
                    >
                      <InputField
                        type="text"
                        name="full-name"
                        id="full-name"
                        Label="full name"
                        Col="column"
                        autoComplete="off"
                        Regster
                      />
                      <InputField
                        type="text"
                        name="username"
                        id="username"
                        Label="username"
                        Col="column"
                        autoComplete="off"
                        Regster
                      />
                      <InputField
                        type="email"
                        name="email"
                        id="email"
                        Label="email"
                        Col="column"
                        autoComplete="off"
                        Regster
                      />
                    </InputsWrapper>
                    <InputsWrapper
                      id="password"
                      Direction="col"
                      ItemsStart
                      ContentStart
                    >
                      <InputField
                        type="password"
                        name="password"
                        id="password"
                        Label="password"
                        Col="column"
                        autoComplete="new-password"
                        signup
                      />
                    </InputsWrapper>
                    <SubmissionAlertBox
                      AlertType={user.signupSuccess}
                      AlertMessageDescription={
                        user.signupErrorMessage || user.signuoSuccessMessage
                      }
                      warningField={user.warningField}
                    />
                  </FormWrapper>
                  <ButtonsWrapper step={step.buttonStep} error={true}>
                    <FormButton
                      type="button"
                      Loading={null}
                      Error={null}
                      onClick={handleGoback}
                      id="go-back"
                      outline={step.buttonStep >= 1 ? true : false}
                    >
                      back
                    </FormButton>
                    <FormButton
                      type="button"
                      Loading={null}
                      Error={null}
                      onClick={handleForward}
                      id="next-step"
                    >
                      next
                    </FormButton>
                    <FormButton
                      type="button"
                      onClick={() => handleSendRequest(Formik.values)}
                      Loading={user.isLoading}
                      Error={user.signupError}
                      Success={user.signupSuccess}
                      message={user.signupErrorMessage}
                      id="sign-up"
                    >
                      sign up
                    </FormButton>
                  </ButtonsWrapper>

                  <div className="row w-100 d-flex justify-content-center mt-4">
                    <div className="col-12  d-flex gap-2 justify-content-center align-items-center">
                      <p className="small text-muted text-center fw-bold my-2">
                        already have an account ?
                      </p>
                      <Link
                        className=" text-decoration-underline text-dark"
                        to={"/" + RoutesList.login}
                      >
                        login
                      </Link>
                    </div>
                  </div>
                </React.Suspense>
              </Form>
            );
          }}
        </Formik>
      </FormBoard>
    </SectionWrapper>
  );
};

// function StepsFormComponent(props) {
//   const dispatch = useDispatch();
//   const [steps, setStep] = useState(0);
//   const [toggleAlertBox, settoggleAlertBox] = useState(null);
//   const Components = React.Children.toArray(props.children);
//   const oldClasses = Components[steps].props.className;
//   const currentStep = (Components[steps].props.className =
//     Components[steps].props.className + " " + "d-none");

//   React.useEffect(() => {
//     if (props.request.signupSuccess === true || props.request.signupError === true) {
//       setStep((c) => c + 1);
//       settoggleAlertBox(!toggleAlertBox);
//     }
//   }, [props.request.signupSuccess, props.request.signupError]);
//   React.useEffect(() => {
//     if (props.request.signupSuccess === true) {
//       dispatch(START_REDIECT_TIMER());
//     }
//   }, [props.request.signupSuccess]);

//   const handleForward = () => {
//     if (steps <= Components.length) {
//       setStep((c) => c + 1);
//       dispatch(INCREASE_FORMSTEP());
//     }
//   };
//   const handleGoback = () => {
//     if (steps >= 0) {
//       setStep((c) => c - 1);
//       dispatch(DECREASE_FORMSTEP());
//     }
//   };

//   return <>{Components}</>;
// }

export default Signup;
