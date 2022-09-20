import React, { useEffect } from "react";
import ToastBox from "./SC/ToastBox";
import ToastWrapper from "./SC/ToastWrapper";

import { useDispatch } from "react-redux";
import { Hide_NOTIFICATION } from "../../Redux/Slice/ToastNotificationsSlice";

const Toasts = (props) => {
  const dispatch = useDispatch();
  let timeoutRef;
  useEffect(() => {
    if (props.$show) {
      timeoutRef = setTimeout(() => {
        dispatch(Hide_NOTIFICATION());
      }, props.$timeout || 2000);
    }

    return () => {
      clearTimeout(timeoutRef);
    };
  }, [props.$show]);

  return (
    <ToastWrapper>
      <ToastBox
        $message={props.$message}
        $severity={props.$severity}
        $show={props.$show}
        $timeout={props.$timeout}
      ></ToastBox>
    </ToastWrapper>
  );
};

export default Toasts;
