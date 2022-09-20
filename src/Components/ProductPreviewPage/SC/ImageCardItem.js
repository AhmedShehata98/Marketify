import React from "react";
import styled from "styled-components";

const ImageCard = styled.li`
  width: 95px;
  height: 95px;
  position: relative;
  display: inline-block;
  list-style: none;
  border-radius: var(--border-radius);
  transition: transform 0.3s ease;
  background-color: var(--primary-color);
  overflow: hidden;

  &.active,
  &:hover {
    > img {
      border: 3px solid var(--secondary-color);
    }
    transform: scale(1.05);
  }

  > img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
  }
`;

function ImageCardItem(props) {
  return <ImageCard {...props}>{props.children}</ImageCard>;
}
export default ImageCardItem;
