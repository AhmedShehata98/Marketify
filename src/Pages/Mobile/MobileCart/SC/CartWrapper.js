import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../../StyledComponentsVariables/breakPoints";

const MobileCartWrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-color: var(--primary-color);
  margin-block-end: auto;

  @media (${breakpoints.minPCL}) {
    display: none;
  }
`;

function CartWrapper(props) {
  return <MobileCartWrapper {...props}>{props.children}</MobileCartWrapper>;
}

export default CartWrapper;
