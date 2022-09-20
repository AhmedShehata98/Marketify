import React, { useEffect } from "react";
import styled, { css } from "styled-components";

const StyledCartWrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  ${(props) =>
    props.$backgroundColor &&
    css`
      background: ${props.$backgroundColor};
    `};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

function CartWrapper(props) {
  useEffect(() => {
    let SectionWrapperRef = document.getElementById("cart-wrapper");
    SectionWrapperRef.classList.add("fade-disabled");

    return () => {
      SectionWrapperRef.classList.add("fade-in");
      console.log("clean up");
    };
  }, []);
  return (
    <StyledCartWrapper id="cart-wrapper" className="fade-in" {...props}>
      {props.children}
    </StyledCartWrapper>
  );
}

export default CartWrapper;
