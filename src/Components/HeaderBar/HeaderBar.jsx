import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

// 3rd party libraries
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

//Components
import { CartItem } from "./SC/CartSubElements";
import NavigationLinks from "./SC/NavigationLinks";
import MobileNavbar from "./SC/MobileNavbar";
import CartElement from "./SC/CartElement";
import ControlButtons from "./SC/ControlButtons";
import ControlsNavbar from "./SC/ControlsNavbar";
import HeadersWrapper from "./SC/HeadersWrapper";
import Logo from "./SC/Logo";
import SearchField from "./SC/SearchField";
import AccountMenu from "./SC/AccountMenu";
import Upperbar from "./SC/Upperbar";

// redux
import { LOGOUT_USER_ACTION } from "../../Redux/Slice/UserSlice";
import {
  CHANGE_WEBSITE_LANGUAGE,
  TOGGLE_THEME_MODE,
} from "../../Redux/Slice/AppSlice";

//icons
import defaultAvatar from "../../assets/icon/user.png";
import AccountMenuOptions from "./SC/AccountMenuOptions";
import { RoutesList } from "../../Routes/RoutesList";
import MobileCart from "../../Pages/Mobile/MobileCart/MobileCart";
import StyledAnchor from "../StyledAnchor/StyledAnchor";
import useGetUserData from "../../hooks/useGetUserData";
const hamburMenu = require("../../assets/icon/menu-burger.svg").default;

const HeaderBar = () => {
  const { app, cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const {
    userData,
    isAuth,
    error: usrError,
    Loading: usrLoading,
  } = useGetUserData();
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [screenHeight, setScreenHeight] = useState(window.scrollY);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [shownavItems, setShownavItems] = useState(true);
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const [userImageUrl, setUserImageUrl] = useState(defaultAvatar);
  const [isLoggedin, setIsLoggedIn] = useState(
    window.localStorage.LOGIN_ACTIVE !== undefined
      ? JSON.parse(window.localStorage.LOGIN_ACTIVE)?.isLoggedin
      : false
  );

  // dispatch
  const logoutUserAction = useCallback(
    () => dispatch(LOGOUT_USER_ACTION()),
    []
  );

  const changeLanguageAction = useCallback(
    () => dispatch(CHANGE_WEBSITE_LANGUAGE("AR")),
    []
  );

  const handleScreenWidth = useCallback((e) => {
    const width = e.currentTarget.innerWidth;
    setScreenWidth((w) => (w = width));
  }, []);
  //

  const handleUserImageSrc = useCallback(async () => {
    if (userData?.avatar === "default:avatar") {
      setUserImageUrl((url) => (url = defaultAvatar));
    } else if (
      userData?.avatar !== null &&
      userData?.avatar !== "default:avatar"
    ) {
      setUserImageUrl((url) => (url = userData?.avatar));
    }
  }, []);

  useEffect(() => {
    return () => {
      if (isAuth && userData) {
        setIsLoggedIn((prev) => (prev = true));
      }
    };
  }, [isAuth]);

  useEffect(() => {
    window.addEventListener("scroll", ({ currentTarget }) => {
      setScreenHeight(() => currentTarget.scrollY);
    });
  }, [window.scrollY]);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      const NavgationbarButnID = "navbar-button";
      //
      const target = e.target;
      if (target.getAttribute("id") !== NavgationbarButnID) {
        setShowMobileNavbar(() => false);
      }
    });
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("resize", handleScreenWidth);
  }, [window.innerWidth]);

  useEffect(() => {
    handleUserImageSrc();
  }, [userData?.avatar]);

  return (
    <HeadersWrapper pathname={pathname}>
      <section className=" upperbar-wrapper">
        <Upperbar
          adsMessage={
            "big sales in our products for For limited period 25% discount"
          }
        />
      </section>
      <section className="container">
        <ControlsNavbar>
          {/* <button
            type="button"
            id="navbar-button"
            onClick={(e) => handleshowMobileNavbar(e)}
          >
            <img src={hamburMenu} alt="menu-buttn" />
          </button> */}
          {shownavItems === true && (
            <Logo
              Type={localStorage.getItem("THEME_CONDITINAL_VALUE") || "LIGHT"}
            />
          )}
          <SearchField
            setShownavItems={setShownavItems}
            screenWidth={screenWidth}
            appState={app.languageData}
          />
          {screenWidth <= 960 && (
            <StyledAnchor href={RoutesList.cart} filledPill>
              <i className="fi fi-rr-shopping-cart"></i>
            </StyledAnchor>
          )}
          <ControlButtons
            UserImage={userImageUrl}
            setShowCart={setShowCart}
            showCart={showCart}
            $cartItemsCount={cart.cartItemsLength}
            setShowAccountMenu={setShowAccountMenu}
            showAccountMenu={showAccountMenu}
            shownavItems={shownavItems}
            isLoggedin={isLoggedin}
            userData={userData}
            Loading={usrLoading}
          ></ControlButtons>
          <AccountMenu className={showAccountMenu && "show-menu"}>
            <AccountMenuOptions href={RoutesList.profile.profile}>
              <span className="icon">
                <i className="fi fi-rr-portrait"></i>
              </span>
              <p className="title">profile</p>
            </AccountMenuOptions>
            <AccountMenuOptions
              href={`/${RoutesList.profile.profile}/${RoutesList.profile.personalInfo}`}
            >
              <span className="icon">
                <i className="fi fi-rr-settings"></i>
              </span>
              <p className="title">account settings</p>
            </AccountMenuOptions>
            <AccountMenuOptions
              href={`/${RoutesList.profile.profile}/${RoutesList.profile.address}`}
            >
              <span className="icon">
                <i className="fi fi-rr-address-book"></i>
              </span>
              <p className="title">address</p>
            </AccountMenuOptions>
            <AccountMenuOptions
              href={`/${RoutesList.profile.profile}/${RoutesList.profile.payments}`}
            >
              <span className="icon">
                <i className="fi fi-rr-credit-card"></i>
              </span>
              <p className="title">payments</p>
            </AccountMenuOptions>
            <AccountMenuOptions
              href={`/${RoutesList.profile.profile}/${RoutesList.profile.orders}`}
            >
              <span className="icon">
                <i className="fi fi-rr-boxes"></i>
              </span>
              <p className="title">orders</p>
            </AccountMenuOptions>
            <AccountMenuOptions onClick={() => logoutUserAction()}>
              <span className="icon">
                <i className="fi fi-rr-sign-out-alt"></i>
              </span>
              <p className="title">logout</p>
            </AccountMenuOptions>
          </AccountMenu>
          <CartElement
            className={showCart && "show-cart"}
            appState={app.languageData}
            id="cart-menu"
          >
            {/* <CartItem
              ItemName="carbet"
              Price="200"
              Quantity="2"
              Imgsrc="https://picsum.photos/102"
            /> */}
          </CartElement>
        </ControlsNavbar>
      </section>
      <NavigationLinks screenHeight={screenHeight} pathname={pathname} />
      {screenWidth <= 960 && (
        <MobileNavbar showMobileNavbar={showMobileNavbar}></MobileNavbar>
      )}
    </HeadersWrapper>
  );
};

export default HeaderBar;
