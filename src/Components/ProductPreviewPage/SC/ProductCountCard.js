import React from "react";
import styled from "styled-components";

const ProductCountCardWrapper = styled.span`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Counter = styled.span`
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: bold;
  background-color: var(--secondary-color-200);
`;

function ProductCountCard(props) {
  return (
    <ProductCountCardWrapper>
      {props.children[0]}
      <Counter>{props.Counter}</Counter>
      {props.children[1]}
    </ProductCountCardWrapper>
  );
}

export default ProductCountCard;
