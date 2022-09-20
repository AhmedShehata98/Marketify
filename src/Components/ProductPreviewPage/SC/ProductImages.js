import React from "react";
import styled from "styled-components";

const ImagesPreviewWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ImagePreviewList = styled.ul`
  position: relative;
  width: 100%;
  height: 125px;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.5em;
  margin: 0;
  padding: 0;
  border-radius: var(--border-radius);
  background-color: var(--third-color);
`;

const FullImagePreview = styled.figure`
  width: 100%;
  height: calc(100% - 125px);
  margin: 0;
  border-radius: var(--border-radius);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }

  > img {
    width: 100%;
    height: 100%;
    max-height: calc(100% - 10px);
    object-fit: cover;
    object-position: center;
    border-radius: var(--border-radius);
  }
`;

function ProductImages(props) {
  return (
    <ImagesPreviewWrapper>
      <FullImagePreview>
        <img src={props.ImageUrl} alt="produc-subnail-image" />
      </FullImagePreview>
      <ImagePreviewList>{props.children}</ImagePreviewList>
    </ImagesPreviewWrapper>
  );
}

export default ProductImages;
