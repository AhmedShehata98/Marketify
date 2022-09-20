import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../StyledComponentsVariables/breakPoints";

const StyledLoginWrapperBoard = styled.div`
  position: relative;
  width: 35%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);

  .logo-wrapper {
    width: 100px;
    display: flex;
    align-items: center;
    margin-block: 1rem;
    margin-left: auto;

    > img {
      width: 100%;
    }
  }

  @media (${breakpoints.maxTabletL}) {
    width: 100%;
    height: 100%;
  }
`;

function LoginWrapperBoard(props) {
  return <StyledLoginWrapperBoard>{props.children}</StyledLoginWrapperBoard>;
}

export default LoginWrapperBoard;
