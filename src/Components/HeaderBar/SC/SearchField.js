import React, { useCallback } from "react";
import styled, { css } from "styled-components";
import { breakpoints } from "../../../StyledComponentsVariables/breakPoints";
import { dynamicColor } from "../../../Utillites/MarketifyMethods";
const direction = window.document.documentElement.dir;

const StyledSearchFieldWrapper = styled.form`
  position: relative;
  min-width: 350px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out min-width, 0.3s ease-out width;
  background-color: var(--primary-color) !important;
  border: 1px solid var(--primary-color-100);
  border-radius: var(--border-radius);

  /* overflow: hidden; */

  &::after {
    content: "";
    position: absolute;
    ${direction === "ltr"
      ? css`
          left: -50%;
        `
      : css`
          right: -50%;
        `}
    top: 50%;
    translate: 0 -50%;
    width: 1px;
    height: 60%;
    background-color: var(--primary-color-600);
  }
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    ${direction === "ltr"
      ? css`
          right: -50%;
        `
      : css`
          left: -50%;
        `}
    translate: 0 -50%;
    width: 1px;
    height: 60%;
    background-color: var(--primary-color-600);
  }

  @media (${breakpoints.maxPCL}) {
    width: 35px;
    min-width: 35px;
    height: 35px;
    border-radius: 50%;
    overflow: hidden;
    margin-inline-start: auto;

    &.visible {
      flex: 1 1;
      height: 35px;
      transition: 0.3s ease-in-out min-width, 0.3s ease-out width;
      border-radius: var(--border-radius);
    }
  }
`;

const SearchBox = styled.input`
  width: 100%;
  height: 100%;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  transition: background-color 0.2s ease-in-out;
  border: none;
  background-color: var(--primary-color-300);
  border-radius: var(--border-radius);
  color: ${dynamicColor("--primary-color-300")};

  @media (${breakpoints.maxTabletL}) {
    overflow: hidden;
    transition: 0.3s ease-out width;

    &.visible {
      height: 35px;
      transition: 0.3s ease-out width;
    }
  }

  &:focus {
    outline: none;
    background-color: var(--primary-color-400);
  }
  &:focus + button {
    background-color: var(--primary-color-400);
    > :first-child {
      color: ${dynamicColor("--primary-color-300")};
    }
  }
  &::placeholder {
    text-transform: uppercase;
    font-weight: bold;
    font-weight: 600;
    color: ${dynamicColor("--primary-color-300")};
  }
`;

const SearchBTN = styled.button`
  position: absolute;
  top: 50%;
  ${direction === "ltr"
    ? css`
        right: 0;
      `
    : css`
        left: 0;
      `};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 100%;
  border: none;
  translate: 0 -50%;
  transition: background-color 0.2s ease-in-out;
  background-color: var(--primary-color-300);
  border-top-right-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);

  > :first-child {
    color: ${dynamicColor("--primary-color-300")};
    line-height: 0.5rem;
  }

  &:hover {
    opacity: 0.7;
  }

  @media (${breakpoints.maxTabletL}) {
    width: 35px;
    height: 35px;
    position: absolute;
    pointer-events: none;
    top: 50%;
    background-color: var(--secondary-color);
    border: none;

    > :first-child {
      color: var(--text-color-secondary);
    }

    &.visible {
      pointer-events: all !important;
      width: 50px;
      height: 100%;
      top: 50%;
      ${direction === "ltr"
        ? css`
            right: 0;
          `
        : css`
            left: 0;
          `};
      translate: 0 -50%;
      background-color: var(--third-color);

      > :first-child {
        color: var(--text-color);
      }
    }
  }
`;

function SearchField(props) {
  const handleExpandSearchFrom = useCallback((event) => {
    const maxTabletL = breakpoints.maxTabletL.split(":")[1].slice(0, 3);
    if (props.screenWidth <= 960) {
      const SearcInput = event.target;
      SearcInput.classList.add("visible");
      SearcInput.parentElement.classList.add("visible");
      SearcInput.nextSibling.classList.add("visible");
      props.setShownavItems(false);
    }
  }, []);
  const handleHideSearchFrom = useCallback((event) => {
    const maxTabletL = breakpoints.maxTabletL.split(":")[1].slice(0, 3);
    if (props.screenWidth <= 960) {
      const SearcInput = event.target;
      SearcInput.classList.remove("visible");
      SearcInput.parentElement.classList.remove("visible");
      SearcInput.nextSibling.classList.remove("visible");
      props.setShownavItems(true);
    }
  }, []);

  return (
    <StyledSearchFieldWrapper>
      <SearchBox
        type={"search"}
        onFocus={(event) => handleExpandSearchFrom(event)}
        onBlur={(event) => handleHideSearchFrom(event)}
        name="searchItems"
        placeholder={props.appState.controlBar.searchBox.inputPlaceholder}
      />
      <SearchBTN type="submit">
        <i className="fi fi-rr-search"></i>
      </SearchBTN>
    </StyledSearchFieldWrapper>
  );
}

export default SearchField;
