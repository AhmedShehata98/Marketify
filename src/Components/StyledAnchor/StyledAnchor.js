import React, { css } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const StyledAnchorWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem 0.5rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--text-color);
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;

  > .fi {
    user-select: none;
    pointer-events: none;
  }

  &.text-start {
    margin-inline-end: auto;
  }
  &.text-end {
    margin-inline-start: auto;
  }

  &.typograph-xs {
    font-size: 12px;
  }
  &.typograph-s {
    font-size: 14px;
  }
  &.typograph-md {
    font-size: 16px;
  }
  &.typograph-x {
    font-size: 18px;
  }
  &.typograph-xl {
    font-size: 20px;
  }

  &.active-outline {
    color: var(--secondary-color);
  }
  &.active-filled {
    padding: 0.25rem 0.9rem;
    color: var(--text-color-secondary);
    background: var(--secondary-color);
    transition: background-color 0.3s linear,
      color 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border-radius: 45px;

    &:hover {
      background-color: var(--secondary-color-100);
      color: var(--secondary-color);
      > * {
        color: var(--secondary-color);
      }
    }
  }
  &.base {
    background-color: transparent;
    color: var(--text-color);
    > * {
      color: var(--text-color);
    }

    &:hover {
      color: var(--secondary-color);
      > * {
        color: var(--secondary-color);
      }
    }
  }
  &.danger {
    color: rgb(220, 53, 69);
    text-decoration: underline;
  }
  &.active-filled-pill {
    width: 33px;
    height: 33px;
    padding: 0.25rem 0.9rem;
    color: var(--text-color-secondary);
    background: var(--secondary-color);
    border-radius: 45px;
    line-height: 0.5rem;

    &:hover {
      &:hover {
        background-color: var(--hover-color);

        > * {
          color: var(--secondary-color);
        }
      }
    }
  }
`;

function StyledAnchor(props) {
  const handleClassName = () => {
    let classes = [];
    //
    if (props.$filledPill) {
      classes.push("active-filled-pill");
    }
    if (props.$outline) {
      classes.push("active-outline");
    }
    if (props.$filled) {
      classes.push("active-filled ");
    }
    if (props.$base) {
      classes.push("base ");
    }
    if (props.$danger) {
      classes.push("danger ");
    }
    if (props.$textStart) {
      classes.push("text-start");
    }
    if (props.$textEnd) {
      classes.push("text-end");
    }
    if (props.$typographXs) {
      classes.push("typograph-xs");
    }
    if (props.$typographS) {
      classes.push("typograph-s");
    }
    if (props.$typographMd) {
      classes.push("typograph-md");
    }
    if (props.$typographXL) {
      classes.push("typograph-l");
    }
    if (props.$typographXL) {
      classes.push("typograph-lg");
    }

    return classes.join(" ");
  };
  return (
    <StyledAnchorWrapper>
      <StyledLink
        className={handleClassName()}
        to={props.href || "#"}
        {...props}
      >
        {props.children}
      </StyledLink>
    </StyledAnchorWrapper>
  );
}

export default StyledAnchor;
