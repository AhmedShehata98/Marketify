import React from "react";
import styled from "styled-components";

const StyledAccountWrapper = styled.main`
  width: 100%;
  min-height: 75vh;
  background-color: var(--primary-color-500);
  padding-block: 1rem;
`;

function AccountWrapper(props) {
  return (
    <StyledAccountWrapper {...props}>
      <section className="container">{props.children}</section>
    </StyledAccountWrapper>
  );
}

export default AccountWrapper;
