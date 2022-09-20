import React from "react";
import styled from "styled-components";

const StyledCheckoutInfo = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color-500);
  display: flex;
  flex-wrap: wrap;
  padding: 1.5rem;
  justify-content: flex-start;
  align-items: flex-start;
`;

function CheckoutInfo(props) {
  return <StyledCheckoutInfo>{props.children}</StyledCheckoutInfo>;
}

export default CheckoutInfo;
