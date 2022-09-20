import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../StyledComponentsVariables/breakPoints";

const StyledToastWrapper = styled.div`
  position: fixed;
  bottom: 15px;
  left: 0;
  width: 100%;
  height: max-content;
  padding: 0.5rem 1rem;
  user-select: none;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (${breakpoints.maxTabletL}) {
    bottom: 58px;
    justify-content: center;
  }
`;

function ToastWrapper(props) {
  return <StyledToastWrapper {...props}>{props.children}</StyledToastWrapper>;
}

export default ToastWrapper;
