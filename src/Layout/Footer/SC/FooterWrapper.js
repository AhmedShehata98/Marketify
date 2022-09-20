import React from "react";
import styled, { css } from "styled-components";

const StyledFooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--secondary-color);
  color: var(--text-color-secondary);

  &.is-register {
    display: none;
  }

  > :first-child {
    /*this is container */

    > :first-child {
      /*this Row container */

      > :first-child {
        /*this is First column */

        display: flex;
        gap: 1.5rem;

        @media (max-width: 768px) {
          flex-wrap: wrap;
          margin-block: 1.5rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0;
    padding-bottom: 70px;
  }
`;

function FooterWrapper(props) {
  return (
    <StyledFooterWrapper
      className={
        props.pathname.includes("/login") || props.pathname.includes("/signup")
          ? "is-register"
          : null
      }
    >
      {props.children}
    </StyledFooterWrapper>
  );
}

export default FooterWrapper;
