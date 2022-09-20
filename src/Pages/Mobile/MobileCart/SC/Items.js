import React from "react";
import styled from "styled-components";

//icons
import { FiTrash2, FiHeart } from "react-icons/fi";

const StyledItems = styled.li`
  width: 100%;
  height: max-content;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0.5rem;

  background-color: var(--third-color);
  border: 1px solid var(--border-color);
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 0.5rem;
`;

const Image = styled.figure`
  width: 75px;
  aspect-ratio: 1 / 1;
  border-radius: var(--border-radius);
  margin-bottom: 0.5rem;

  > img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: var(--border-radius);
  }
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: var(--text-color);
  text-transform: capitalize;
  line-height: 1rem;
  opacity: 0.9;
`;
const Discounting = styled(Title)`
  text-decoration: line-through;
  opacity: 0.7;
  margin: 0;
  line-height: 1.9rem;
`;

const Price = styled(Title)`
  font-size: 1rem;
  font-weight: bolder;
  margin-top: 0;
  opacity: 1;
`;
const Footer = styled.span`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

function Items(props) {
  return (
    <StyledItems {...props}>
      <Title> {props.ProducTitle}</Title>
      <Content>
        <div>
          <Discounting>{props.DiscountAmount + "L.E"}</Discounting>
          <Price>{props.PriceAmount + "L.E"}</Price>
        </div>
        <Image>
          <img src={props.ProductImage} loading="auto" />
        </Image>
      </Content>
      <Footer>
        <div className="col-4">
          <button
            className="btn w-100 d-flex gap-2 align-items-center text-danger text-capitalize fw-bold"
            type="button"
          >
            <FiTrash2 />
            <small> delete</small>
          </button>
        </div>
        <div className="col-4">
          <button
            className="btn w-100 d-flex gap-2 align-items-center text-dark text-capitalize fw-bold"
            type="button"
          >
            <FiHeart />
            <small> whitlist</small>
          </button>
        </div>
      </Footer>
    </StyledItems>
  );
}

export default Items;
