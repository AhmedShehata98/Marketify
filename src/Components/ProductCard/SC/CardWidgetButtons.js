import React, { useState } from "react";
import {
  AiOutlineHeart,
  AiTwotoneHeart,
  AiFillEye,
  AiOutlineEye,
} from "react-icons/ai";
import { IoCartOutline, IoCart } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SET_PRODUCT_PREVIEW_DATA } from "../../../Redux/Slice/AppSlice";
import { RoutesList } from "../../../Routes/RoutesList";

const StyledCardWidgetButtons = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  background-color: #33333386;
  //
  opacity: 0;
  user-select: none;
  pointer-events: none;
  transition: opacity 0.3s ease-out;
`;

const StyledCardButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  border: none;
  background-color: var(--third-color);
  color: var(--text-color);

  &:hover {
    background-color: var(--secondary-color);
    color: var(--text-color-secondary);
  }
`;

function CardWidgetButtons(props) {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const [addedWhitelist, setAddedWhitelist] = useState(false);
  const [addedCart, setAddedCart] = useState(false);

  const handleAddWhitelist = () => {
    setAddedWhitelist(!addedWhitelist);
  };

  const handleAddToCart = () => {
    setAddedCart(!addedCart);
  };
  const handleShowProductPreview = () => {
    if (props.Loading === false) {
      dispatch(SET_PRODUCT_PREVIEW_DATA(props.productsData));

      if (props.fixedPath) {
        Navigate(
          `${RoutesList.productsList}/${RoutesList.categories.productView}`
        );
      } else {
        Navigate(RoutesList.categories.productView);
      }
    }
  };
  return (
    <StyledCardWidgetButtons className="widget-btn" {...props}>
      <StyledCardButton className="shadow-lg" onClick={handleAddWhitelist}>
        {addedWhitelist === false ? (
          <AiOutlineHeart />
        ) : (
          <AiTwotoneHeart
            className={addedWhitelist === true && "whitelist-fill"}
          />
        )}
      </StyledCardButton>
      <StyledCardButton className="shadow-lg" onClick={handleAddToCart}>
        {addedCart === true ? <IoCart /> : <IoCartOutline />}
      </StyledCardButton>
      <StyledCardButton
        className="shadow-lg"
        onClick={handleShowProductPreview}
      >
        {addedCart === true ? <AiFillEye /> : <AiOutlineEye />}
      </StyledCardButton>
    </StyledCardWidgetButtons>
  );
}

export default CardWidgetButtons;
