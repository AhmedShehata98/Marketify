import React, { useState } from "react";
import { MdOutlineExpandLess } from "react-icons/md";
import styled from "styled-components";

const ColorsFilterWrapper = styled.div`
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
const ColorsBalletsWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0.3rem;
  display: flex;
  gap: 0.5rem;
`;

const ColorCard = styled.span`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 2px solid var(--border-color);
  box-shadow: 0 0 0.3rem #0e0d0d73;
`;

const SelectedColor = styled.input``;

function ColorsFilter() {
  const [ColorsValue, setColorsValue] = useState({
    selectedColor: "#C21010",
    colorsId: [
      "#C21010",
      "#E8F9FD",
      "#000000",
      "#FEC260",
      "#1C3879",
      "#125B50",
    ],
  });
  const [collapse, setCollapse] = useState(false);
  const handleSetColorsValue = (e, seletType) => {
    if (seletType === false || seletType === undefined) {
      const value = e.target.value;
      const key = e.target.name;
      setColorsValue({ ...ColorsValue, [key]: value });
    } else {
      const key = "selectedColor";
      const value = e.target.getAttribute("data-colorid");
      setColorsValue({ ...ColorsValue, [key]: value });
    }
  };

  const handleCollapsed = (e) => {
    const sectionElement = e.target.closest(".ColorsFilter");
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
    <ColorsFilterWrapper className="ColorsFilter">
      <SectionHeadding>
        <p>Colors</p>
        <button type="button" onClick={(e) => handleCollapsed(e)}>
          <MdOutlineExpandLess />
        </button>
      </SectionHeadding>
      <div>
        <label style={{ userSelect: "none" }}>selected : </label>
        <SelectedColor
          type={"color"}
          value={ColorsValue.selectedColor}
          name="colorId"
          onChange={(e) => handleSetColorsValue(e)}
        />
      </div>
      <ColorsBalletsWrapper>
        <ColorCard
          data-colorid={ColorsValue.colorsId[0]}
          style={{ backgroundColor: `${ColorsValue.colorsId[0]}` }}
          onClick={(e) => handleSetColorsValue(e, true)}
        />
        <ColorCard
          data-colorid={ColorsValue.colorsId[1]}
          style={{ backgroundColor: `${ColorsValue.colorsId[1]}` }}
          onClick={(e) => handleSetColorsValue(e, true)}
        />
        <ColorCard
          data-colorid={ColorsValue.colorsId[2]}
          style={{ backgroundColor: `${ColorsValue.colorsId[2]}` }}
          onClick={(e) => handleSetColorsValue(e, true)}
        />
        <ColorCard
          data-colorid={ColorsValue.colorsId[3]}
          style={{ backgroundColor: `${ColorsValue.colorsId[3]}` }}
          onClick={(e) => handleSetColorsValue(e, true)}
        />
        <ColorCard
          data-colorid={ColorsValue.colorsId[4]}
          style={{ backgroundColor: `${ColorsValue.colorsId[4]}` }}
          onClick={(e) => handleSetColorsValue(e, true)}
        />
      </ColorsBalletsWrapper>
    </ColorsFilterWrapper>
  );
}

export default ColorsFilter;
