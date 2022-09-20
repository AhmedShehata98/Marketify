import React, { useEffect } from "react";
import styled, { css } from "styled-components";

const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 10011;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--modal-color);
`;
const ModalWrapper = styled.div`
  width: 40vw;
  min-width: 40vw;
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  transition: translate 0.5s ease;
  translate: 0 -35px;
  ${(props) =>
    props.$show === true &&
    css`
      translate: 0 0;
    `}
`;

function ModalContainer(props) {
  useEffect(() => {
    document.body.style.position = "fixed";
    document.body.style.width = "100vw";

    return () => {
      document.body.style.position = "unset";
      document.body.style.width = "auto";
    };
  }, []);
  return (
    <ModalBackdrop {...props}>
      <ModalWrapper>{props.children}</ModalWrapper>
    </ModalBackdrop>
  );
}

export default ModalContainer;
