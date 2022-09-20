import React from "react";
import styled from "styled-components";

const FormHeaddingWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-start;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: var(--primary-color-400);
  border-bottom: 1px solid var(--primary-color-500);
  overflow: hidden;

  > * {
    display: flex;
    align-items: center;
    height: 100%;
    width: calc(100% / 3);
  }
  > :nth-child(1) {
    > * {
      font-weight: 700;
      text-transform: uppercase;
      margin-inline-end: auto;
    }
  }
  > :nth-child(3) {
    > * {
      font-weight: 700;
      text-transform: uppercase;
      margin-inline-start: auto;
      color: var(--secondary-color);
    }
  }
`;
function FormHeadding(props) {
  return <FormHeaddingWrapper {...props}>{props.children}</FormHeaddingWrapper>;
}

export default FormHeadding;
