import React from "react";
import styled, { css } from "styled-components";
import { breakpoints } from "../../StyledComponentsVariables/breakPoints";

const StyledFilledContainer = styled.section`
  width: 100%;
  height: 100%;
  ${(props) =>
    props.VHeight &&
    css`
      min-height: 100vh;
    `};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.col &&
    css`
      flex-direction: column;
    `};
  ${(props) =>
    props.row &&
    css`
      flex-direction: row;
    `};
  ${(props) =>
    props.ItemStart &&
    css`
      align-items: flex-start;
    `};
  ${(props) =>
    props.ContetStart &&
    css`
      justify-content: flex-start;
    `};
  ${(props) =>
    props.background &&
    css`
      background: ${props.background};
    `};

  @media (${breakpoints.minPCXL}) {
    padding-left: 104px;
    padding-right: 104px;
  }
  @media (${breakpoints.maxTabletL}) {
    padding-left: 93px;
    padding-right: 93px;
  }
  @media (${breakpoints.maxabletS}) {
    padding-left: 88px;
    padding-right: 88px;
  }
  @media (${breakpoints.maxMobile}) {
    padding-left: 12px;
    padding-right: 12px;
  }
`;

function FilledContainer(props) {
  return (
    <StyledFilledContainer {...props}>{props.children}</StyledFilledContainer>
  );
}

export default FilledContainer;
