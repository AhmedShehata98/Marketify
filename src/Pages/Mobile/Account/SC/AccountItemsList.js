import React from "react";
import styled, { css } from "styled-components";

const StyledAccountItemsList = styled.ul`
  width: 100%;
  height: max-content;
  display: grid;
  justify-items: start;
  align-items: start;
  gap: 0.5rem;
  grid-auto-flow: row;
  grid-auto-rows: max-content;
  padding: 0;
  margin: 0;

  ${(props) =>
    props.divided &&
    css`
      gap: 0;
      > li:not(:last-child) {
        border-bottom: 1px solid var(--border-color);
      }
    `}
`;
const Headding = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.3;
  margin-top: 1rem;

  > :first-child {
    font-weight: bold;
    text-transform: capitalize;
    color: var(--text-color);
  }
`;

function AccountItemsList(props) {
  return (
    <StyledAccountItemsList {...props}>
      {props.Title && (
        <Headding>
          <p>{props.Title}</p>
        </Headding>
      )}
      {props.children}
    </StyledAccountItemsList>
  );
}

export default AccountItemsList;
