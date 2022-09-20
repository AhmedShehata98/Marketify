import React, { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";

// 3rd party libraries
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { breakpoints } from "../../../StyledComponentsVariables/breakPoints";

// utilities
import { RoutesList } from "../../../Routes/RoutesList";
import StyledAnchor from "../../StyledAnchor/StyledAnchor";
const direction = document.dir;

const StyledControlButtons = styled.div`
  position: relative;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: top 0.3s ease-out;

  @media (${breakpoints.maxTabletL}) {
    position: fixed;
    transition: top 0.3s ease-out;
    top: -50%;
  }
`;

const UserAccountButton = styled.button`
  min-width: 140px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  border: none;
  background-color: transparent;
  border-radius: var(--border-radius);
  color: var(--secondary-color);

  &.open-menu {
    > :last-child {
      rotate: 180deg;
    }
  }

  > :last-child {
    transition: rotate 0.4s ease-out;
    color: var(--accent-primary-color);
    align-self: flex-end;
    line-height: 0.5rem;
    font-size: 1rem;
  }
`;

const CartWrapper = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LabelContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: inherit;
  text-transform: capitalize;
  user-select: none;
  pointer-events: none;

  .user-name {
    margin-bottom: 0;
    color: var(--secondary-color);
    font-weight: bold;
  }
  .button-name {
    margin-block: 0;
    color: inherit !important;
    font-size: 0.7rem;
    font-weight: 600;
    line-height: 1rem;
  }
`;
const UserName = styled.small`
  font-weight: bold;
  text-align: start;
  color: var(--secondary-color);
  text-transform: capitalize;
`;

function ControlButtons(props) {
  //
  const handleShowAccountMenu = useCallback(() => {
    if (props.isLoggedin && props.userData) {
    }
    props.setShowAccountMenu((c) => (c = !c));
  }, []);

  const handleClosemodals = useCallback((e) => {
    const AcctountMenuID = "account-menu";
    const cartMenuID = "cart-menu";
    //
    const target = e.target;
    if (target.getAttribute("id") !== AcctountMenuID) {
      props.setShowAccountMenu(() => false);
    }
    if (target.getAttribute("id") !== cartMenuID) {
      props.setShowCart(() => false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleClosemodals);
  }, []);

  return (
    <StyledControlButtons>
      {props.isLoggedin === true ? (
        <>
          <UserAccountButton
            className={props.showAccountMenu === true ? "open-menu" : null}
            onClick={(e) => handleShowAccountMenu(e)}
            id="account-menu"
          >
            {props.Loading === false && (
              <LabelContainer>
                <UserName>{`hello , ${props.userData?.firstname} `}</UserName>
                <p className="button-name">my account</p>
              </LabelContainer>
            )}
            {props.Loading && (
              <div className="row w-100 h-100 placeholder-wave">
                <div className="placeholder  placeholder-sm col-10 mb-1 rounded-1"></div>
                <div className="placeholder  placeholder-sm col-6 mb-1 rounded-1"></div>
              </div>
            )}
            <i className="fi fi-rr-caret-down"></i>
          </UserAccountButton>
          <StyledAnchor to={`${RoutesList.wishlist}`} $base>
            <i className="fi fi-rr-heart lh-1"></i>
          </StyledAnchor>
        </>
      ) : (
        <>
          <StyledAnchor to={`/${RoutesList.login}`} filled>
            <small>sign in</small>
            <i className="fi fi-rr-user lh-1"></i>
          </StyledAnchor>
        </>
      )}

      <CartWrapper>
        <StyledAnchor
          // onClick={() => props.setShowCart((c) => (c = !c))}
          id="cart-menu"
          href={`/${RoutesList.cart}`}
        >
          <i className="fi fi-rr-shopping-cart lh-1"></i>
          {props.$cartItemsCount > 0 ? (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {props.$cartItemsCount}
            </span>
          ) : null}
        </StyledAnchor>
      </CartWrapper>
    </StyledControlButtons>
  );
}

export default ControlButtons;
