import React from "react";
import styled from "styled-components/macro";

const StyledCategoriesWrapper = styled.ul`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: var(--primary-color);
  margin: 0;
  margin-top: 1rem;
  padding: 0;

  @media (max-width: 768px) {
    justify-content: space-between;
    align-items: center;
  }
`;

function CategoriesWrapper(props) {
  return <StyledCategoriesWrapper>{props.children}</StyledCategoriesWrapper>;
}

export default CategoriesWrapper;
