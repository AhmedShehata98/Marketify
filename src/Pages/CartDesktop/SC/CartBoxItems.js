import React, { useCallback } from "react";

// 3rd party libraries
import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";

// utilities
import { breakpoints } from "../../../StyledComponentsVariables/breakPoints";

// redux
import { REMOVE_ITEM_FROM_CART } from "../../../Redux/Slice/CartSlice";

//components
import StyledAnchor from "../../../Components/StyledAnchor/StyledAnchor";
const direction = document.dir;

const StyledCartBoxItems = styled.li`
  position: relative;
  width: 100%;
  height: 145px;
  min-height: 145px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-basis: 100%;
  list-style: none;
  background-color: var(--primary-color);
  border-radius: var(--border-radius);
  overflow: hidden;
  margin-bottom: 0.7rem;

  @media (${breakpoints.maxabletS}) {
    flex-direction: column;
  }
`;

const ProductMedia = styled.figure`
  position: relative;
  width: 200px;
  height: inherit;
  display: flex;
  margin-bottom: unset;
  background-color: var(--secondary-color-100);

  > img {
    width: 200px;
    max-width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: center;
  }

  @media (${breakpoints.maxabletS}) {
    width: 100%;
    height: 200px;

    > img {
      width: 100%;
    }
  }
`;

const CartContentWrapper = styled.div`
  width: calc(100% - 300px);
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.5rem 1rem;

  > :first-child {
    filter: contrast(50%);
    text-transform: uppercase;
  }
  > :nth-child(2) {
    filter: contrast(90%);
    text-transform: capitalize;
    font-weight: 700;
  }

  @media (${breakpoints.maxabletS}) {
    width: 100%;
    height: max-content;
    padding: 0.5rem;
  }
`;

const ActionsButtonsWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  margin-block-start: auto;

  > :first-child {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      ${direction === "ltr"
        ? css`
            right: -10px;
          `
        : css`
            left: -10px;
          `};
      translate: 0 -50%;
      width: 1px;
      height: 70%;
      background-color: var(--primary-color-700);
    }
  }
`;

const PriceAndQuantity = styled.div`
  width: 100px;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-block: 1rem;

  > * {
    width: calc(100% - 20px);
    border-radius: var(--border-radius);
  }
  > select {
    background-color: var(--primary-color-300);
    border: 1px solid var(--secondary-color-200);
  }

  @media (${breakpoints.maxabletS}) {
    flex-direction: row;
    width: 100%;
    height: max-content;
    padding-block: unset;
    padding-block-end: 1rem;
    padding-inline: 1rem;
  }
`;

function CartBoxItems(props) {
  const dispatch = useDispatch();
  const handleRemoveProduct = useCallback(() => {
    dispatch(REMOVE_ITEM_FROM_CART({ id: props.$id }));
  });
  return (
    <StyledCartBoxItems className="shadow-sm">
      <ProductMedia>
        <img src={props.$productMedia} alt="cart-meda" />
      </ProductMedia>
      <CartContentWrapper>
        <small>{props.$brand}</small>
        <p>{props.$productName}</p>
        <ActionsButtonsWrapper>
          <StyledAnchor
            outline
            typographS={props.screenWidth >= 720 ? false : true}
          >
            <i className="fi fi-rr-heart lh-1"></i>
            <small>add to wishlist</small>
          </StyledAnchor>
          <StyledAnchor
            onClick={handleRemoveProduct}
            typographS={props.screenWidth >= 720 ? false : true}
          >
            <i className="fi fi-rr-trash lh-1"></i>
            <small>remove</small>
          </StyledAnchor>
        </ActionsButtonsWrapper>
      </CartContentWrapper>
      <PriceAndQuantity>
        <b>{props.$Price + " " + "L.E"}</b>
        <select value={props.$ItemsCount}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </PriceAndQuantity>
    </StyledCartBoxItems>
  );
}

export default CartBoxItems;
