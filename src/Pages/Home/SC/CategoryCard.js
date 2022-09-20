import React from "react";
import styled, { keyframes } from "styled-components";
import { IoMdArrowForward } from "react-icons/io";

const debaunce = keyframes`
    0%{
        transform: translateX(-10px);
    }
    50%{
        transform: translateX(5px);
    }
    100%{
        transform: translateX(0);
    }
`;

const CategoryCardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
  padding-block: 0.3rem;
  padding-inline: 0.7rem;
  border-radius: var(--border-radius);
  /* background-color: var(--five-color); */
  /* border: 1px solid var(--border-color); */
  overflow: hidden;

  &:hover {
    > .content-container {
      .icon {
        svg {
          animation: ${debaunce} alternate 0.5s ease-in-out;
        }
      }
    }
  }
`;
const CategoryImageContainer = styled.figure`
  position: relative;
  width: 55px;
  height: 55px;
  border-radius: var(--border-radius);
  margin-bottom: unset;

  > img {
    width: 55px;
    height: 55px;
    object-fit: cover;
    object-position: center;
    border-radius: var(--border-radius);
  }
`;
const CategoryContent = styled.div`
  width: calc(100% - 55px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--secondary-color);

  > :first-child {
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-color) !important;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: capitalize;
    overflow: hidden;
    margin-bottom: unset;
  }
  > :nth-child(2) {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: capitalize;
    overflow: hidden;
    font-size: 0.8rem;
    font-weight: 400;
    opacity: 0.7;
    margin-bottom: unset;
  }
`;
const GoIcon = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > svg {
    display: inline-block;
    font-size: 1.2rem;
    color: var(--accent-primary-color);
  }
`;

function CategoryCard(props) {
  return (
    <CategoryCardWrapper className="shadow">
      <CategoryImageContainer>
        <img
          src={props.categoryImage}
          alt="category-card-image"
          loading="smart"
        />
      </CategoryImageContainer>
      <CategoryContent className="content-container">
        <h6>{props.Title}</h6>
        <p>{props.description}</p>
      </CategoryContent>
      <GoIcon className="icon">
        <IoMdArrowForward />
      </GoIcon>
    </CategoryCardWrapper>
  );
}

export default CategoryCard;
