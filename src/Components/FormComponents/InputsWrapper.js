import React from "react";
import styled from "styled-components";

const StyledInputsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  ${(props) => props.Direction === "col" && "flex-direction: column"};
  ${(props) => props.Direction === "row" && "flex-direction:row"};
  ${(props) => props.ItemsStart && "align-items: flex-start"};
  ${(props) => props.ItemsEnd && "align-items: flex-end"};
  ${(props) => props.ItemsCenter && "align-items: center"};
  ${(props) => props.ContentCenter && "justify-content: center"};
  ${(props) => props.ContentStart && "justify-content: flex-start"};
  ${(props) => props.ContenEnd && "justify-content:flex-end"};
  ${(props) => props.Wrap && "flex-wrap: wrap"};
  gap: 0.2rem;
  background-color: var(--primary-color);
  ${(props) => props.Background && `background : ${props.Background}`};
  margin-bottom: 0.5rem;
`;

function InputsWrapper(props) {
  return <StyledInputsWrapper {...props}>{props.children}</StyledInputsWrapper>;
}

export default InputsWrapper;
