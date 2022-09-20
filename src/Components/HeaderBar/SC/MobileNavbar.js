import React, { createRef, useEffect, useRef } from "react";
import styled from "styled-components";
import { breakpoints } from "../../../StyledComponentsVariables/breakPoints";

const MobileNavbarWrapper = styled.div`
  width: 100%;
  position: absolute;
  z-index: 5;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--primary-color);
  border-block: 1px solid var(--border-color);
  transition: transform 0.3s ease-in-out;
  transform: translateX(-150%);

  @media (${breakpoints.minPCL}) {
    display: none;
  }

  &.show-navbar {
    transform: translateX(0%);
    transition: transform 0.3s ease-in-out;
  }
`;

const MobileNavbar = (props) => {
  useEffect(() => {
    if (props.showMobileNavbar === true) {
      document.body.style.height = "100vh";
      document.body.style.width = "100%";
      document.body.style.position = "fixed";

      return () => {
        document.body.style.height = "initial";
        document.body.style.width = "initial";
        document.body.style.position = "static";
      };
    }
  }, [props.showMobileNavbar]);

  return (
    <MobileNavbarWrapper
      className={
        props.showMobileNavbar === true
          ? "show-navbar mobileNavbar"
          : "mobileNavbar"
      }
    >
      {props.children}
    </MobileNavbarWrapper>
  );
};

export default MobileNavbar;
