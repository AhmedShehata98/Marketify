import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RoutesList } from "../../../Routes/RoutesList";
import { dynamicColor } from "../../../Utillites/MarketifyMethods";

const OrderSummaryWrapper = styled.form`
  position: sticky;
  top: 75px;
  width: 100%;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
  padding: 0.7rem;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  background-color: var(--primary-color);
`;

const CouponInputBox = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  overflow: hidden;

  > input {
    width: calc(100% - 65px);
    height: 100%;
    border: 1px solid var(--primary-color-200);
    background-color: var(--primary-color-300);
    padding: 0.5rem 1rem;
    color: ${dynamicColor("--primary-color-300")};
    transition: border-color 0.3s ease-out;
    &:focus {
      border-color: var(--primary-color-600);
      outline: none;
    }
  }
  > button {
    width: 60px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: var(--secondary-color-700);
    color: ${dynamicColor("--secondary-color-700")};
    transition: background-color 0.3s ease-out;

    &:focus {
      background-color: var(--secondary-color);
    }
  }
`;

const Bills = styled.div`
  position: relative;
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;

  &::before {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 50%;
    translate: -50% 0;
    background-color: var(--primary-color-600);
    width: 90%;
    height: 1px;
  }

  > * {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > p {
      margin-bottom: 0;
      font-weight: bold;
      filter: contrast(50%);
    }
  }
`;

const Total = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;

  > * {
    margin-bottom: 0;
    display: flex;
    align-items: center;
    gap: 00.5rem;
    > small {
      font-size: 0.8rem;
      filter: contrast(30%);
    }
    > p {
      margin-bottom: 0;
    }
  }
`;
const CheckoutBTN = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  background-color: var(--accent-secondary-color);
  margin-top: 1.5rem;
  border-radius: var(--border-radius);
  color: ${dynamicColor("--accent-secondary-color")};
  font-weight: bold;

  &:hover,
  &:focus {
    filter: contrast(80%);
  }
`;

function OrderSummary(props) {
  const [formData, setFormData] = useState({
    coupon: "",
  });
  const navigate = useNavigate();
  const handleChangeCoupon = useCallback((e) => {
    const value = e.target.value;
    setFormData((fd) => (fd = value));
  });

  const handleSendCoupon = useCallback((e) => {
    const value = e.target.value;
  });

  return (
    <OrderSummaryWrapper>
      <h5 className="text-capitalize text-muted mt-3">order summary</h5>
      <CouponInputBox>
        <input
          type={"text"}
          placeholder="coupon code .."
          value={formData.coupon}
          onChange={handleChangeCoupon}
        />
        <button type="button" onClick={handleSendCoupon}>
          apply
        </button>
      </CouponInputBox>
      <Bills>
        <div>
          <p>Subtotal</p>
          <b>{props.$subtotal + " " + "L.E"}</b>
        </div>
        <div>
          <p>deilvery</p>
          <b>{props.$deilvery + " " + "L.E"}</b>
        </div>
      </Bills>
      <Total>
        <h5>
          Total <small>(Inclusive of VAT)</small>
        </h5>
        <h4>
          {props.$total}
          <p>L.E</p>
        </h4>
      </Total>
      <CheckoutBTN
        type="button"
        onClick={(e) => {
          e.preventDefault();
          if (props.$isLoggedin === true) {
            navigate(`${RoutesList.checkout}`);
          } else {
            navigate(`/${RoutesList.login}`);
          }
        }}
      >
        Checkout
      </CheckoutBTN>
    </OrderSummaryWrapper>
  );
}

export default OrderSummary;
