import React, { useEffect, useLayoutEffect } from "react";

//Bottstrao
import "../node_modules/bootstrap/dist/css/bootstrap.css";

// css
import "./CssRootVariables/colorBallets.css";

// 3rd party libraries
import { BrowserRouter } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux/es/exports";
import { TOGGLE_THEME_MODE } from "./Redux/Slice/AppSlice";
import { AUTH_USER_ACTION, GET_USERDATA_ACTION } from "./Redux/Slice/UserSlice";

// Components
import RoutesWrapper from "./Routes/Routes";
import Loading from "./Layout/Loading/Loading";
import Toasts from "./Components/ToastNotifications/Toasts";

const MobileNavigation = React.lazy(() =>
  import("./Components/MobileNavigation/MobileNavigation")
);

function App() {
  const {
    user: { isAuth, loginSuccess, isLoggedin },
    cart: { cartItemsLength },
    toasts: { show, message, severity, timeout },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  // const pathnameRef = useRef(window.location.pathname);
  const token = document.cookie.split("=")[1];
  const THEME_MODE = window.localStorage.getItem("THEME_CONDITINAL_VALUE")
    ? window.localStorage.getItem("THEME_CONDITINAL_VALUE")
    : "LIGHT";

  // const handleIdentifyPathname = useCallback(() => {
  //   if (
  //     window.location.pathname.includes("/login") ||
  //     window.location.pathname.includes("/signup")
  //   ) {
  //     pathnameRef.current = true;
  //   } else {
  //     pathnameRef.current = undefined;
  //   }
  // }, [window.location.pathname]);

  useEffect(() => {
    if (THEME_MODE) {
      dispatch(TOGGLE_THEME_MODE(THEME_MODE));
    }
  }, []);
  useLayoutEffect(() => {
    if (token !== undefined) {
      dispatch(AUTH_USER_ACTION(token));
    } else {
      if (window.localStorage.getItem("LOGIN_ACTIVE")) {
        window.localStorage.removeItem("LOGIN_ACTIVE");
      }
    }
  }, [token]);

  useEffect(() => {
    const getUserData = async () => {
      if (isAuth) return dispatch(GET_USERDATA_ACTION());
    };
    getUserData();
  }, []);
  useEffect(() => {
    let rootElement = document.querySelector("#root");
    let pathnameRef = window.location.pathname;
    if (pathnameRef.includes("/login") || pathnameRef.includes("/signup")) {
      rootElement.style.minHeight = "fit-content";
    }
  }, []);

  return (
    <BrowserRouter>
      <RoutesWrapper />
      <React.Suspense fallback={<Loading />}>
        <MobileNavigation cartAvalible itemsCount={cartItemsLength} />
      </React.Suspense>

      <Toasts
        $show={show}
        $severity={severity}
        $message={message}
        $timeout={timeout}
      />
    </BrowserRouter>
  );
}

export default App;
