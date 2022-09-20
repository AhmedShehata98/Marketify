import React, { useCallback, useEffect } from "react";

// 3rd party libraries
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

//redix
import { CLEAR_CART } from "../../Redux/Slice/CartSlice";
import { SHOW_NOTIFICATION } from "../../Redux/Slice/ToastNotificationsSlice";

// components
import Title from "../../Components/Titles/Title";
import CartBoxItems from "./SC/CartBoxItems";
import CartItemsList from "./SC/CartItemsList";
import CartWrapper from "./SC/CartWrapper";
import OrderSummary from "./SC/OrderSummary";
import { useRef } from "react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useLayoutEffect } from "react";
import Loading from "../../Layout/Loading/Loading";
const NoProductsInCart = React.lazy(() => import("./SC/NoProductsInCart"));

const CartDesktop = (props) => {
  const {
    cart: { isEmpty, cartItemsLength, cartData, TotalProductsPrice },
    user: { isLoggedin },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const VatRef = useRef(150);
  const deilveryRef = useRef(50);
  const handleScreenWidth = useCallback((e) => {
    let width = e.currentTarget.innerWidth;
    setScreenWidth((w) => (w = width));
  });

  useLayoutEffect(() => {
    window.addEventListener("resize", handleScreenWidth);
  }, [window.innerWidth]);

  useEffect(() => {
    if (pathname.includes("/cart") && isLoggedin !== true) {
      dispatch(
        SHOW_NOTIFICATION({
          message: "you should sign in first to continue 'checkout orders'",
          severity: "warning",
          timeout: 5000,
        })
      );
    }

    // return () => {};
  }, [pathname, isLoggedin]);

  return (
    <CartWrapper {...props}>
      <section className="container">
        <article className="row">
          <div className="col-12">
            <Title titleTypography="shopping cart">
              <small className="me-auto ms-4 text-muted text-uppercase">
                {`items : ${cartItemsLength}`}
              </small>
            </Title>
          </div>
        </article>
        {isEmpty === false && (
          <article className="row">
            <div className="col-12 col-lg-8 px-1">
              <CartItemsList>
                {cartData &&
                  cartData.map((cartItem) => {
                    return (
                      <CartBoxItems
                        key={nanoid(6)}
                        screenWidth={screenWidth}
                        $id={cartItem.id}
                        $brand={cartItem.brand}
                        $productName={cartItem.title}
                        $productMedia={cartItem.thumbnail}
                        $Price={cartItem.price}
                        // $ItemsCount="2"
                      />
                    );
                  })}
              </CartItemsList>
            </div>
            <div className="col-12 col-lg-4 position-relative">
              <OrderSummary
                $subtotal={TotalProductsPrice}
                $deilvery={deilveryRef.current}
                $isLoggedin={isLoggedin}
                $total={
                  TotalProductsPrice + VatRef.current + deilveryRef.current
                }
              />
            </div>
          </article>
        )}
        {isEmpty === true && (
          <React.Suspense fallback={<Loading />}>
            <NoProductsInCart />
          </React.Suspense>
        )}
      </section>
    </CartWrapper>
  );
};

export default CartDesktop;
