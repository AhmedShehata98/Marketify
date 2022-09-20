import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../StyledComponentsVariables/breakPoints";

const StyledFormBoard = styled.div`
  width: 30vw;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  background-color: var(--primary-color);
  margin: auto;

  @media (${breakpoints.minPCXL}) {
    width: 33vw;
  }
  @media (${breakpoints.maxTabletL}) {
    width: 43vw;
  }
  @media (${breakpoints.maxabletS}) {
    width: 65%;
  }
  @media (${breakpoints.maxMobile}) {
    width: 100%;
    height: 100vh;
  }
`;

function FormBoard(props) {
  return <StyledFormBoard>{props.children}</StyledFormBoard>;
}

export default FormBoard;
