import React, { useCallback, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

const StyledSectionWrapper = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--primary-color-300);
  ${(props) =>
    props.background &&
    css`
      background: ${props.background};
    `};
  ${(props) =>
    props.ItemStart &&
    css`
      align-items: flex-start;
    `};
  ${(props) =>
    props.ItemCenter &&
    css`
      align-items: center;
    `};
  ${(props) =>
    props.ItemEnd &&
    css`
      align-items: flex-end;
    `};
  ${(props) =>
    props.ContentStart &&
    css`
      justify-content: flex-start;
    `};
  ${(props) =>
    props.ContentCenter &&
    css`
      justify-content: center;
    `};
  ${(props) =>
    props.ContentEnd &&
    css`
      justify-content: flex-end;
    `};
`;

function SectionWrapper(props) {
  useEffect(() => {
    let SectionWrapperRef = document.getElementById("section-wrapper");
    SectionWrapperRef.classList.add("fade-disabled");

    return () => {
      SectionWrapperRef.classList.add("fade-in");
    };
  }, []);

  return (
    <StyledSectionWrapper className="fade-in" id="section-wrapper" {...props}>
      {props.children}
    </StyledSectionWrapper>
  );
}

export default SectionWrapper;
