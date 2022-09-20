import React from "react";
import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { dynamicColor } from "../../Utillites/MarketifyMethods";

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

const StyledCategoresListItems = styled.li`
  height: max-content;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0.5rem;
  gap: 0.5rem;
  transition: box-shadow 0.3s ease-out, translate 0.6s ease-out;
  background-color: var(--primary-color-400);

  &:hover {
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
    translate: 0 -10px;
    > a {
      .icon {
        > :first-child {
          animation: ${debaunce} alternate 0.5s ease-in-out;
        }
      }
    }
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  width: calc(100% - 28px);
  height: 100%;
  display: flex;
  text-decoration: none;
  color: ${dynamicColor("--primary-color-400")};
  flex-direction: column;
  align-items: center;
  align-items: flex-start;
  gap: 0.5rem;

  &:hover {
    color: var(--text-color);
  }
`;

const CategoryImageContainer = styled.figure`
  position: relative;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  ${(props) =>
    props.background &&
    css`
      background-color: ${props.background};
    `};
  margin-bottom: unset;

  > :first-child {
    font-size: 2.5rem;
    line-height: 2rem;
    object-fit: cover;
    object-position: center;
    border-radius: var(--border-radius);
    ${(props) =>
      props.color &&
      css`
        color: ${props.color};
      `};
  }
`;
const CategoryContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  > :first-child {
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: capitalize;
    overflow: hidden;
    margin-bottom: unset;
    color: inherit;
  }
  > :nth-child(2) {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: capitalize;
    overflow: hidden;
    font-size: 0.8rem;
    font-weight: 400;
    margin-bottom: unset;
    color: inherit;
  }
`;
const GoIcon = styled.span`
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > :first-child {
    background-color: var(--five-color);
    line-height: 0.5rem;
    display: inline-block;
    font-size: 1.2rem;
    color: var(--accent-primary-color);
    border-radius: var(--border-radius);
    padding: 4px;
  }
`;

function CategoresListItems(props) {
  return (
    <StyledCategoresListItems className="shadow">
      <StyledLink to={props.path || "#"}>
        <CategoryImageContainer {...props}>
          <i className={props.categoryImage}></i>
        </CategoryImageContainer>
        <CategoryContent className="content-container">
          <h6>{props.Title}</h6>
          <p>{props.description}</p>
        </CategoryContent>
      </StyledLink>
      <GoIcon className="icon">
        <i className="fi fi-rr-arrow-small-right"></i>
      </GoIcon>
    </StyledCategoresListItems>
  );
}

export default CategoresListItems;
