import React, { forwaredRef } from "react";
import styled from "styled-components";
import { breakpoints } from "../../../StyledComponentsVariables/breakPoints";

const StyledCardWrapper = styled.li`
  width: 100%;
  min-height: fit-content;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem 0.7rem;
  background-color: var(--third-color);
  border-radius: var(--border-radius);

  @media (${breakpoints.maxTabletL}) {
    height: 370px;
    justify-content: center;
    margin-block-end: 1.5rem;
  }
`;

const CardWrapper = (props) => {
  return <StyledCardWrapper {...props}>{props.children}</StyledCardWrapper>;
};

export default CardWrapper;
