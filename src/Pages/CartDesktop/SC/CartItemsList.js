import React from "react";
import styled, { css } from "styled-components";

const CartItemsListWrapper = styled.div`
  width: 100%;
  height: max-content;
  padding: 0.5rem;
`;

const StyledCartList = styled.ul`
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: unset;
  margin: unset;
`;

function CartItemsList(props) {
  return (
    <CartItemsListWrapper>
      <StyledCartList>{props.children}</StyledCartList>
    </CartItemsListWrapper>
  );
}

export default CartItemsList;
