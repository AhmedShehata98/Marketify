import React from "react";
import styled from "styled-components";

// icons
import { FaFilter } from "react-icons/fa";

const FloatingMenuButtonWrapper = styled.div`
  width: 100%;
  height: 55px;
  position: fixed;
  z-index: 7;
  bottom: 55px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 0.5rem;
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const FloatingButton = styled.button`
  position: relative;
  z-index: 7;
  width: max-content;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 00.5rem;
  border: 1px solid var(--border-color);
  background-color: var(--secondary-color);
  padding: 0.3rem 1rem;
  border-radius: 45px;
  color: var(--text-color-secondary);
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  transition: transform 0.2s linear;

  &:focus {
    transform: translateY(-5px);
  }
`;

function FloatingMenuButton(props) {
  return (
    <FloatingMenuButtonWrapper>
      <FloatingButton className="shadow-lg" type="button" {...props}>
        <FaFilter />
        {props.Label}
      </FloatingButton>
    </FloatingMenuButtonWrapper>
  );
}

export default FloatingMenuButton;
