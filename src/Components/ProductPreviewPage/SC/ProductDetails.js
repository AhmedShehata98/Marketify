import React from "react";
import styled from "styled-components";

const ProductDetailsWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ProductNameWrapper = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  > :first-child {
    color: var(--secondary-color);
    font-weight: 500;
    margin-bottom: 0.5em;
    text-transform: uppercase;
  }
  > :nth-child(2) {
    color: var(--text-color);
    font-weight: bold;
    line-height: 2.2rem;
    margin-bottom: 1rem;
    text-transform: capitalize;
    opacity: 0.8;
  }
`;

const ProductDescribtion = styled.span`
  width: 100%;
  height: fit-content;
  margin-block-start: 1.5rem;
  margin-block-end: 1rem;
  text-align: start;
  font-weight: 600;
  opacity: 0.7;
`;

const ProductPrice = styled.span`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > span {
    display: flex;
    gap: 1rem;

    > :first-child {
      font-weight: bold;
      margin-bottom: 0.1rem;
    }
    >: nth-child(2) {
      display: inline-block;
      background-color: var(--secondary-color);
      color: var(--text-color-secondary);
      padding: 0.1rem 0.3rem;
      margin-bottom: 0.8rem;
      border-radius: var(--border-radius);
    }
  }
  >: nth-child(2) {
    opacity: 0.5;
  }
`;

function ProductDetails(props) {
  return (
    <ProductDetailsWrapper>
      <ProductNameWrapper>
        {/* <p>{props.CompanyName}</p> */}
        <h3>{props.ProductName} </h3>
      </ProductNameWrapper>
      <ProductDescribtion>
        <p>{props.description}</p>
      </ProductDescribtion>
      <ProductPrice>
        <span>
          <h4>{props.Price} L.E</h4>
          {typeof props.Discount === "string" && (
            <small>{props.Discount}</small>
          )}
        </span>
        {typeof props.BeforeDiscount === "string" && (
          <b>{props.BeforeDiscount} L.E</b>
        )}
      </ProductPrice>
    </ProductDetailsWrapper>
  );
}

export default ProductDetails;
