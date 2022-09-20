import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../StyledComponentsVariables/breakPoints";

const NoMoreProductsAlert = styled.span`
  position: absolute;
  z-index: 5;
  bottom: -100px;
  left: 50%;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 00.5rem;
  transform: translateX(-50%);
  margin-block: 1rem;
  padding: 0.3rem 0.7rem;
  background-color: var(--fourth-color);
  border-radius: var(--border-radius);
  color: var(--text-color);
  text-transform: capitalize;
  transition: bottom 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);

  @media (${breakpoints.maxTabletL}) {
    text-align: center;
  }
`;

function NoMoreProducts(props) {
  return <NoMoreProductsAlert {...props}>{props.children}</NoMoreProductsAlert>;
}

export default NoMoreProducts;
