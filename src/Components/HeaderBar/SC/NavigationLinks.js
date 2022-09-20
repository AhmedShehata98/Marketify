import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { RoutesList } from "../../../Routes/RoutesList";

// icons

import { breakpoints } from "../../../StyledComponentsVariables/breakPoints";
import StyledAnchor from "../../StyledAnchor/StyledAnchor";

const NavigationLinksWrapper = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-block-end: 1px solid var(--secondary-color);
  ${(props) => props.pathname.includes("/checkout") && "display:none"};

  > section {
    display: flex;
    align-items: center;

    > nav {
      > a:not(:last-child) {
        ::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
          width: 1px;
          height: 30%;
          background-color: var(--primary-color-600);
        }
      }
      > a {
        display: flex;
        align-items: center;
        text-align: center;
        font-weight: 700;
        line-height: 3rem;
        padding-inline: 0.5rem;
        height: 100%;
        min-width: 60px;

        &:hover,
        &.active {
          color: var(--secondary-color);
        }
      }
    }
  }

  &.stickyNavbar {
    @media (${breakpoints.minPCL}) {
      height: 55px;
      position: fixed;
      top: 0;
      background-color: var(--secondary-color);
      z-index: 5;

      > section {
        > nav {
          background-color: var(--secondary-color) !important;
          > a {
            color: var(--text-color-secondary);

            &:hover,
            &.active {
              @media (${breakpoints.minPCL}) {
                color: var(--accent-secondary-color);
              }
            }
          }
        }
      }
    }
  }

  @media (${breakpoints.maxPCL}) {
    display: none;
  }
`;
const StyledNavigationLinks = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  background-color: inherit;

  > a {
    position: relative;
    color: var(--text-color);
    text-decoration: none;

    > span:first-child {
      display: grid;
      place-items: center;
      font-weight: 500;
      text-transform: uppercase;
      font-size: 0.9rem;
      color: inherit;
      font-family: var(--prompt-sans-family);
    }

    @media (${breakpoints.minPCL}) {
      gap: 0.5rem;
    }
  }
`;

const NavigationLinks = (props) => {
  return (
    <NavigationLinksWrapper
      className={props.screenHeight >= 140 ? "stickyNavbar" : null}
      {...props}
    >
      <section className="container">
        <StyledNavigationLinks>
          <NavLink to={RoutesList.navigationBar.home}>
            <span>Home</span>
          </NavLink>
          <NavLink to={"/" + RoutesList.navigationBar.categories}>
            <span>Categories</span>
          </NavLink>
          <NavLink to={"/" + RoutesList.navigationBar.products}>
            <span>Products</span>
          </NavLink>
          <NavLink to={RoutesList.navigationBar.aboutUs}>
            <span>About us</span>
          </NavLink>
        </StyledNavigationLinks>
      </section>
    </NavigationLinksWrapper>
  );
};

export default NavigationLinks;
