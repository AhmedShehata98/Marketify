import React, { useCallback, useEffect, useRef, useState } from "react";

// components
import { StyledInputField } from "./BasicInputField";
import { LabelText } from "./BasicInputField";

// 3rd party libraries
import styled, { css } from "styled-components";
import { useField, ErrorMessage } from "formik";
import PasswordConditions from "../../Pages/Signup/SC/PasswordConditions";
import { useDispatch, useSelector } from "react-redux";

//redux
import {
  CHECK_VALIED_USERNAME,
  CHECK_VALIED_EMAIL,
} from "../../Redux/Slice/UserSlice";

const MainWrapper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column !important;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 0.3rem;
  transition: width 0.3s ease-out;
`;

const InputFieldWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 35px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  transition: transform 0.3s ease-out;
  overflow: hidden;
`;

const CheckPassword = styled.div`
  width: 100%;
  min-height: 4px;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex-direction: column;
  background-color: var(--five-color);
  transition: width 0.3s ease-out, transform 0.3s ease-out;
  border-top: 1px solid var(--fourth-color);

  &.weak-password {
    width: 20%;
    background-color: #ff595e;
  }
  &.not-strong {
    width: 40%;
    background-color: #1982c4;
  }
  &.strong-password {
    width: 100%;
    background-color: #02c39a;
  }

  &.not-password-type {
    display: none;
  }
`;
const StyledErrorMessage = styled.small`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  opacity: 0.9;
  color: #eb4747;
`;

