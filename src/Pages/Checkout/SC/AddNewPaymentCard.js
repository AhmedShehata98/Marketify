import React, { useCallback } from "react";
import styled from "styled-components";
import Title from "../../../Components/Titles/Title";
import { dynamicColor } from "../../../Utillites/MarketifyMethods";

const AddNewCardForm = styled.form`
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100%;
  padding: 1rem;
  display: inline-block;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > .date-cvv {
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: flex-start;
  }
`;

const StyledInput = styled.input`
  position: absolute;
  left: 0;
  width: 100%;
  height: max-content;
  padding: 0.5rem;
  border: 2px solid var(--primary-color-600);
  border-radius: var(--border-radius);
  background-color: transparent;
  outline: unset;
  transition: border 0.5s ease-out, background-color 0.3s ease-in-out;

  &:focus {
    border: 2px solid var(--secondary-color-400);
  }
  &:focus ~ span {
    color: var(--secondary-color);
  }
`;
const InputBox = styled.div`
  position: relative;
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  > span {
    position: absolute;
    left: 13px;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: capitalize;
    padding: 2px 6px;
    background-color: var(--primary-color);
    color: ${dynamicColor("--secondary-color-100")};
    translate: 0 -22px;
    transition: color 0.3s ease-in-out;
  }
`;

const ActionsBox = styled.span`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;

  > .save-card {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    margin-block-start: 1.5rem;
    margin-block-end: 0.5rem;

    > label {
      font-weight: 500;
      color: ${dynamicColor("--secondary-color-100")};
      cursor: pointer;
      user-select: none;
    }
  }
  button {
    width: 100%;
    padding: 0.5rem;
    border: none;
    background-color: var(--secondary-color-700);
    color: ${dynamicColor("--secondary-color-700")};
    font-weight: 600;
    text-transform: capitalize;
    transition: background-color 0.3s ease;
    border-radius: var(--border-radius);

    &:hover {
      background-color: var(--secondary-color-500);
      color: #fff;
    }
  }
`;

function AddNewPaymentCard(props) {
  const handleClose = useCallback(() => {
    props.$setshowModal((open) => (open = false));
    props.$setShowAddCard((open) => (open = false));
  }, []);

  const handleAddCard = useCallback((e) => {
    e.preventDefault();
  }, []);
  return (
    <AddNewCardForm onSubmit={handleAddCard}>
      <Title titleTypography="add new card">
        <button
          className="btn btn-close"
          type="button"
          role={"button"}
          onClick={handleClose}
        />
      </Title>
      <InputBox>
        <StyledInput
          type={"number"}
          maxLength="16"
          max={"16"}
          placeholder="0000 0000 0000 0000"
        />
        <span className="label">card number</span>
      </InputBox>
      <div className="date-cvv">
        <InputBox>
          <StyledInput type={"month"} placeholder="MM /YY" />
          <span className="label">expiry date</span>
        </InputBox>
        <InputBox>
          <StyledInput
            type={"number"}
            maxLength="3"
            max={"3"}
            placeholder="000"
          />
          <span className="label">cvc/cvv</span>
        </InputBox>
      </div>
      <InputBox>
        <StyledInput
          type={"text"}
          placeholder="enter caedholder's full name .."
        />
        <span className="label">card name</span>
      </InputBox>
      <ActionsBox>
        <div className="save-card">
          <input type={"checkbox"} id="save-card" />
          <label htmlFor="save-card">save this card</label>
        </div>
        <button type="submit">confirm add card</button>
      </ActionsBox>
    </AddNewCardForm>
  );
}

export default AddNewPaymentCard;
