import React from "react";
import styled from "styled-components";

const StyledCarouselButtons = styled.button`
  width: max-content;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.1rem;
  border: 1px solid var(--five-color);
  background-color: var(--accent-secondary-color);

  &:hover {
    background-color: var(--hover-color);
    border: 1px solid var(--five-color);
  }

  > :first-child {
    line-height: 0.5rem;
    font-size: 1.2rem;
    color: var(--text-color);
    user-select: none;
    pointer-events: none;
  }
`;

function CarouselButtons(props) {
  return (
    <StyledCarouselButtons {...props}>{props.children}</StyledCarouselButtons>
  );
}

export default CarouselButtons;
