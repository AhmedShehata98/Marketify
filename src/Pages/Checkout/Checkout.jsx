import React, { useCallback, useLayoutEffect, useRef } from "react";

// 3rd party libraries
import { useSelector, useDispatch } from "react-redux";

//components
import SectionWrappeer from "../../Layout/SectionWrapper";
import CheckoutHeader from "./SC/CheckoutHeader";
import StyledAnchor from "../../Components/StyledAnchor/StyledAnchor";
import CheckoutInfo from "./SC/CheckoutInfo";
import CheckoutItems from "./SC/CheckoutItems";

//redux
import {
  AUTH_USER_ACTION,
  GET_USERDATA_ACTION,
} from "../../Redux/Slice/UserSlice";
import ModalContainer from "./SC/ModalContainer";
import ChangeAddress from "./SC/ChangeAddress";
import { useState } from "react";
import PaymentMedthods from "./SC/PaymentMedthods";
import AddNewPaymentCard from "./SC/AddNewPaymentCard";

function Checkout() {
  const {
    cart: { isEmpty, cartData, cartItemsLength, TotalProductsPrice },
    user: { userData, isAuth },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const tokenRef = useRef(document.cookie.split("=")[1]);
  const [showModal, setshowModal] = useState(false);
  const [showChangeAdress, setShowChangeaddress] = useState(false);
  const [showAddCard, setShowAddCard] = useState(false);

  // usecalback
  const dispathAuthUser = useCallback(async () => {
    dispatch(AUTH_USER_ACTION(tokenRef.current));
  }, [tokenRef.current]);
  const dispathGetUserData = useCallback(async () => {
    dispatch(GET_USERDATA_ACTION());
  }, [tokenRef.current]);

  // useEffect
  useLayoutEffect(() => {
    if (isAuth) {
    } else {
      dispathAuthUser();
    }
  }, [tokenRef.current]);
  useLayoutEffect(() => {
    if (isAuth) {
      dispathGetUserData();
    }
  }, [tokenRef.current]);

  return (
    <SectionWrappeer
      background="var(--primary-color-400)"
      ContentCenter
      ItemCenter
    >
      <section className="container">
        <CheckoutHeader>
          <div className="col-12 col-lg-4">
            <h4 className="text-muted text-uppercase mb-0">order checkout</h4>
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-center justify-content-between justify-content-lg-end gap-4">
            <p className="text-muted text-uppercase mb-0 d-flex align-items-center gap-2">
              order total :<h5 className="mb-0">{TotalProductsPrice} L.E</h5>
            </p>
            <StyledAnchor href={"#"} filled>
              place order
            </StyledAnchor>
          </div>
        </CheckoutHeader>
      </section>
      <section className="container mb-4">
        <CheckoutInfo>
          <CheckoutItems $title="your information">
            <ul className="list-group list-group-flush  mb-4 w-100">
              <li className="list-group-item d-flex flex-column">
                <b className="text-capitalize">email </b>
                <small className="text-muted">{userData?.email}</small>
              </li>
              <li className="list-group-item d-flex flex-column">
                <b className="text-capitalize">username</b>
                <small className="text-muted">{"@" + userData?.username}</small>
              </li>
              <li className="list-group-item d-flex flex-column">
                <b className="text-capitalize">full name</b>
                <small className="text-muted">
                  {userData?.firstname + " " + userData?.lastname}
                </small>
              </li>
            </ul>
          </CheckoutItems>
          <CheckoutItems
            $title="shipping address"
            $setShowChangeaddress={setShowChangeaddress}
            $setshowModal={setshowModal}
          >
            <small>259 N Courtenay Pkwy .</small>
            <small>Merritt Island .</small>
            <small>Florida .</small>
            <small>32953 </small>
            <small>United States </small>
          </CheckoutItems>
          <CheckoutItems $title="payments">
            <PaymentMedthods
              $setShowAddCard={setShowAddCard}
              $setshowModal={setshowModal}
            ></PaymentMedthods>
          </CheckoutItems>
        </CheckoutInfo>
      </section>
      {/*start modal section */}
      {showModal && (
        <ModalContainer $show={showModal} width={showAddCard && "40vw"}>
          {showChangeAdress && (
            <ChangeAddress
              $setShowChangeaddress={setShowChangeaddress}
              $setshowModal={setshowModal}
            />
          )}
          {showAddCard && (
            <AddNewPaymentCard
              $setShowAddCard={setShowAddCard}
              $setshowModal={setshowModal}
            />
          )}
        </ModalContainer>
      )}
      {/*end modal section */}
    </SectionWrappeer>
  );
}

export default Checkout;
