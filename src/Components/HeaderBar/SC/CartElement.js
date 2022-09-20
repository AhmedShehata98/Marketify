import React from "react";
import styled, { css } from "styled-components";
import { RoutesList } from "../../../Routes/RoutesList";
import { Link } from "react-router-dom";

const direction = document.dir;

const StyledCartElement = styled.div`
  position: absolute;
  z-index: 5;
  top: 50%;
  ${direction === "ltr" &&
  css`
    right: 120px;
  `}
  display: flex;
  width: 300px;
  height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem;
  background-color: var(--primary-color);
  border: 1px solid var(--border-color);
  opacity: 0;
  user-select: none;
  pointer-events: none;
  translate: 0 -20px;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    translate 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  overflow: hidden;

  &.show-cart {
    height: initial;
    min-height: 200px;
    opacity: 1;
    translate: 0;
    user-select: all;
    pointer-events: all;
  }

  > small {
    color: var(--text-color);
    height: 100px;
    margin-block: auto;
  }
`;

const CartHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  color: var(--text-color);
  text-transform: uppercase;
  font-weight: 500;

  > a {
    text-decoration: none;
    color: var(--text-color);
  }
`;

const CartItemsList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--text-color);

  > li:first-child {
    margin-top: 0.5rem;
  }
`;

const CheckoutBTN = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  font-weight: 500;
  background-color: var(--accent-primary-color);
  border: 1px solid var(--text-color);
  color: var(--text-color-secondary);
  margin-top: auto;

  &:hover {
    opacity: 0.5;
  }
`;

function CartElement(props) {
  const handleChildrenShow = () => {
    if (React.Children.count(props.children) === 0) {
      return <small> {props.appState.controlBar.cart.noItemsMessage}</small>;
    }
    if (React.Children.count(props.children) >= 1) {
      return <CartItemsList>{props.children}</CartItemsList>;
    }
  };

  return (
    <StyledCartElement {...props}>
      <CartHeader>
        <small>
          {props.ItemsCount} {props.appState.controlBar.cart.items}
        </small>
        <Link to={RoutesList.cartView}>
          {props.appState.controlBar.cart.viewCartBtn}
        </Link>
      </CartHeader>
      {handleChildrenShow()}
      <CheckoutBTN type="button">
        {props.appState.controlBar.cart.checkoutBtn}
      </CheckoutBTN>
    </StyledCartElement>
  );
}

export default CartElement;
