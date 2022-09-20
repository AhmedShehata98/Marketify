import { nanoid } from "nanoid";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { breakpoints } from "../../../StyledComponentsVariables/breakPoints";

const direction = window.document.documentElement.dir;

const StyledProductsListWrapper = styled.ul`
  position: relative;
  width: 100%;
  max-height: calc(100vh - 3.5rem);
  background-color: var(--primary-color-300);
  gap: 0.5rem;
  padding: unset;
  margin: unset;
  overflow-y: auto;
  overflow-x: hidden;
  padding-inline-end: 0.5rem;
  padding-block-start: 0.5rem;
  padding-bottom: 4.5rem;

  ${(props) =>
    props.ListView === false &&
    css`
      display: flex;
      align-items: center;
      flex-direction: row;
      align-items:flex-start
      justify-content: flex-start;
      flex-wrap: wrap;
    `};
  ${(props) =>
    props.ListView === true &&
    css`
      display: flex;
      flex-direction: column;
    `};

  &::-webkit-scrollbar {
    width: 0.4rem;
    background-color: var(--five-color);
    border-radius: 45px;

    @media (${breakpoints.maxTabletL}) {
      -webkit-appearance: none;
      width: 0;
    }
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: var(--secondary-color);
    border-radius: 45px;
  }
`;
const ProductsListWrapper = forwardRef((props, ref) => {
  let productsList = props.productsList;

  return (
    <StyledProductsListWrapper {...props}>
      {props.children}
    </StyledProductsListWrapper>
  );
});

export default React.memo(ProductsListWrapper);
