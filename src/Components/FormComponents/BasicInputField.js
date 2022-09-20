import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column !important;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 0.3rem;
  transition: width 0.3s ease-out;
`;

const InputFieldWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 35px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  transition: transform 0.3s ease-out;
  overflow: hidden;
`;

export const StyledInputField = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.2rem 1rem;
  border: 1px solid var(--primary-color-600);
  background-color: var(--primary-color-300);
  border-radius: var(--border-radius);
  color: var(--text-color);
  font-size: 1rem;
  transition: background-color 0.3s ease-out, color 0.3s ease-out,
    box-shadow 0.3s ease-out, width 0.3s ease-out;

  &.error {
    border: 2px solid #eb1d36;
    background-color: var(--primary-color);
    & + label {
      color: #e94560 !important;
    }
  }

  &:focus {
    outline: none;
    border: 1px solid var(--primary-color-800);
    background-color: var(--hover-color);
    box-shadow: 0 0 0.1rem var(--secondary-color);
    color: var(--text-color);
    ::placeholder {
      opacity: 0;
    }
  }
  &:not(:focus) .check-password {
    display: none;
  }
  &:focus + .check-password {
    display: flex !important;
  }
  &:hover {
    border: 1px solid var(--primary-color-800);
    background-color: var(--hover-color);
    color: var(--text-color);
  }
  &::placeholder {
    color: var(--primary-color-800);
    font-size: 0.8rem;
    font-weight: bold;
    transition: opacity 0.3s ease;
  }
  &:disabled {
    opacity: 0.7;
    user-select: none;
    pointer-events: none;
  }

  ${(props) => props.AlertIcon && "width : calc(100% - 30px)"};
`;
export const LabelText = styled.label`
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-color);
  text-transform: uppercase;
  user-select: none;
  pointer-events: none;
  transition: transform 0.3s ease-out;
`;

function BasicInputField(props) {
  return (
    <MainWrapper>
      <InputFieldWrapper>
        <LabelText>{props.$lable}</LabelText>
        <StyledInputField {...props} />
      </InputFieldWrapper>
    </MainWrapper>
  );
}

export default BasicInputField;
