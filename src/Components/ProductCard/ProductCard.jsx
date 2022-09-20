import React, { forwardRef } from "react";
import CardContent from "./SC/CardContent";
import CardMedia from "./SC/CardMedia";
import cardWrapper from "./SC/cardWrapper.module.css";

const ProductCard = forwardRef((props, ref) => {
  const identifyVewMode = () => {
    if (props.listview === true) {
      return `${cardWrapper["card-wrapper"]} ${cardWrapper["list-view"]} `;
    }
    if (props.listview === false) {
      return `${cardWrapper["card-wrapper"]}`;
    }
    if (props.insideSwiper === true) {
      return `${cardWrapper["card-wrapper"]} ${cardWrapper["inside-swiper"]}`;
    }
  };

  return (
    <li className={`${identifyVewMode()} shadow`} ref={ref}>
      <CardMedia
        mediaUrl={props.mediaUrl}
        Loading={props.Loading}
        productsData={props.productsData}
        listview={props.listview}
        fixedPath={props.fixedPath}
      />
      <CardContent
        productName={props.productName}
        brandName={props.brandName}
        rate={props.rate}
        Loading={props.Loading}
        pricing={props.pricing}
        discount={props.discount}
        listview={props.listview}
        discription={props.discription}
        productData={props.productsData}
        insideCart={props.insideCart}
      />
    </li>
  );
});

export default React.memo(ProductCard);
