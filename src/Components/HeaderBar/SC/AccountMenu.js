import React from "react";
import styled, { css } from "styled-components";
import { breakpoints } from "../../../StyledComponentsVariables/breakPoints";
const direction = window.document.documentElement.dir;

const StyledAccountMenu = styled.ul`
  width: 200px;
  height: 0;
  position: absolute;
  top: 90%;
  ${direction === "ltr"
    ? css`
        right: 190px;
      `
    : css`
        left: 190px;
      `};
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: max-content;
  background-color: var(--primary-color);
  border: 1px solid var(--border-color);
  list-style: none;
  padding: 0;
  margin: 0;
  opacity: 0;
  user-select: none;
  pointer-events: none;
  translate: 0 -20px;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    translate 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  &.show-menu {
    opacity: 1;
    user-select: all;
    pointer-events: all;
    translate: 0;
    height: initial;
    min-height: 210px;
  }
  li:not(:last-child) {
    border-bottom: 1px solid var(--bs-border-color-translucent);
  }

  @media (${breakpoints.maxTabletL}) {
    display: none;
  }
`;

function AccountMenu(props) {
  return <StyledAccountMenu {...props}>{props.children}</StyledAccountMenu>;
}

export default AccountMenu;
