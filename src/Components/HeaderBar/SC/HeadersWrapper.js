import React from "react";
import styled, { css } from "styled-components";
import { breakpoints } from "../../../StyledComponentsVariables/breakPoints";

const StyledHeaderWrapper = styled.header`
  position: relative;
  z-index: 7;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background: var(--primary-color);
  color: var(--text-color);
  ${(props) =>
    props.pathname.includes("/login") &&
    css`
      display: none;
    `};
  ${(props) =>
    props.pathname.includes("/signup") &&
    css`
      display: none;
    `};

  .upperbar-wrapper {
    width: 100%;
    height: max-content;
    position: relative;
    display: flex;
    place-items: center;
    place-content: space-between;
    padding-left: 115px;
    padding-right: 115px;
    background-color: var(--secondary-color);

    @media (${breakpoints.maxTabletL}) {
      display: none;
    }
  }

  .container {
    display: flex;
    align-items: center;
    height: 60%;

    @media (${breakpoints.maxTabletL}) {
      height: 55px;
    }
  }

  @media (${breakpoints.maxTabletL}) {
    border-bottom: 2px solid var(--border-color);
    height: fit-content;
  }
`;

function HeadersWrapper(props) {
  return <StyledHeaderWrapper {...props}>{props.children}</StyledHeaderWrapper>;
}

export default HeadersWrapper;
