import React, { useCallback } from "react";
import styled from "styled-components";
import { dynamicColor } from "../../../Utillites/MarketifyMethods";

const PaymentList = styled.ul`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: unset;
  margin: unset;
  list-style: none;

  li {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    padding: 0.3rem 0.5rem;
    margin-block-end: 0.5rem;
    border: 1px solid var(--secondary-color-100);
    background-color: var(--secondary-color-100);

    &:hover {
      border: 1px solid var(--secondary-color-300);
    }

    .inputs {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
      flex-basis: 50%;
      gap: 1rem;
      cursor: pointer;

      > label {
        font-weight: 600;
        text-transform: capitalize;
        color: ${dynamicColor("--secondary-color-100")};
        cursor: pointer;
        user-select: none;
      }
    }
    > .icons {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-basis: 50%;
      font-size: 1.5rem;
    }
    .add-card {
      width: 100%;
      padding: 0.5rem;

      button {
        width: 100%;
        padding: 0.5rem;
        border: none;
        background-color: var(--secondary-color-700);
        color: ${dynamicColor("--secondary-color-700")};
        font-weight: 600;
        transition: background-color 0.3s ease;
        text-transform: capitalize;

        &:hover {
          background-color: var(--secondary-color-500);
          color: #fff;
        }
      }
    }
  }
`;
const PaymentsOption = styled.input`
  width: max-content;
  height: max-content;
  display: flex;
`;

function PaymentMedthods(props) {
  const handleShowModal = useCallback(() => {
    props.$setshowModal((open) => (open = true));
    props.$setShowAddCard((open) => (open = true));
  }, []);

  return (
    <PaymentList>
      <li>
        <div className="inputs">
          <PaymentsOption
            type={"checkbox"}
            role="checkbox"
            id={"card-payment"}
            name={"card-payment"}
          />
          <label htmlFor="card-payment">debit / credit card</label>
        </div>
        <div className="icons">
          <img
            src="https://img.icons8.com/fluency/48/000000/mastercard.png"
            alt="mastercard"
          />

          <img
            src="https://img.icons8.com/color/48/000000/visa.png"
            alt="visa"
          />
        </div>
        <div className="add-card">
          <button type="button" onClick={handleShowModal}>
            add new card
          </button>
        </div>
      </li>
      <li>
        <div className="inputs">
          <PaymentsOption
            type={"checkbox"}
            role="checkbox"
            id={"cash-on-delivery"}
            name={"Cash-on-delivery"}
          />
          <label htmlFor="cash-on-delivery">Cash on delivery</label>
        </div>
        <div className="icons">
          <i className="fi fi-rr-money-bill-wave lh-1 text-success"></i>
        </div>
      </li>
    </PaymentList>
  );
}

export default PaymentMedthods;
