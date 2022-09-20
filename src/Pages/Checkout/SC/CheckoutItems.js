import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../StyledComponentsVariables/breakPoints";

const StyledCheckoutItems = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-basis: 42%;
  margin-inline-end: 3.5rem;

  @media (${breakpoints.maxTabletL}) {
    flex-basis: 40%;
  }
  @media (${breakpoints.maxabletS}) {
    flex-basis: 100%;
    margin-inline-end: unset;
    margin-block-start: 1.5rem;
  }
`;
const Headding = styled.span`
  width: 100%;
  height: fit-content;
  border-bottom: 1px solid var(--primary-color-500);
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  min-width: 65px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--secondary-color-200);
  font-weight: 700;
  text-transform: uppercase;
  line-height: 0.5;
  font-size: 0.8rem;
  background-color: var(--secondary-color-100);
  color: var(--secondary-color);
`;

function CheckoutItems(props) {
  return (
    <StyledCheckoutItems>
      <Headding>
        <small className=" text-uppercase mb-3 fw-bold"> {props.$title}</small>
        <StyledButton
          className=" mb-3"
          type="button"
          onClick={(open) => {
            props.$setshowModal((open) => (open = true));
            props.$setShowChangeaddress((open) => (open = true));
          }}
        >
          change
        </StyledButton>
      </Headding>
      {props.children}
    </StyledCheckoutItems>
  );
}

export default CheckoutItems;
