import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../StyledComponentsVariables/breakPoints";

const FilterPannelWrapper = styled.aside`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid var(--bs-border-color-translucent);
  background-color: var(--third-color);
  color: var(--text-color);

  @media (${breakpoints.maxTabletL}) {
    position: absolute;
    z-index: 6;
    top: 58px;
    left: 0;
    width: 100%;
    background-color: var(--third-color);
    opacity: 0;
    transform: translateY(-10px);
    pointer-events: none;
    user-select: none;
    transition: transform 0.5s ease-in-out, opacity 0.3s ease-in-out;

    &.visible-menu {
      transform: translateY(0);
      pointer-events: all;
      opacity: 1;
      user-select: all;
    }
  }
`;

const FilterPannel = React.forwardRef((props, ref) => {
  return (
    <FilterPannelWrapper className="shadow-sm" ref={ref}>
      {props.children}
    </FilterPannelWrapper>
  );
});

export default FilterPannel;
