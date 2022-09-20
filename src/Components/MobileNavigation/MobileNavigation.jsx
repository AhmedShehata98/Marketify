import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

// utilities
import { RoutesList } from "../../Routes/RoutesList";
import { dynamicColor } from "../../Utillites/MarketifyMethods";

//3rd party libraries
import { nanoid } from "@reduxjs/toolkit";

//icons
import { IoCartSharp, IoHome } from "react-icons/io5";
import { HiTemplate } from "react-icons/hi";
import { RiUserSettingsLine } from "react-icons/ri";
import { breakpoints } from "../../StyledComponentsVariables/breakPoints";

const MobileNavigationWrapper = styled.nav`
  position: fixed;
  z-index: 60;
  bottom: 0;
  width: 100%;
  height: 57px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--secondary-color-300);
  border-top: 2px solid var(--secondary-color);
  &.is-register {
    display: none;
  }

  > :last-child {
    position: relative;

    /* Cart items count */
    > .count {
      position: absolute;
      top: 5px;
      left: 5px;
      width: 18px;
      height: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ee5007;
      border-radius: 50%;
      color: #fff;
      font-size: 0.7rem;
    }
  }

  @media (${breakpoints.minTabletL}) {
    display: none;
  }
`;

const NavigationTabs = styled(NavLink)`
  position: relative;
  width: 55px;
  height: 55px;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
  text-decoration: none;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 50%;
    height: 0;
    width: 0;
    transform: translateX(-50%);
    background-color: transparent;
    border-radius: 45px;
    transition: background-color 0.3s ease-out, color 0.3s ease-out,
      width 0.3s ease-out;
  }

  &.active,
  &:hover {
    width: 40px;
    height: 40px;

    border-color: 50%;

    > :first-child {
      color: ${dynamicColor("--secondary-color")};
    }
    ::after {
      width: 100%;
      height: 100%;
      background-color: var(--secondary-color);
    }

    > :nth-child(2) {
      bottom: -100px;
    }
  }

  > :first-child {
    color: ${dynamicColor("--secondary-color-200")};
    line-height: 0.5;
    font-size: 1.5rem;
    > :first-child {
      color: inherit;
      font-size: inherit;
      user-select: none !important;
      pointer-events: none !important;
    }
  }
  > :nth-child(2) {
    position: absolute;
    bottom: -3px;
    font-size: 0.5rem;
    font-weight: bold;
    color: ${dynamicColor("--secondary-color-200")};
    line-height: 1.5rem;
  }
`;

function MobileNavigation(props) {
  const { pathname } = useLocation();

  return (
    <MobileNavigationWrapper
      className={
        pathname.includes("/signup") || pathname.includes("/login")
          ? "is-register"
          : null
      }
      {...props}
    >
      <NavigationTabs key={nanoid(8)} to={RoutesList.app}>
        <span>
          <i className="fi fi-rr-home lh-1"></i>
        </span>
        <span>home</span>
      </NavigationTabs>
      <NavigationTabs key={nanoid(8)} to={RoutesList.productsList}>
        <span>
          <i className="fi fi-rr-boxes lh-1"></i>
        </span>
        <span>products</span>
      </NavigationTabs>
      <NavigationTabs key={nanoid(8)} to={RoutesList.categories.list}>
        <span>
          <i className="fi fi-rr-layout-fluid lh-1"></i>
        </span>
        <span>category</span>
      </NavigationTabs>
      <NavigationTabs key={nanoid(8)} to={RoutesList.profile.profile}>
        <span>
          <i className="fi fi-rr-portrait lh-1"></i>
        </span>
        <span>account</span>
      </NavigationTabs>
    </MobileNavigationWrapper>
  );
}

export default MobileNavigation;
