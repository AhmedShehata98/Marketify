import React from "react";
import styled from "styled-components";

const AdvertisementWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 270px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: var(--border-radius);
  background-image: url("https://img.freepik.com/free-vector/best-deal-65-percent-off-discount-offer-banner_157027-1248.jpg?w=740&t=st=1662629290~exp=1662629890~hmac=97640c5707bdc6642ee8044d303f843582fd8a4aa0e9b6864e7a3c174e30c637");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

function Advertisement() {
  return <AdvertisementWrapper></AdvertisementWrapper>;
}

export default Advertisement;
