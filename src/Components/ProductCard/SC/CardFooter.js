import React, { useCallback, useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { ADD_ITEM_TO_CART } from "../../../Redux/Slice/CartSlice";
import CustomziedButton from "../../Buttons/CustomziedButton";

const direction = document.dir;

const StyledCardFooter = styled.footer`
  width: 100%;
  height: fit-content;
  margin: 0.5rem 0 0 0;
`;

const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;

  &.list-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    > button {
      width: max-content;
      align-self: flex-end;

      &:hover {
        > p {
          color: var(--text-color) !important;
        }
      }
    }
  }
`;

const Priceing = styled.p`
  font-size: 0.8rem;
  line-height: 1rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
  opacity: 0.8;
  color: var(--text-color);
`;

const Discount = styled.strong`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 0.3rem;
  background-color: var(--accent-secondary-color);
  border-radius: var(--border-radius);
  color: var(--text-color-secondary);
  font-size: 0.7rem;

  &.list-view {
    ${direction === "ltr" &&
    css`
      right: 10px;
      left: initial;
    `}
  }
`;

const Discription = styled.p`
  display: none;
  max-width: calc(100% - 190px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  text-transform: capitalize;

  &.list-view {
    display: block;
  }
`;

function CardFooter(props) {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [addedCart, setaddedCart] = useState(false);

  const handleAddToCart = useCallback((e) => {
    dispatch(ADD_ITEM_TO_CART(props.productData));
  });

  return (
    <StyledCardFooter id="card-footer">
      <PricingContainer className={props.listview ? "list-view" : null}>
        <Priceing>{props.pricing + " " + "L.E"}</Priceing>
        <Discount className={props.listview ? "list-view" : null}>
          {props.discount + "%"}
        </Discount>
        <Discription className={props.listview ? "list-view" : null}>
          {props.discription}
        </Discription>
        <CustomziedButton
          type="button"
          sm
          onClick={handleAddToCart}
          className={addedCart ? "prevent-actions bg-success" : null}
        >
          {props.insideCart === true ? (
            <>
              <i className="fi fi-rr-shopping-cart-check text-black lh-1"></i>
              <p className="lh-1 mb-0">in cart</p>
            </>
          ) : (
            <>
              <i className="fi fi-rr-shopping-cart-add text-black lh-1"></i>
              <p className="lh-1 mb-0">add to cart</p>
            </>
          )}
        </CustomziedButton>
      </PricingContainer>
    </StyledCardFooter>
  );
}

export default CardFooter;
