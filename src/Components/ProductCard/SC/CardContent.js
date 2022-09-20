import React from "react";
import styled from "styled-components";
import CardFooter from "./CardFooter";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_PRODUCT_PREVIEW_DATA } from "../../../Redux/Slice/AppSlice";
import { RoutesList } from "../../../Routes/RoutesList";
import { breakpoints } from "../../../StyledComponentsVariables/breakPoints";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const StyledCardContent = styled.div`
  width: 100%;
  max-height: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-inline: 0.5rem;
  padding-block-end: 0.5rem;
  background-color: inherit;

  &.list-view {
    width: calc(100% - 190px);
    min-height: inherit !important;

    > p {
      text-align: start;
      font-weight: bold;
      font-size: 1rem;
    }
  }
`;

const ProductName = styled.p`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-transform: capitalize;
  margin-bottom: 0;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-color);
  text-align: center;
`;

const BrandName = styled(ProductName)`
  opacity: 0.7;
  margin-bottom: 0;
`;

const Rate = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 00.3rem;

  .stars {
    display: none;
  }
  &.no-rate {
    > :first-child {
      display: flex;
    }
  }
  &.one-stars {
    > :nth-child(2) {
      display: flex;
    }
  }
  &.two-stars {
    > :nth-child(3) {
      display: flex;
    }
  }
  &.three-stars {
    > :nth-child(4) {
      display: flex;
    }
  }
  &.four-stars {
    > :nth-child(5) {
      display: flex;
    }
  }
`;

function CardContent(props) {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleShowProjectPreview = () => {
    if (props.Loading === false) {
      dispatch(SET_PRODUCT_PREVIEW_DATA(props.productData));
      Navigate(RoutesList.categories.productView);
    }
  };

  const identifyRating = (rate) => {
    if (rate < 1.0 && rate < 2.0) {
      return "one-stars";
    } else if (rate >= 2.0 && rate < 3.0) {
      return "two-stars";
    } else if (rate >= 3.0 && rate < 4.0) {
      return "three-stars";
    } else if (rate >= 4.0 && rate < 5.0) {
      return "four-stars";
    } else if (rate >= 5.0) {
      return "five-stars";
    } else {
      return "no-rate";
    }
  };

  return (
    <StyledCardContent
      className={props.listview ? "list-view" : null}
      id="card-content"
    >
      {props.Loading === false && (
        <>
          {/* <BrandName>{props.brandName}</BrandName> */}
          <ProductName>{props.productName}</ProductName>
          {/* <Rate className={identifyRating(props.rate)}>
            <li className={"stars text-warning"}>
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </li>
            <li className={"stars text-warning"}>
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </li>
            <li className={"stars text-warning"}>
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </li>
            <li className={"stars text-warning"}>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </li>
            <li className={"stars text-warning"}>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </li>
            <li className={"stars text-warning"}>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </li>
          </Rate> */}
        </>
      )}

      {props.Loading && (
        <div className="col-4 placeholder placeholder-sm bg-secondary placeholder-glow mb-1"></div>
      )}
      {props.Loading && (
        <div className="col-8 placeholder placeholder-sm bg-secondary placeholder-glow mb-1"></div>
      )}
      {props.Loading && (
        <div className="col-3 placeholder placeholder-sm bg-secondary placeholder-glow mb-1"></div>
      )}
      <CardFooter
        pricing={props.pricing}
        discount={props.discount}
        Loading={props.Loading}
        listview={props.listview}
        discription={props.discription}
        productData={props.productData}
        insideCart={props.insideCart}
      />
    </StyledCardContent>
  );
}

export default CardContent;
