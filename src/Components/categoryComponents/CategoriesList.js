import React from "react";
import styled, { css } from "styled-components";
import { breakpoints } from "../../StyledComponentsVariables/breakPoints";

const StyledCategoriesList = styled.ul`
  position: relative;
  max-width: 100%;
  width: 100%;
  height: 350px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.7rem;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0.8rem;
  margin: 0;
  list-style: none;
  ${(props) =>
    props.vh &&
    css`
      minh-height: 100vh;
    `}

  &::-webkit-scrollbar {
    width: 6px;
    background-color: var(--five-color);
    border-radius: 45px;
  }
  &::-webkit-scrollbar-thumb {
    -webkit-appearance: none;
    background-color: var(--secondary-color);
    border-radius: 45px;
    cursor: pointer;
    width: 6px;
  }

  @media (${breakpoints.maxTabletL}) {
    height: 435px;
  }
`;

function CategoriesList(props) {
  return (
    <StyledCategoriesList {...props}>{props.children}</StyledCategoriesList>
  );
}

export default CategoriesList;
