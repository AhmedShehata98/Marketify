import React from "react";
import { BsCheckAll, BsDot } from "react-icons/bs";
import styled, { css } from "styled-components";

const StyledPasswordConditions = styled.ul`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-inline-start: 1rem;
  margin-block: 0.5rem;

  &.check-eight-numbers {
    > li:nth-child(2) {
      > svg:nth-child(1) {
        display: none;
      }
      > svg:nth-child(2) {
        display: inline-block;
      }
      > small {
        font-weight: normal;
        text-decoration: line-through;
        opacity: 0.7;
      }
    }
  }
  &.check-char-sizes {
    > li:nth-child(3) {
      > svg:nth-child(1) {
        display: none;
      }
      > svg:nth-child(2) {
        display: inline-block;
      }
      > small {
        font-weight: normal;
        text-decoration: line-through;
        opacity: 0.7;
      }
    }
  }
  &.check-numbers {
    > li:nth-child(4) {
      > svg:nth-child(1) {
        display: none;
      }
      > svg:nth-child(2) {
        display: inline-block;
      }
      > small {
        font-weight: normal;
        text-decoration: line-through;
        opacity: 0.7;
      }
    }
  }

  &.check-symbol {
    > li:last-child {
      > svg:nth-child(1) {
        display: none;
      }
      > svg:nth-child(2) {
        display: inline-block;
      }
      > small {
        font-weight: normal;
        text-decoration: line-through;
        opacity: 0.7;
      }
    }
  }
`;

const ConditionsItems = styled.li`
  width: 100%;
  display: inline-block;
  color: var(--text-color);
  line-height: 1.1;

  > svg:first-child {
  }
  > svg:nth-child(2) {
    display: none;
  }
  > small {
    font-weight: 700;
    font-size: 0.6rem;
  }
`;

function PasswordConditions(props) {
  //
  const handleClassName = () => {
    let classesList = [];
    if (props.numbersCount) {
      classesList.push("check-eight-numbers");
    }
    if (props.charSize) {
      classesList.push("check-char-sizes");
    }
    if (props.hasNumbers) {
      classesList.push("check-numbers");
    }
    if (props.hasSymbols) {
      classesList.push("check-symbol");
    }
    if (props.isEmpty) {
      classesList = [];
    }
    return classesList.join(" ");
  };

  return (
    <StyledPasswordConditions className={handleClassName()}>
      <h6>Password Hints :</h6>
      <ConditionsItems>
        <BsDot />
        <BsCheckAll />
        <small>It must be at least 8 letters</small>
      </ConditionsItems>
      <ConditionsItems>
        <BsDot />
        <BsCheckAll />
        <small>must be contains lowercase & uppercase letters</small>
      </ConditionsItems>
      <ConditionsItems>
        <BsDot />
        <BsCheckAll />
        <small>must be contains numbers</small>
      </ConditionsItems>
      <ConditionsItems>
        <BsDot />
        <BsCheckAll />
        <small>must be contains symbols</small>
      </ConditionsItems>
    </StyledPasswordConditions>
  );
}

export default PasswordConditions;
