import React, {
  Suspense,
  lazy,
  useEffect,
  useEvent,
  useLayoutEffect,
  useCallback,
  useState,
} from "react";

// 3rd party libraries
import { Routes as RoutesWrapper, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";

// Redux
import {
  AUTH_USER_ACTION,
  GET_USERDATA_ACTION,
} from "../Redux/Slice/UserSlice";
import { GET_ALL_CATEGORIES } from "../Redux/Slice/ProductsSlice";
// Components
import Loading from "../Layout/Loading/Loading";

// utilities
import { RoutesList } from "./RoutesList";
import { breakpoints } from "../StyledComponentsVariables/breakPoints";
import ProtectedRoute from "./ProtectedRoute";
import useAuth from "../hooks/useAuth";

// Pages
const Home = lazy(() => import("../Pages/Home/Home"));
const Signup = lazy(() => import("../Pages/Signup/Signup"));
const Login = lazy(() => import("../Pages/Login/Login"));
const Categories = lazy(() => import("../Pages/Categories/Categories"));
const ProductsListView = lazy(() =>
  import("../Pages/ProductsList/ProductsListView")
);
const ProductPage = lazy(() =>
  import("../Components/ProductPreviewPage/ProductPage")
);
const SettingsPage = lazy(() => import("../Pages/Settings/SettingsPage.jsx"));
const AccountSettings = lazy(() =>
  import("../Pages/Settings/SC/AccountSettings")
);
const SettingAddress = lazy(() =>
  import("../Pages/Settings/SC/SettingAddress")
);
const MobileCart = lazy(() => import("../Pages/Mobile/MobileCart/MobileCart"));
const CartDesktop = lazy(() => import("../Pages/CartDesktop/CartDesktop"));
const Checkout = lazy(() => import("../Pages/Checkout/Checkout"));
const AccountMobile = lazy(() =>
  import("../Pages/Mobile/Account/AccountMobile")
);
const NotFound = lazy(() => import("../Pages/NotFound/NotFound"));
const HeaderBar = React.lazy(() => import("../Components/HeaderBar/HeaderBar"));
const Footer = React.lazy(() => import("../Layout/Footer/Footer"));

/*
if Route parent is have path and element properties then it will
render children out in "outlet"
*/

function Routes() {
  const {
    products: { categoriesData },
    user,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { isAuth, isError: authError, isLoading: authLoading } = useAuth();
  const [innerWidth, serInnerWidth] = useState(0);
  const [maxTabletL, setmMxTabletL] = useState(
    +breakpoints.maxTabletL.split(":")[1].slice(0, 3)
  );

  const handleScreenWidth = useCallback((e) => {
    const width = e.currentTarget.innerWidth;
    serInnerWidth((w) => (w = width));
  });
  //
  // useEffect
  //
  useLayoutEffect(() => {
    window.addEventListener("resize", handleScreenWidth);
    window.addEventListener("load", handleScreenWidth);
  }, [window.innerWidth]);

  useEffect(() => {
    const cancel = new AbortController();
    const signal = cancel.signal;
    //
    const GetGategories = async () => {
      if (categoriesData === null) return dispatch(GET_ALL_CATEGORIES(signal));
    };
    GetGategories();
    return () => {
      cancel.abort();
    };
  }, []);
  //
  //
  //end useEffect
  return (
    <RoutesWrapper>
      <Route path={RoutesList.app}>
        <Route
          index
          element={
            <Suspense fallback={<Loading />}>
              <HeaderBar />
              <Home />
              <Footer />
            </Suspense>
          }
        />

        <Route
          path={RoutesList.login}
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path={RoutesList.signup}
          element={
            <Suspense fallback={<Loading />}>
              <Signup />
            </Suspense>
          }
        />
        <Route path={RoutesList.productsList}>
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <HeaderBar />
                <ProductsListView />
                <Footer />
              </Suspense>
            }
          />
          <Route
            path={":id"}
            element={
              <Suspense fallback={<Loading />}>
                <HeaderBar />
                <ProductPage />
                <Footer />
              </Suspense>
            }
          />
        </Route>
        {/* Start Account settings Routes */}
        {/* start mobile routes */}
        {innerWidth <= maxTabletL && (
          <Route path={RoutesList.profile.profile}>
            <Route
              index
              element={
                <Suspense fallback={<Loading />}>
                  <HeaderBar />
                  <AccountMobile />
                  <Footer />
                </Suspense>
              }
            />
            <Route
              path={RoutesList.profile.personalInfo}
              element={
                <Suspense fallback={<Loading />}>
                  <AccountSettings />
                </Suspense>
              }
            />
            <Route
              path={RoutesList.profile.address}
              element={
                <Suspense fallback={<Loading />}>
                  <SettingAddress />
                </Suspense>
              }
            />
          </Route>
        )}
        {/* end mobile routes */}
        {/* start desktop routes */}
        {innerWidth >= maxTabletL && (
          <Route
            path={RoutesList.profile.profile}
            element={
              <Suspense fallback={<Loading />}>
                <HeaderBar />
                <SettingsPage />
                <Footer />
              </Suspense>
            }
          >
            <Route
              path={RoutesList.profile.personalInfo}
              element={
                <Suspense fallback={<Loading />}>
                  <AccountSettings />
                </Suspense>
              }
            />
            <Route
              path={RoutesList.profile.address}
              element={
                <Suspense fallback={<Loading />}>
                  <SettingAddress />
                </Suspense>
              }
            />
          </Route>
        )}
        {/* end descktop routes */}
        {/* End  Account settings Routes */}
        {/*  */}
        {/* Start all Cart  Routes */}
        <Route path={RoutesList.cart}>
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <HeaderBar />
                <CartDesktop $backgroundColor={"var(--primary-color-300)"} />
                <Footer />
              </Suspense>
            }
          />
          <Route
            path={RoutesList.checkout}
            element={
              <Suspense fallback={<Loading />}>
                <HeaderBar />
                <Checkout />
                <Footer />
              </Suspense>
            }
          />
        </Route>
        {/* end all Cart  Routes */}
        {/*  */}
        {/* Categories Nested Routes */}
        <Route path={RoutesList.categories.list}>
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <HeaderBar />
                <Categories />
                <Footer />
              </Suspense>
            }
          />
          {categoriesData &&
            categoriesData.map((categoryName) => {
              return (
                <Route path={categoryName} key={nanoid(8)}>
                  <Route
                    key={nanoid(8)}
                    index
                    element={
                      <Suspense fallback={<Loading />}>
                        <HeaderBar />
                        <ProductsListView />
                        <Footer />
                      </Suspense>
                    }
                  />
                  <Route
                    key={nanoid(8)}
                    path=":id"
                    element={
                      <Suspense fallback={<Loading />}>
                        <HeaderBar />
                        <ProductPage />
                        <Footer />
                      </Suspense>
                    }
                  />
                </Route>
              );
            })}
        </Route>
        {/*End Categories Nested Routes */}
      </Route>
      <Route
        path="*"
        element={
          <Suspense fallback={<Loading />}>
            <HeaderBar />
            <NotFound />
            <Footer />
          </Suspense>
        }
      />
    </RoutesWrapper>
  );
}

export default React.memo(Routes);
