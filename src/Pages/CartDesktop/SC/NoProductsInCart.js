import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import noProductsImg from "../../../assets/images/Empty-amico.svg";
import { RoutesList } from "../../../Routes/RoutesList";
import { breakpoints } from "../../../StyledComponentsVariables/breakPoints";
import { dynamicColor } from "../../../Utillites/MarketifyMethods";

const StyledNoProductsInCart = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const IllustratorWrapper = styled.figure`
  width: 30%;
  height: 30%;
  display: grid;
  place-items: center;
  aspect-ratio: 1 / 1;
  background-color: var(--primary-color-500);
  border-radius: 50%;

  @media (${breakpoints.maxabletS}) {
    width: 60%;
    height: 60%;
  }

  @media (${breakpoints.maxMobile}) {
    width: 70%;
    height: 70%;
  }

  > img {
    max-width: 80%;
    object-fit: cover;
  }
`;

const Description = styled.div`
  width: 100%;
  height: max-content;

  > :first-child {
    text-align: center;
    text-transform: capitalize;
    color: ${dynamicColor("--primary-color-300")};
  }
  :nth-child(2) {
    text-align: center;
    color: var(--primary-color-800);
  }
`;

const ActionButton = styled(Link)`
  width: 200px;
  height: max-content;
  display: grid;
  place-items: center;
  padding-block: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  text-transform: capitalize;
  background-color: var(--accent-secondary-color);
  border: none;
  color: ${dynamicColor("--accent-secondary-color")} !important;

  &:hover {
    filter: brightness(80%);
  }
`;

function NoProductsInCart(props) {
  return (
    <StyledNoProductsInCart>
      <IllustratorWrapper>
        <img src={noProductsImg} alt="no products" />
      </IllustratorWrapper>
      <Description>
        <h5>no items in your cart</h5>
        <p>
          You have items in your wishlist. To buy items from your wishlist, move
          them to your cart.
        </p>
      </Description>
      <ActionButton to={`/${RoutesList.productsList}`}>
        Continue Shopping
      </ActionButton>
    </StyledNoProductsInCart>
  );
}

export default NoProductsInCart;
