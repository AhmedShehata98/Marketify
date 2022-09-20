import React from "react";
import styled from "styled-components";
import { dynamicColor } from "../../../Utillites/MarketifyMethods";

const StyledCounterButton = styled.button`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: var(--border-radius);
  background-color: var(--secondary-color-100);
  color: ${dynamicColor("--secondary-color-100")};

  &:hover,
  &:focus {
    background-color: var(--secondary-color-200);
    color: ${dynamicColor("--secondary-color-100")};
  }
`;

function CounterButton(props) {
  return <StyledCounterButton {...props}>{props.children}</StyledCounterButton>;
}

export default CounterButton;
