import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { RoutesList } from "../../../Routes/RoutesList";
import { breakpoints } from "../../../StyledComponentsVariables/breakPoints";

const HeaderNavigatorWrapper = styled.aside`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--hover-secondary);
  border-radius: var(--border-radius);

  @media (${breakpoints.minTabletL}) {
    background-color: initial;
  }
`;
const HeaderNavigationList = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  height: inhert;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  margin: 1rem 0;
  border-radius: var(--border-radius);

  > li {
    width: 100%;
    height: inherit;
    display: inline-block;
    list-style: none;
    overflow: hidden;

    > a {
      width: 100%;
      position: relative;
      display: inline-block;
      text-decoration: none;
      color: var(--text-color);
      font-weight: 600;
      padding: 0.5rem 1rem;
      text-transform: capitalize;

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        transition: height 0.2s ease;
        background-color: var(--hover-primary);

        @media (${breakpoints.minTabletL}) {
          background-color: initial;
        }
      }

      &.active,
      &:hover {
        ::after {
          height: 100%;
        }

        background-color: var(--hover-primary);
        color: #fff;

        @media (${breakpoints.minTabletL}) {
          background-color: initial;
        }
      }
    }
  }
`;

function SideNavbar(props) {
  return (
    <HeaderNavigatorWrapper>
      <HeaderNavigationList>
        <li>
          <NavLink to={RoutesList.profile.personalInfo}>
            presonal informations
          </NavLink>
        </li>
      </HeaderNavigationList>
    </HeaderNavigatorWrapper>
  );
}

export default SideNavbar;
