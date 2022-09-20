import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../StyledComponentsVariables/breakPoints";

const StyledCustomProductsSection = styled.article`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;

  @media (${breakpoints.maxTabletL}) {
    height: 100%;
    min-height: initial;
  }
`;
const Headding = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--primary-color);

  > :first-child {
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

const ProductsWrapper = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 240px));
  justify-content: space-around;
  gap: 0.5rem;
  padding: 0;
  margin: 0;

  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 210px));
  }
  @media (max-width: 520px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 280px));
  }
`;

function CustomProductsSection(props) {
  return (
    <StyledCustomProductsSection {...props}>
      <Headding>
        <h4>{props.Title}</h4>
      </Headding>
      {props.children}
    </StyledCustomProductsSection>
  );
}

export default CustomProductsSection;
