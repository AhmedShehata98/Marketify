import React from "react";
import styled, { css } from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";

const StyledButton = styled.button`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: var(--accent-primary-color);
  border: none;
  outline: none;
  color: var(--text-color-secondary);
  text-transform: uppercase;
  font-weight: bold;

  > :first-child {
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-height: 0.5;
  }
  > :nth-child(2) {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: lowercase;
    font-weight: 500;
  }

  &:hover {
    background-color: transparent;
    border: 2px solid var(--accent-primary-color);
    color: var(--accent-primary-color);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    user-select: none;
  }

  ${(props) =>
    props.outline &&
    css`
      background-color: transparent;
      border: 1px solid var(--fourth-color);
      color: var(--text-color);
    `};

  ${(props) => props.Loading && "background-color : #E2DCC8"};
  ${(props) => props.Loading && "color : #000"};
  ${(props) => props.Error && "background-color : #630606"};
  ${(props) => props.Error && "color : #FF6B6B"};
  ${(props) => props.Success && "background-color : #184D47"};
  ${(props) => props.Success && "color : #16C79A"};
`;

function FormButton(props) {
  return (
    <StyledButton {...props}>
      {props.Loading !== true &&
        props.Error !== true &&
        props.Success !== true &&
        props.children}
      {props.Loading === true && (
        <>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
          ></span>
          <small>wait a moment ..</small>
        </>
      )}
      {props.Loading === false && props.Error === true && (
        <>
          <span>
            <i className="fi fi-rr-cross-circle "></i>
          </span>
          <small> {props.message}</small>
        </>
      )}
      {props.Loading === false && props.Success === true && (
        <>
          <span>
            <i className="fi fi-rr-badge-check "></i>
          </span>
          <small>done {props.message}</small>
        </>
      )}
    </StyledButton>
  );
}

export default FormButton;
