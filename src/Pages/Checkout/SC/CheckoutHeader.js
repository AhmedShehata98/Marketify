import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../StyledComponentsVariables/breakPoints";

const StyledCheckoutHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: max-content;
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color-500);
  border-radius: var(--border-radius);
  padding: 0.5rem;
  margin-bottom: 1rem;
  margin-top: 1rem;

  @media (${breakpoints.maxTabletL}) {
    margin-top: 1rem;
    align-items: flex-start;
  }
  @media (${breakpoints.maxabletS}) {
    > :first-child {
      margin-bottom: 0.5rem;
      > :first-child {
        font-weight: bold;
        font-size: 1rem !important;
      }
    }
  }
`;

function CheckoutHeader(props) {
  return <StyledCheckoutHeader>{props.children}</StyledCheckoutHeader>;
}

export default CheckoutHeader;
