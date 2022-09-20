import React from "react";
import styled from "styled-components";

const StyledButtonsWrapper = styled.div`
  width: calc(100% - 3rem);
  height: max-content;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5em;
  margin-top: 1rem;
  margin-inline: 1.5rem;

  @media (max-width: 768px) {
    width: 90%;
  }

  > button {
    opacity: 0;
    user-select: none;
    pointer-events: none;
    transition: opacity 0.2s ease-out;
  }

  &.first-step {
    > #next-step {
      opacity: 1;
      user-select: all;
      pointer-events: all;
    }
    #sign-up {
      display: none;
    }
  }

  &.second-step {
    > #go-back {
      opacity: 1;
      pointer-events: all;
    }
    #next-step {
      display: none;
    }
    #sign-up {
      opacity: 1;
      pointer-events: all;
    }
  }
  /* &.third-step {
    > #go-back {
      opacity: 1;
      pointer-events: all;
    }

    #next-step {
      display: none;
    }

    #sign-up {
      opacity: 1;
      pointer-events: all;
    }
  } */
  &.four-step {
    > #next-step {
      display: none;
    }

    > #go-back {
      display: none;
    }

    #sign-up {
      display: none;
    }
  }
  &.sign-up-error {
    > #go-back {
      opacity: 1;
      pointer-events: all;
    }
  }

  &.login-page {
    #login-button {
      opacity: 1;
      pointer-events: all;
    }
  }
`;

function ButtonsWrapper(props) {
  const handleClass = () => {
    if (props.step === 1) {
      return "first-step";
    }
    if (props.step === 2) {
      return "second-step";
    }
    if (props.step === 3) {
      return "third-step";
    }
    if (props.error) {
      return "sign-up-error";
    }
    if (props.Login) {
      return "login-page";
    }
  };

  return (
    <StyledButtonsWrapper {...props} className={handleClass()}>
      {props.children}
    </StyledButtonsWrapper>
  );
}

export default ButtonsWrapper;
