import React from "react";
import styled from "styled-components";
import CardWidgetButtons from "./CardWidgetButtons";

const StyledCardMedia = styled.figure`
  position: relative;
  width: 100%;
  max-width: 100%;
  min-height: 180px;
  background-color: inherit;
  margin-bottom: 0;
  overflow: hidden;
  background-color: var(--low-seturation-secondary-color);

  &.list-view {
    width: 180px;
    max-width: 180px;
  }

  > img {
    max-width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: center;
  }
`;

function CardMedia(props) {
  return (
    <StyledCardMedia
      className={props.listview ? "list-view" : null}
      id="card-media"
    >
      {props.Loading === true && (
        <div className="col-12 w-100 h-100 placeholder placeholder-wave"></div>
      )}
      {props.Loading === false && (
        <img src={props.mediaUrl} alt="product-sumnail-img" />
      )}
      <CardWidgetButtons
        fixedPath={props.fixedPath}
        productsData={props.productsData}
        Loading={props.Loading}
      />
    </StyledCardMedia>
  );
}

export default CardMedia;
