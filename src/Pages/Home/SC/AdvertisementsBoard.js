import React from "react";
import styled from "styled-components";

// photos
const AdPicture_1 = require("../../../assets/images/AdvertisementsBoard/shop2_banner1.jpg");
const AdPicture_2 = require("../../../assets/images/AdvertisementsBoard/shop2_banner2.jpg");
const AdPicture_3 = require("../../../assets/images/AdvertisementsBoard/shop2_banner3.jpg");
const AdPicture_4 = require("../../../assets/images/AdvertisementsBoard/shop2_banner4.jpg");
const AdPicture_5 = require("../../../assets/images/AdvertisementsBoard/shop2_banner5.jpg");
const AdPicture_6 = require("../../../assets/images/AdvertisementsBoard/shop2_banner6.jpg");
const AdPicture_7 = require("../../../assets/images/AdvertisementsBoard/shop2_banner7.jpg");
const AdPicture_8 = require("../../../assets/images/AdvertisementsBoard/shop2_banner8.jpg");
const AdPicture_9 = require("../../../assets/images/AdvertisementsBoard/shop2_banner9.jpg");

const AdvertisementsBoardWrapper = styled.article`
  width: 100%;
  height: fit-content;
  padding: 0.5rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  gap: 00.5rem;
`;

const AdvertisementsBoardItems = styled.span`
  position: relative;
  display: inline-block;

  &.portrait {
    > img {
      aspect-ratio: 9 / 16;
    }
  }
  &.landscape {
    > img {
      aspect-ratio: 16 / 9;
    }
  }
  &.box {
    > img {
      aspect-ratio: 4 / 3;
    }
  }

  > img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

function AdvertisementsBoard() {
  return (
    <AdvertisementsBoardWrapper>
      <AdvertisementsBoardItems className="box">
        <img src={AdPicture_1} alt="ad-picture" />
      </AdvertisementsBoardItems>
      <AdvertisementsBoardItems className="landscape">
        <img src={AdPicture_5} alt="ad-picture" />
      </AdvertisementsBoardItems>
      <AdvertisementsBoardItems className="portrait">
        <img src={AdPicture_6} alt="ad-picture" />
      </AdvertisementsBoardItems>
      <AdvertisementsBoardItems className="box">
        <img src={AdPicture_3} alt="ad-picture" />
      </AdvertisementsBoardItems>
      <AdvertisementsBoardItems className="box">
        <img src={AdPicture_7} alt="ad-picture" />
      </AdvertisementsBoardItems>
      <AdvertisementsBoardItems className="portrait">
        <img src={AdPicture_4} alt="ad-picture" />
      </AdvertisementsBoardItems>
      <AdvertisementsBoardItems className="landscape">
        <img src={AdPicture_2} alt="ad-picture" />
      </AdvertisementsBoardItems>
      <AdvertisementsBoardItems className="portrait">
        <img src={AdPicture_6} alt="ad-picture" />
      </AdvertisementsBoardItems>
      <AdvertisementsBoardItems className="landscape">
        <img src={AdPicture_8} alt="ad-picture" />
      </AdvertisementsBoardItems>
      <AdvertisementsBoardItems className="landscape">
        <img src={AdPicture_9} alt="ad-picture" />
      </AdvertisementsBoardItems>
    </AdvertisementsBoardWrapper>
  );
}

export default AdvertisementsBoard;
