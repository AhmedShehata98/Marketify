import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AUTH_USER_ACTION } from "../Redux/Slice/UserSlice";

function useAuth() {
  const [isAuth, setIsAuth] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [userId, setuserId] = useState(null);
  const dispatch = useDispatch();

  //useCallback
  const fetchAuthRequest = useCallback(async (token) => {
    try {
      let res = await dispatch(AUTH_USER_ACTION(token)).unwrap();
      setIsAuth((auth) => (auth = res.isAuth));
      setuserId((id) => (id = res.user.user_id));
      setLoading((l) => (l = false));
    } catch (error) {
      throw setIsError((e) => (e = error.message));
    }
  }, []);

  // useEffect
  useEffect(() => {
    let token = document.cookie.split("=")[1];
    fetchAuthRequest(token);
  }, []);

  return (
    isLoading !== true && {
      isAuth,
      isError,
      isLoading,
      userId,
    }
  );
}

export default useAuth;
