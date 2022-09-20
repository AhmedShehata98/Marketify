import React, { useCallback, useMemo } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

//utilities
import { RoutesList } from "../../../Routes/RoutesList";

// icons
import { BiBookmarkHeart } from "react-icons/bi";
import { FaRegAddressCard } from "react-icons/fa";
import { GiMilkCarton } from "react-icons/gi";
import { MdManageAccounts, MdPayment } from "react-icons/md";

const ProfileSettingsListWrapper = styled.article`
  width: 250px;
  min-height: 70vh;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SettingsList = styled.ul`
  width: 100%;
  height: 100%;
  list-style-type: none;
  display: grid;
  gap: 0.3rem;
  grid-auto-flow: row;
  grid-auto-rows: max-content;
  background-color: var(--third-color);
  padding: 1rem 0.7rem;
  border-radius: var(--border-radius);
  margin-top: 1rem;

  > li {
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    padding: 0 0.7rem;
    border-radius: var(--border-radius);

    &.active {
      background-color: var(--secondary-color-200);

      > a {
        color: var(--secondary-color);
        font-weight: 700;
      }
    }
    &:hover {
      background-color: var(--secondary-color-200);

      > a {
        color: var(--secondary-color);
        font-weight: 700;
      }
    }

    > a {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1em;
      text-decoration: none;
      color: var(--text-color);

      > :first-child {
        // Icon
        height: 100%;
        display: grid;
        place-items: center;
        font-size: 1rem;
        color: inherit !important;

        > :first-child {
          color: inherit !important;
          line-height: 0.5;
        }
      }

      > :nth-child(2) {
        // p element
        margin: 0;
        line-height: 2.5rem;
        text-transform: capitalize;
        color: inherit !important;
      }
    }
  }
`;

function ProfileSettingsList() {
  const handleAddActive = useCallback((e) => {
    const unorderList = e.target.closest("ul").children;
    const listitem = e.target.closest("li");
    Array.from(unorderList).forEach((item) => item.classList.remove("active"));
    listitem.classList.add("active");
  });

  return (
    <ProfileSettingsListWrapper>
      <SettingsList>
        <li className="active" onClick={(e) => handleAddActive(e)}>
          <Link to={RoutesList.profile.personalInfo || "/"}>
            <span>
              <i className="fi fi-rr-id-badge"></i>
            </span>
            <p>account settings</p>
          </Link>
        </li>
        <li onClick={(e) => handleAddActive(e)}>
          <Link to={RoutesList.profile.address || "/"}>
            <span>
              <i className="fi fi-rr-address-book"></i>
            </span>
            <p>address</p>
          </Link>
        </li>
        <li onClick={(e) => handleAddActive(e)}>
          <Link to={RoutesList.profile.wishlist || "/"}>
            <span>
              <i className="fi fi-rr-heart"></i>
            </span>
            <p>whitlists</p>
          </Link>
        </li>
        <li onClick={(e) => handleAddActive(e)}>
          <Link to={RoutesList.profile.payments || "/"}>
            <span>
              <i className="fi fi-rr-credit-card"></i>
            </span>
            <p>payment settings</p>
          </Link>
        </li>
        <li onClick={(e) => handleAddActive(e)}>
          <Link to={RoutesList.profile.orders || "/"}>
            <span>
              <i className="fi fi-rr-boxes"></i>
            </span>
            <p>orders</p>
          </Link>
        </li>
      </SettingsList>
    </ProfileSettingsListWrapper>
  );
}

export default ProfileSettingsList;
