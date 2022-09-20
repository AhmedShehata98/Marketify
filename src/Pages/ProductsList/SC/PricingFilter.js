import React, { useState } from "react";
import { MdOutlineExpandLess } from "react-icons/md";
import styled from "styled-components";

const PricingFilterWrapper = styled.div`
  position: relative;
  z-index: 5;
  width: 100%;
  height: fit-content;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--border-color);
  transition: height 0.3s linear;

  &.collapse-section {
    height: 43px;
    max-height: 43px;
    overflow-y: hidden;
  }
`;
const SectionHeadding = styled.span`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  > :first-child {
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--text-color);
    margin: 0;
    user-select: none;
  }
  > :nth-child(2) {
    display: grid;
    place-items: center;
    font-size: 1.5rem;
    color: var(--text-color);
    cursor: pointer;
    border: none;
    background-color: var(--third-color);
    color: var(--text-color);

    > svg {
      user-select: none;
      pointer-events: none;
    }

    &.expanded {
      > svg {
        transition: transform 0.3s linear;
        transform: rotate(180deg);
      }
    }
  }
`;
const PricingPreview = styled.span`
  height: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: var(--third-color);
  color: var(--secondary-color);
  user-select: none;
`;

const PricingFilterRange = styled.input``;

function PricingFilter() {
  const [priceValue, setPriceValue] = useState({
    min: 1,
    max: 1000,
    current: 0,
  });
  const [collapse, setCollapse] = useState(false);
  const handleSetPriceValue = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setPriceValue({ ...priceValue, current: value });
  };

  const handleCollapsed = (e) => {
    const sectionElement = e.target.closest(".priceFilter");
    const button = e.target;
    if (collapse === true) {
      sectionElement.classList.add("collapse-section");
      button.classList.add("expanded");
    } else {
      sectionElement.classList.remove("collapse-section");
      button.classList.remove("expanded");
    }
    setCollapse(!collapse);
  };
  return (
    <PricingFilterWrapper className="priceFilter">
      <SectionHeadding>
        <p>Pricing</p>
        <button type="button" onClick={(e) => handleCollapsed(e)}>
          <MdOutlineExpandLess />
        </button>
      </SectionHeadding>
      <PricingFilterRange
        type="range"
        name="pricing"
        min={priceValue.min}
        max={priceValue.max}
        step="1"
        value={priceValue.current}
        onChange={(e) => handleSetPriceValue(e)}
      />
      <PricingPreview>
        <small>{priceValue.min} L.E</small>
        <span> - </span>
        <b>{priceValue.current} L.E</b>
      </PricingPreview>
    </PricingFilterWrapper>
  );
}

export default PricingFilter;
