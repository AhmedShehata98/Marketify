import React, { useEffect, useLayoutEffect, useState } from "react";

// 3rd party libraries
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

//redux
import { TOGGLE_THEME_MODE } from "../../../Redux/Slice/AppSlice";
import {
  AUTH_USER_ACTION,
  GET_USERDATA_ACTION,
  LOGOUT_USER_ACTION,
} from "../../../Redux/Slice/UserSlice";

//components
import AccontItem from "./SC/AccontItem";
import AccountItemsList from "./SC/AccountItemsList";
import AccountWrapper from "./SC/AccountWrapper";

//icons
import defaultAvatar from "../../../assets/icon/user.png";
import { FaAddressCard, FaHeart, FaUserCircle } from "react-icons/fa";
import { IoSunny, IoCard, IoLanguageOutline } from "react-icons/io5";
import {
  IoMdMoon,
  IoIosArrowForward,
  IoMdLogOut,
  IoIosLogIn,
} from "react-icons/io";
import { TbSitemap } from "react-icons/tb";

// utilities
import { RoutesList } from "../../../Routes/RoutesList";
import { RiAccountPinCircleLine } from "react-icons/ri";
const themeColor =
  window.localStorage.getItem("THEME_CONDITINAL_VALUE") || "Light";

const AccountMobile = () => {
  const {
    user: { userData, isAuth, isLoggedin, logoutSuccess },
  } = useSelector((state) => state);
  const token = document.cookie.split("=")[1];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userImageUrl, setUserImageUrl] = useState("");
  const [togglers, setTogglers] = useState({
    theme: themeColor !== null && themeColor === "Light" ? false : true,
    language: false,
  });

  //
  // useEffect Hook
  //
  useLayoutEffect(() => {
    // auth
    const authzantication = async () => {
      dispatch(AUTH_USER_ACTION(token));
    };
    if (token) {
      authzantication();
    } else {
      if (window.localStorage.getItem("LOGIN_ACTIVE"))
        return window.localStorage.removeItem("LOGIN_ACTIVE");
    }
  }, [token]);

  useLayoutEffect(() => {
    // auth
    const getUeerData = async () => {
      dispatch(GET_USERDATA_ACTION());
    };
    if (isAuth) {
      getUeerData();
    }
  }, [isAuth]);

  useEffect(() => {
    const handleUserImageSrc = async () => {
      if (userData?.avatar === "default:avatar") {
        return setUserImageUrl(() => defaultAvatar);
      } else if (
        userData?.avatar !== null &&
        userData?.avatar !== "default:avatar"
      ) {
        return setUserImageUrl(() => userData?.avatar);
      }
    };
    handleUserImageSrc();
  }, [userData?.avatar]);

  function handleChange({ target }) {
    if (target.id === "themeColor" && target.checked === true) {
      dispatch(TOGGLE_THEME_MODE("DARK"));
    }
    if (target.id === "themeColor" && target.checked === false) {
      dispatch(TOGGLE_THEME_MODE("LIGHT"));
    }
  }

  function handleLogout() {
    dispatch(LOGOUT_USER_ACTION());
    return navigate("/");
  }

  return (
    <AccountWrapper>
      <AccountItemsList>
        <AccontItem UserBox>
          <figure className="user-image shadow">
            {isLoggedin === null ? (
              <div className="col-5 w-100 h-100 placeholder placeholder-wave bg-secondary"></div>
            ) : (
              <img src={userImageUrl} alt="user-image" loading="auto" />
            )}
          </figure>
          <div className="user-details">
            {isLoggedin === null ? (
              <div className="col-8 placeholder placeholder-glow rounded-3 bg-secondary my-2"></div>
            ) : (
              <b>{userData?.firstname + " " + userData?.lastname}</b>
            )}
            {isLoggedin === null ? (
              <div className="col-8 placeholder placeholder-sm placeholder-glow rounded-3 bg-secondary mb-2"></div>
            ) : (
              <small className="text-lowercase">{userData?.email}</small>
            )}
          </div>
        </AccontItem>
      </AccountItemsList>
      {isLoggedin !== true && (
        <AccountItemsList divided Title="actions">
          <AccontItem Item>
            <Link to={"/" + RoutesList.login || "/"}>
              <span>
                <IoIosLogIn />
              </span>
              <p>login</p>
            </Link>
          </AccontItem>
          <AccontItem Item>
            <Link to={"/" + RoutesList.signup || "/"}>
              <span>
                <RiAccountPinCircleLine />
              </span>
              <p>sign up</p>
            </Link>
          </AccontItem>
        </AccountItemsList>
      )}
      {isLoggedin && (
        <AccountItemsList divided Title="account settings">
          <AccontItem Item>
            <Link to={RoutesList.profile.personalInfo || "/"}>
              <span>
                <i className="fi fi-br-id-badge"></i>
              </span>
              <p>account settings</p>
            </Link>
            <div className="icon">
              <i className="fi fi-sr-arrow-small-right lh-1"></i>
            </div>
          </AccontItem>
          <AccontItem Item>
            <Link to={RoutesList.profile.address || "/"}>
              <span>
                <i className="fi fi-br-address-book"></i>
              </span>
              <p>address</p>
            </Link>
            <div className="icon">
              <i className="fi fi-sr-arrow-small-right lh-1"></i>
            </div>
          </AccontItem>
          <AccontItem Item>
            <Link to={RoutesList.profile.wishlist || "/"}>
              <span>
                <i className="fi fi-br-heart"></i>
              </span>
              <p>whitlists</p>
            </Link>
            <div className="icon">
              <i className="fi fi-sr-arrow-small-right lh-1"></i>
            </div>
          </AccontItem>
          <AccontItem Item>
            <Link to={RoutesList.profile.payments || "/"}>
              <span>
                <i className="fi fi-br-credit-card"></i>
              </span>
              <p>payment settings</p>
            </Link>
            <div className="icon">
              <i className="fi fi-sr-arrow-small-right lh-1"></i>
            </div>
          </AccontItem>
          <AccontItem Item>
            <Link to={RoutesList.profile.orders || "/"}>
              <span>
                <i className="fi fi-br-boxes"></i>
              </span>
              <p>orders</p>
            </Link>
            <div className="icon">
              <i className="fi fi-sr-arrow-small-right lh-1"></i>
            </div>
          </AccontItem>
        </AccountItemsList>
      )}
      <AccountItemsList divided Title="system preferences">
        <AccontItem Togglers>
          <div className="toggler-btn form-switch form-check p-0">
            <label className="form-check-label" for="language">
              <IoLanguageOutline />
              <p>language</p>
            </label>
            <input
              className="form-check-input"
              id="language"
              type="checkbox"
              name="language"
              // checked={togglers.language}
              onChange={handleChange}
            />
          </div>
        </AccontItem>
        <AccontItem Togglers>
          <div className="toggler-btn form-switch form-check p-0">
            <label className="form-check-label" for="themeColor">
              {togglers.theme === false ? <IoSunny /> : <IoMdMoon />}
              <p>darkmode</p>
            </label>
            <input
              className="form-check-input"
              id="themeColor"
              type="checkbox"
              name="themeColor"
              checked={
                localStorage.getItem("THEME_CONDITINAL_VALUE") !== null &&
                localStorage.getItem("THEME_CONDITINAL_VALUE") === "LIGHT"
                  ? false
                  : true
              }
              onChange={handleChange}
            />
          </div>
        </AccontItem>
      </AccountItemsList>
      {isLoggedin && (
        <AccountItemsList>
          <AccontItem
            Item
            className="mt-4"
            style={{ backgroundColor: "#FBCEB5" }}
          >
            <Link to={"#"} onClick={handleLogout}>
              <span>
                <IoMdLogOut color="#F0134D" />
              </span>
              <p className="text-danger">logout </p>
            </Link>
          </AccontItem>
        </AccountItemsList>
      )}
    </AccountWrapper>
  );
};

export default AccountMobile;
