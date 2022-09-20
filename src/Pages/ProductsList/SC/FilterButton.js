import React, { useState } from "react";
import { MdOutlineExpandLess } from "react-icons/md";
import styled from "styled-components";

const ButtonFilterWrapper = styled.div`
  position: relative;
  z-index: 5;
  width: 100%;
  height: fit-content;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  transition: height 0.3s linear;
  margin-block-start: auto;

  &.collapse-section {
    height: 43px;
    max-height: 43px;
    overflow: hidden;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-block: 0.5rem;
  margin-left: 0.5rem;
  gap: 0.2rem;

  > label {
    text-transform: capitalize;
    font-weight: 400;
    font-size: 0.8rem;
  }
`;
const Searcbutton = styled.button`
  width: calc(100% - 1.5rem);
  height: 100%;
  border: 1px solid var(--border-color);
  background-color: var(--secondary-color);
  color: var(--text-color-secondary);

  &:focus,
  &:hover {
    border-color: var(--secondary-color);
    outline: none;
    color: var(--secondary-color);
    background-color: var(--third-color);
  }
`;

function ButtonFilter() {
  return (
    <ButtonFilterWrapper className="ButtonFilter">
      <ButtonWrapper>
        <Searcbutton type="button">Sort</Searcbutton>
      </ButtonWrapper>
    </ButtonFilterWrapper>
  );
}

export default ButtonFilter;