function InputField(props) {
  const [Field, meta] = useField(props);
  const {
    user: { isValidUsername, isValidEmail },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const usernameInputDebounce = useRef({
    input: "",
    isUsingNow: false,
  });
  const emailInputDebounce = useRef({
    input: "",
    isUsingNow: false,
  });
  const setDirection = (props) => {
    if (typeof props.Col === "string" && props.Col === "column") {
      return "flex-column";
    } else {
      return "flex-row";
    }
  };
  const [Passwordstrengthcheck, setPasswordstrengthcheck] = useState({
    isNumbersCount: false,
    ischarTransform: false,
    ishasNumbers: false,
    ishasSymbols: false,
    isEmpty: true,
  });
  const handleCheckValidation = useCallback((e) => {
    let element = e.target;
    if (Boolean(meta.error)) {
      element.classList.add("error");
    } else {
      element.classList.remove("error");
    }
  }, []);
  const handleCheckPassword = useCallback((e) => {
    let isSmallCharPattern = /[a-z]/g;
    let isCapitalCharPattern = /[A-Z]/g;
    let isNumbersPattern = /[0-9]/g;
    let isSymbolPattern = /\W/g;

    //
    let elementTarget = document.querySelector(".check-password");
    let elementValue = e.target.value;
    let elementName = e.target.name;
    if (elementName === "confirm-password") {
    }
    if (elementName === "password" || elementValue !== "") {
      // weak password

      if (
        isSmallCharPattern.test(elementValue) ||
        isCapitalCharPattern.test(elementValue) ||
        isNumbersPattern.test(elementValue) ||
        isSymbolPattern.test(elementValue)
      ) {
        elementTarget.classList.add("weak-password");
      }
      // not strong

      if (
        isSmallCharPattern.test(elementValue) &&
        isCapitalCharPattern.test(elementValue) &&
        isNumbersPattern.test(elementValue)
      ) {
        elementTarget.classList.add("not-strong");
      }
      // strong password

      if (
        isSmallCharPattern.test(elementValue) &&
        isCapitalCharPattern.test(elementValue) &&
        isNumbersPattern.test(elementValue) &&
        isSymbolPattern.test(elementValue)
      ) {
        elementTarget.classList.add("strong-password");
      }
    }
    if (elementValue === "") {
      elementTarget.classList.remove("weak-password");
      elementTarget.classList.remove("not-strong");
      elementTarget.classList.remove("strong-password");
    }
  }, []);
  const handlePasswordHints = useCallback((e) => {
    let isSmallCharPattern = /[a-z]/g;
    let isCapitalCharPattern = /[A-Z]/g;
    let isNumbersPattern = /[0-9]/g;
    let isSymbolPattern = /\W/g;
    //
    let elementValue = e.target.value;

    //
    if (
      isSmallCharPattern.test(elementValue) ||
      isCapitalCharPattern.test(elementValue)
    ) {
      setPasswordstrengthcheck((pass) => {
        return { ...pass, isEmpty: false, ischarTransform: true };
      });
    } else {
      setPasswordstrengthcheck((pass) => {
        return { ...pass, isEmpty: false, ischarTransform: false };
      });
    }
    if (isNumbersPattern.test(elementValue)) {
      setPasswordstrengthcheck((pass) => {
        return { ...pass, isEmpty: false, ishasNumbers: true };
      });
    } else {
      setPasswordstrengthcheck((pass) => {
        return { ...pass, isEmpty: false, ishasNumbers: false };
      });
    }
    if (isSymbolPattern.test(elementValue)) {
      setPasswordstrengthcheck((pass) => {
        return { ...pass, isEmpty: false, ishasSymbols: true };
      });
    } else {
      setPasswordstrengthcheck((pass) => {
        return { ...pass, isEmpty: false, ishasSymbols: false };
      });
    }
    if (elementValue.split("").length >= 8) {
      setPasswordstrengthcheck((pass) => {
        return { ...pass, isEmpty: false, isNumbersCount: true };
      });
    } else {
      setPasswordstrengthcheck((pass) => {
        return { ...pass, isEmpty: false, isNumbersCount: false };
      });
    }
    if (elementValue === "") {
      setPasswordstrengthcheck((pass) => {
        return {
          isNumbersCount: false,
          ischarTransform: false,
          ishasNumbers: false,
          ishasSymbols: false,
          isEmpty: true,
        };
      });
    }
  }, []);
  const dispatchCheckEmail = useCallback((email) => {
    dispatch(CHECK_VALIED_EMAIL({ email: email }));
  }, []);
  const dispatchCheckUsername = useCallback((username) => {
    dispatch(CHECK_VALIED_USERNAME({ username: username }));
  }, []);
  const handleUsrCheck = useCallback((e) => {
    let username = e.target.name === "username" ? true : false;
    let email = e.target.name === "email" ? true : false;
    let usernameValue = e.target.value;
    let emailValue = e.target.value;

    if (username) {
      emailInputDebounce.current = {
        ...emailInputDebounce.current,
        isUsingNow: false,
      };
      usernameInputDebounce.current = {
        input: usernameValue,
        isUsingNow: true,
      };
    }
    if (email) {
      usernameInputDebounce.current = {
        ...usernameInputDebounce.current,
        isUsingNow: false,
      };
      emailInputDebounce.current = { input: emailValue, isUsingNow: true };
    }
  }, []);

  useEffect(() => {
    let timeoutRef;
    timeoutRef = setTimeout(() => {
      if (usernameInputDebounce.current.isUsingNow) {
        usernameInputDebounce.current.input !== "" &&
          dispatchCheckUsername(usernameInputDebounce.current.input);
      }
      if (emailInputDebounce.current.isUsingNow) {
        emailInputDebounce.current.input !== "" &&
          dispatchCheckEmail(emailInputDebounce.current.input);
      }
    }, 500);
    //
    return () => {
      clearTimeout(timeoutRef);
    };
  }, [usernameInputDebounce.current.input, emailInputDebounce.current.input]);

  return (
    <MainWrapper className={setDirection(props)}>
      <InputFieldWrapper>
        <LabelText>{Field.name}</LabelText>
        <StyledInputField
          {...props}
          {...Field}
          onChange={(e) => {
            Field.onChange(e);
            handleCheckPassword(e);
            handlePasswordHints(e);
            handleUsrCheck(e);
          }}
          onBlur={(e) => {
            Field.onBlur(e);
            handleCheckValidation(e);
          }}
        />
        {props.type === "password" && props.signup && (
          <>
            <CheckPassword className={"check-password"}></CheckPassword>
            <PasswordConditions
              numbersCount={Passwordstrengthcheck.isNumbersCount}
              charSize={Passwordstrengthcheck.ischarTransform}
              hasNumbers={Passwordstrengthcheck.ishasNumbers}
              hasSymbols={Passwordstrengthcheck.ishasSymbols}
              isEmpty={Passwordstrengthcheck.isEmpty}
            />
          </>
        )}
      </InputFieldWrapper>
      <StyledErrorMessage>
        {props.name === "full-name" && <ErrorMessage name={Field.name} />}
        {props.name === "username" &&
          isValidUsername === false &&
          "this username is already used "}
        {props.name === "email" &&
          isValidEmail === false &&
          "this email is already used"}
      </StyledErrorMessage>
    </MainWrapper>
  );
}

export default InputField;
