import React from "react";
import styled from "styled-components";

const StyledFormWrapper = styled.article`
  position: relative;
  width: calc(100% - 3rem);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-inline: 1.5rem;

  @media (max-width: 768px) {
    width: 90%;
  }

  > div {
    position: absolute;
    top: 0;
    opacity: 0;
    user-select: none;
    pointer-events: none;
    transform: translateX(-50px);
    transition: opacity 0.2s ease-in-out, transform 0.3s ease-in-out;
  }

  &.initial-step {
    > #account-setup {
      opacity: 1;
      user-select: all;
      pointer-events: all;
      transform: translateX(0);
    }
  }
  &.second-step {
    > #password {
      opacity: 1;
      user-select: all;
      pointer-events: all;
      transform: translateX(0);
    }
  }
  &.third-step {
    > #submission-alert {
      opacity: 1;
      user-select: all;
      pointer-events: all;
      transform: translateX(0);
    }
  }
`;

function FormWrapper(props) {
  const identifyStepsWithClass = () => {
    if (props.step === 1) {
      return "initial-step";
    }
    if (props.step === 2) {
      return "second-step";
    }
    if (props.step === 3) {
      return "third-step";
    }
    if (props.step === 4) {
      return "fourth-step";
    }
  };
  return (
    <StyledFormWrapper className={identifyStepsWithClass()}>
      {props.children}
    </StyledFormWrapper>
  );
}

export default FormWrapper;
