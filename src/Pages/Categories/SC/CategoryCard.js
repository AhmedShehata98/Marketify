import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCategoryCard = styled.li`
  display: flex;
  flex-basis: 130px;
  max-width: 130px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: var(--third-color);
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease-in-out;

  > a {
    text-decoration: none;
    color: var(--text-color);
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 1px 2px 0.5rem #dee2e6;
    background-color: var(--secondary-color);

    > a {
      > * {
        >: first-child {
          color: var(--text-color-secondary);
          opacity: 1;
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-basis: 250px;
    max-width: 185px;
    padding: 1rem;
  }
`;

const CardIcons = styled.span`
  width: 100%;
  display: grid;
  place-items: center;

  > svg {
    color: var(--text-color);
    font-size: 2rem;
    opacity: 0.6;
  }
`;

const CardTitle = styled.span`
  display: inline-block;
  width: 100%;

  > :first-child {
    font-size: 0.8rem;
    font-weight: bold;
    color: var(--text-color);
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    text-transform: uppercase;
  }
`;

function CategoryCard(props) {
  return (
    <StyledCategoryCard className="shadow-sm">
      <Link to={props.UrlPath || "#"}>
        <CardIcons>{props.Icon}</CardIcons>
        <CardTitle>
          <p>{props.Title}</p>
        </CardTitle>
      </Link>
    </StyledCategoryCard>
  );
}

export default CategoryCard;
