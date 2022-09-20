import React from "react";
import styled, { css } from "styled-components";

const StyledAccontItem = styled.li`
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: var(--third-color);

  ${(props) =>
    props.UserBox &&
    css`
      height: max-content;
      justify-content: flex-start;
      align-items: flex-end;
      gap: 1.5rem;
      margin-block-start: 0.5rem;
      border: none;
      border-radius: var(--border-radius);

      > .user-image {
        width: 90px;
        height: 90px;
        display: flex;
        border-radius: 50%;
        margin-bottom: 0;
        overflow: hidden;

        > img {
          width: inherit;
          padding: 3px;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          object-position: center;
          border-radius: inherit;
          border: 3px solid var(--secondary-color);
        }
      }

      > .user-details {
        width: calc(100% - 140px);
        height: 100%;
        display: flex;
        align-self: flex-start;
        flex-direction: column;
        text-transform: capitalize;
        margin-block-start: 0.5rem;
        color: var(--text-color);

        > :nth-child(2) {
          font-weight: bold;
          opacity: 0.5;
        }
      }
    `};

  ${(props) =>
    props.Item &&
    css`
      text-transform: capitalize;

      > a {
        width: calc(100% - 40px);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 00.5rem;
        text-decoration: none;
        color: var(--text-color);

        > :first-child {
          width: 30px;
          height: 100%;
          display: grid;
          place-items: center;
          user-select: none;
          pointer-events: none;
          font-size: 1.2rem;
          color: var(--secondary-color);

          > :first-child {
            line-height: 0.5;
          }
        }
        > :nth-child(2) {
          margin: 0;
          font-weight: bold;
          opacity: 0.7;
        }
      }
      > .icon {
        width: 40px;
        text-align: center;
        user-select: none;
        pointer-events: none;
        font-size: 1.6rem;
        opacity: 0.9;
        color: var(--secondary-color);
      }
    `}

  ${(props) =>
    props.Togglers &&
    css`
      .toggler-btn {
        width: 100%;
        display: flex;
        > input {
          background-color: var(--primary-color);
          border-color: var(--primary-color);
          &:checked {
            background-color: var(--secondary-color);
            border-color: var(--secondary-color);
          }
        }
        > label {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-color);
          > svg {
            user-select: none;
            pointer-events: none;
            font-size: 1.6rem;
            opacity: 0.9;
            color: var(--secondary-color);
          }
          > p {
            margin: 0;
            font-weight: bold;
            opacity: 0.7;
            text-transform: capitalize;
          }
        }
      }
    `}
`;

function AccontItem(props) {
  return <StyledAccontItem {...props}>{props.children}</StyledAccontItem>;
}

export default AccontItem;
