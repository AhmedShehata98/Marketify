import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RoutesList } from "../../../Routes/RoutesList";

const TopCategoresWrapper = styled.div`
  position: relative;
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const TopCategoresList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(152px, 1fr));
  align-items: flex-start;
  list-style: none;
  justify-content: flex-start;
  gap: 0.5rem;
  padding: 0;
  margin: 0;
`;

function TopCategores(props) {
  return (
    <TopCategoresWrapper>
      <h5 className="text-muted text-uppercase">{props.title}</h5>

      <TopCategoresList>{props.children}</TopCategoresList>
    </TopCategoresWrapper>
  );
}

export default TopCategores;
