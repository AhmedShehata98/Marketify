import React from "react";
import styled, { css } from "styled-components";
const direction = document.dir;

const TitleWrapper = styled.header`
  position: relative;
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1.5rem;
  text-align: start;
`;

const StyledTitle = styled.h6`
  position: relative;
  width: fit-content;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--text-color);

  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    ${direction === "ltr"
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}
    width: 90%;
    height: 5px;
    background-color: var(--accent-secondary-color);
    border-radius: 45px;
  }
`;

function Title(props) {
  return (
    <TitleWrapper>
      <StyledTitle>{props.titleTypography}</StyledTitle>
      {props.children}
    </TitleWrapper>
  );
}

export default Title;
