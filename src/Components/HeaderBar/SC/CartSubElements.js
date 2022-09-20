import styled from "styled-components";
import { MdOutlineClear } from "react-icons/md";

const ItemPciture = styled.figure`
  width: 50px;
  height: 50px;
  overflow: hidden;
  margin-block: auto;

  > img {
    max-width: 50px;
    object-fit: cover;
  }
`;

const ClearBTN = styled.button`
  position: absolute;
  z-index: 5;
  top: -5px;
  right: -5px;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid var(--border-color);
  background-color: var(--accent-primary-color);
  border-radius: 50%;
  padding: 0;

  &:hover {
    :first-child {
      background-color: #f37878;
    }
  }

  > svg {
    font-size: 1.5rem;
    pointer-events: none;
    user-select: none;
    color: var(--text-color);
  }
`;

const ItemDetails = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-transform: capitalize;

  > :first-child {
    margin-bottom: 0.2rem;
    font-weight: bold;
  }
  > :nth-child(2) {
    font-weight: 500;
    font-size: 0.9rem;
  }
  > :nth-child(3) {
    font-weight: 400;
    font-size: 0.7rem;
  }
`;

const StyledCartItem = styled.li`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 0.3rem;
  padding: 0.5rem;

  &:hover {
    background-color: var(--third-color);
    border: 1px solid var(--border-color);
  }
`;
export function CartItem(props) {
  return (
    <StyledCartItem>
      <ClearBTN>
        <MdOutlineClear />
      </ClearBTN>
      <ItemDetails>
        <span>{props.ItemName}</span>
        <span>{props.Price} L.E</span>
        <span>{props.Quantity} items</span>
      </ItemDetails>
      <ItemPciture>
        <img src={props.Imgsrc} />
      </ItemPciture>
    </StyledCartItem>
  );
}
