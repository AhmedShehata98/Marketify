import React from "react";
import styled from "styled-components";

const StyledCartItems = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--third-color);
`;

function CartItems(props) {
  return (
    <StyledCartItems className="shadow-sm" {...props}>
      {props.children}
    </StyledCartItems>
  );
}

export default CartItems;
