import React from "react";
import styled, { keyframes } from "styled-components";
import { dynamicColor } from "../../../Utillites/MarketifyMethods";

const ClickAnimation = keyframes`
from {
    transform: scale(0.95);
}
to{
    transform: scale(1);
}
`;
const ButtonContainer = styled.div`
  width: 100%;
  height: 40px;

  @media (max-width: 768px) {
    margin-block: 1rem;
  }
`;
const StyledAddToCard = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--secondary-color);
  border: none;
  border-radius: var(--border-radius);
  text-transform: uppercase;
  transition: transform 0.3s ease-in-out;
  color: ${dynamicColor("--secondary-color")};

  &.addedCart {
    background-color: var(--success-color);
    color: ${dynamicColor("--success-color")};
    pointer-events: none;

    &:focus {
      color: ${dynamicColor("--success-color")};
      border: 2px solid var(--success-color);
    }

    > :first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      > :first-child {
        font-size: 1.5rem;
      }
    }
  }

  &:focus {
    animation: ${ClickAnimation} 0.3s linear alternate-reverse;
    color: var(--secondary-color);
    background-color: transparent;
    border: 2px solid var(--secondary-color);
  }
  &:hover {
    transform: scale(0.95);
    color: var(--secondary-color);
    background-color: transparent;
    border: 2px solid var(--secondary-color);
  }
`;

const AddToCardButton = React.forwardRef((props, ref) => {
  return (
    <ButtonContainer>
      <StyledAddToCard
        ref={ref}
        className={props.$addedCart ? "addedCart" : null}
        {...props}
      >
        {props.$addedCart && (
          <div className="w-100 ">
            <i className="fi fi-rr-shopping-cart-check lh-1 text-dark"></i>
            <span className="text-dark">added to cart</span>
          </div>
        )}
        {props.$addedCart === false && props.children}
      </StyledAddToCard>
    </ButtonContainer>
  );
});

export default AddToCardButton;
