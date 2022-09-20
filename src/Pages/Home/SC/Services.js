import React from "react";
import styled from "styled-components";
import { FaCar } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { MdPhoneCallback } from "react-icons/md";
import { breakpoints } from "../../../StyledComponentsVariables/breakPoints";
import { nanoid } from "nanoid";

const StyledAdsBoxesWrapper = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;

  @media (${breakpoints.maxTabletL}) {
    flex-wrap: wrap;
    gap: 1em;
  }
  @media (${breakpoints.maxMobile}) {
    justify-content: center;
  }
`;
const Service = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-basis: 33%;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: var(--border-radius);
  background-color: var(--third-color);

  @media (${breakpoints.maxTabletL}) {
    flex-basis: 32%;
  }
  /* @media (${breakpoints.maxabletS}) {
    width: 48%;
  }*/

  @media (${breakpoints.maxMobile}) {
    flex-basis: 95%;
    align-items: center;
  }
`;

const ServIcon = styled.span`
  width: 55px;
  display: flex;
  align-items: center;
  justify-content: center;

  > :first-child {
    font-size: 1.5rem;
    line-height: 0.5rem;
    color: var(--secondary-color);
  }
`;
const ContentBox = styled.span`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  color: var(--text-color);

  > :first-child {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0;
  }
  > :nth-child(2) {
    font-size: 0.7rem;
    opacity: 0.8;
    margin-bottom: 0;
  }
`;

function Services() {
  return (
    <StyledAdsBoxesWrapper>
      <Service className="shadow-sm" key={nanoid(4)}>
        <ServIcon>
          <i className="fi fi-rr-car-side"></i>
        </ServIcon>
        <ContentBox>
          <p>FREE SHIPPING & RETURN</p>
          <p>Free shipping on all orders over 129 L.E.</p>
        </ContentBox>
      </Service>
      <Service className="shadow-sm" key={nanoid(4)}>
        <ServIcon>
          <i class="fi fi-rr-usd-circle"></i>
        </ServIcon>
        <ContentBox>
          <p>MONEY BACK GUARANTEE</p>
          <p>100% money back guarantee.</p>
        </ContentBox>
      </Service>
      <Service className="shadow-sm" key={nanoid(4)}>
        <ServIcon>
          <i class="fi fi-rr-headset"></i>
        </ServIcon>
        <ContentBox>
          <p>ONLINE SUPPORT 24/7</p>
          <p>online client support always ready for you.</p>
        </ContentBox>
      </Service>
    </StyledAdsBoxesWrapper>
  );
}

export default Services;
