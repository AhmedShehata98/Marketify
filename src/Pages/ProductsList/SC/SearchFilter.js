import React, { useState } from "react";
import { MdOutlineExpandLess } from "react-icons/md";
import styled from "styled-components";
import { dynamicColor } from "../../../Utillites/MarketifyMethods";

const SearchFilterWrapper = styled.div`
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
    overflow: hidden;
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

const SearchWrapper = styled.div`
  width: calc(100% - 15px);
  height: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  margin-block: 0.5rem;
  margin-left: 0.5rem;

  > button {
    width: 60px;
    height: 100%;
    border: none;
    background-color: var(--secondary-color-200);
    color: var(--secondary-color);
    font-weight: 600;

    &:hover {
      background-color: var(--secondary-color-300);
      color: ${dynamicColor("--secondary-color-300")};
    }
  }
`;
const SearchField = styled.input`
  width: calc(100% - 60px);
  padding: 0.2em 0.5rem;
  border: 1px solid var(--primary-color-500);
  background-color: var(--primary-color-300);
  color: var(--text-color);

  &:focus {
    border-color: var(--secondary-color);
    box-shadow: 0 0 0.3rem var(--secondary-color);
    outline: none;
  }
`;

function SearchFilter() {
  const [SearchValue, setSearchValue] = useState({
    productName: "",
  });
  const [collapse, setCollapse] = useState(false);
  const handleSetSearchValue = (e, seletType) => {
    if (seletType === false || seletType === undefined) {
      const value = e.target.value;
      const key = e.target.name;
      setSearchValue({ ...SearchValue, [key]: value });
    } else {
      const key = "selectedColor";
      const value = e.target.getAttribute("data-colorId");
      setSearchValue({ ...SearchValue, [key]: value });
    }
  };

  const handleCollapsed = (e) => {
    const sectionElement = e.target.closest(".SearchFilter");
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
    <SearchFilterWrapper className="SearchFilter">
      <SectionHeadding>
        <p>Search</p>
        <button type="button" onClick={(e) => handleCollapsed(e)}>
          <MdOutlineExpandLess />
        </button>
      </SectionHeadding>
      <SearchWrapper>
        <SearchField
          autoComplete="off"
          type="search"
          name="productName"
          placeholder="product name .."
          value={SearchValue.searchInput}
          onChange={(e) => handleSetSearchValue(e)}
        />
        <button type="button">search</button>
      </SearchWrapper>
    </SearchFilterWrapper>
  );
}

export default SearchFilter;
