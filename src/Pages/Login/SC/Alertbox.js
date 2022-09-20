import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { CgDanger } from "react-icons/cg";
import styled from "styled-components";

const StyledAlertbox = styled.div`
  width: calc(100% - 3rem);
  min-height: 34;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-color);
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  padding: 0.3rem;
  transition: opacity 0.3s ease-out, transform 0.5s ease-out;
  opacity: 0;
  user-select: none;
  pointer-events: none;
  transform: translateY(-20px);

  &.show {
    opacity: 1;
    user-select: all;
    pointer-events: all;
    transform: translateY(0);
  }

  > svg {
    display: none;
  }

  &.login-error {
    background-color: #f3b3b3;
    color: #af2d2d;
    font-family: var(--prompt-sans-family);
    text-transform: uppercase;
    display: inline-block;
  }
  &.login-success {
    background-color: #f3b3b3;
    color: #400505;
    display: inline-block;
  }
`;

function Alertbox(props) {
  const handleClassName = () => {
    if (props.success) {
      return "login-success";
    }
    if (props.success !== true) {
      return "login-error";
    }
    if (props.show) {
      return "show";
    }
  };
  return (
    <StyledAlertbox className={handleClassName()}>
      <CgDanger />
      <AiFillCheckCircle />
    </StyledAlertbox>
  );
}

export default Alertbox;
