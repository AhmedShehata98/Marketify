import React from "react";
import styled from "styled-components";
import CustomizedButton from "../../Components/Buttons/CustomziedButton";

// images
import connection from "../../assets/images/connection.gif";
import noProductsImg from "../../assets/images/no-products.svg";
import fetchErrorImg from "../../assets/images/fetchError.png";

const ErrorWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--primary-color);
  margin-block-start: 2rem;
`;

const ErrorMessage = styled.span`
  width: max-content;
  padding: 0.3rem 0.7rem;
  text-transform: capitalize;
  color: var(--text-color);
  margin-block: 1rem;
  opacity: 0.6;
`;

const ImageWrapper = styled.figure`
  position: relative;
  width: 280px;
  height: 280px;
  display: grid;
  place-items: center;
  background-color: var(--third-color);
  border-radius: 50%;
  margin-bottom: 1rem;

  > img {
    max-width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

function ErrorModule(props) {
  return (
    <ErrorWrapper>
      <ImageWrapper>
        {props.connectionError && (
          <img src={connection} alt="connection-error" />
        )}
        {props.noProducts && <img src={noProductsImg} alt="no-data" />}
        {props.fetchError && <img src={fetchErrorImg} alt="fetch-error" />}
      </ImageWrapper>
      <ErrorMessage>{props.errorMessage}</ErrorMessage>
      {props.connectionError && (
        <div className="col-12 col-lg-6">
          <CustomizedButton base>Try Again</CustomizedButton>
        </div>
      )}
    </ErrorWrapper>
  );
}

export default ErrorModule;
