import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../StyledComponentsVariables/breakPoints";

const StyledControlsNavbar = styled.ul`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 35px;
    background-color: var(--third-color);
    border: 1px solid var(--border-color);
    font-size: 1.5rem;
    transition: 0.3s ease-in-out background-color, 0.3s ease-in-out color;

    > img {
      user-select: none;
      pointer-events: none;
      max-width: 100%;
      color: var(--secondary-color);
      fill: var(--secondary-color);
    }

    @media (${breakpoints.minPCL}) {
      display: none;
    }

    &:focus {
      border: 2px solid var(--secondary-color);
      opacity: 0.8;
    }
  }

  @media (${breakpoints.maxTabletL}) {
    height: 60px;
  }
`;

function ControlsNavbar(props) {
  return (
    <StyledControlsNavbar {...props}>{props.children}</StyledControlsNavbar>
  );
}

export default ControlsNavbar;
