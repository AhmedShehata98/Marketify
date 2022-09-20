import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledAccountMenuOptions = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.2rem 0.5rem;

  &:last-child {
    .title {
      color: #ff4444 !important;
      font-weight: 700;
    }
    .icon {
      &::before {
        background-color: var(--third-color);
      }

      > :first-child {
        color: #ff4444 !important;
      }
    }
  }

  &:hover {
    background-color: var(--hover-color);
    color: var(--text-color-secondary);
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--text-color);

  .icon {
    position: relative;
    z-index: 2;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--text-color);

    > :first-child {
      line-height: 0.5rem;
      font-size: 1rem;
    }

    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      width: 100%;
      height: 100%;
      background-color: var(--third-color);
      border: 1px solid var(--bs-border-color-translucent);
      border-radius: 50%;
    }
  }
  .title {
    margin-block: auto;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: capitalize;
  }
`;

function AccountMenuOptions(props) {
  return (
    <StyledAccountMenuOptions>
      <StyledLink to={props.href || "#"} {...props}>
        {props.children}
      </StyledLink>
    </StyledAccountMenuOptions>
  );
}

export default AccountMenuOptions;
