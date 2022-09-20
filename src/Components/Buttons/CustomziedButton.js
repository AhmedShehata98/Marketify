import React from "react";
import styled from "styled-components";

const BaseCustomziedButton = styled.button`
  width: 100%;
  height: 50px;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  ${(props) => props.Icon && "gap : 0.5rem"};
  text-align: center;
  text-transform: capitalize;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: var(--border-radius);
  background-color: var(--accent-secondary-color);
  transition: background-color 0.3s ease-out, color 0.3s ease-out,
    border 0.3s ease-out;
  color: var(--text-color-secondary);
  overflow: hidden;
  border: 1px solid var(--border-radius);

  &.prevent-actions {
    pointer-events: none;
  }

  &:hover {
    background-color: var(--third-color);
    color: var(--text-color);
    border: 1px solid var(--bs-border-color-translucent);
  }

  &:disabled {
    background-color: var(--primary-color-600);
    pointer-events: none;
    color: var(--text-color);
    cursor: no-drop;
  }
`;
const SmallCustomziedButton = styled(BaseCustomziedButton)`
  height: 28px;
`;

const MediumCustomziedButton = styled(SmallCustomziedButton)`
  height: 33px;
`;

const CustomziedButton = React.forwardRef((props, ref) => {
  function idintifyButtonType() {
    if (props.base) {
      return (
        <BaseCustomziedButton ref={ref} {...props}>
          {props.children}
        </BaseCustomziedButton>
      );
    }
    if (props.sm) {
      return (
        <SmallCustomziedButton ref={ref} {...props}>
          {props.children}
        </SmallCustomziedButton>
      );
    }
    if (props.md) {
      return (
        <MediumCustomziedButton ref={ref} {...props}>
          {props.children}
        </MediumCustomziedButton>
      );
    }
    return (
      <BaseCustomziedButton ref={ref} {...props}>
        {props.children}
      </BaseCustomziedButton>
    );
  }

  return idintifyButtonType();
});

export default CustomziedButton;
