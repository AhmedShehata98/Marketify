import React from "react";
import styled from "styled-components";

const StyledLoadingWrapper = styled.main`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);

  > :first-child {
    height: inherit;
  }
`;

function LoadingWrapper(props) {
  return <StyledLoadingWrapper>{props.children}</StyledLoadingWrapper>;
}

export default LoadingWrapper;
