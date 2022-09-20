import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { GET_USERDATA_ACTION } from "../Redux/Slice/UserSlice";
import useAuth from "./useAuth";
function useGetUserData() {
  const dispatch = useDispatch();
  const { isAuth, isError, userId } = useAuth();
  const [userData, setuserData] = useState({});
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //
  //   useCallback

  //
  useEffect(() => {
    if (isAuth && userId) {
      const token = document.cookie.split("=")[1];

      axios({
        method: "GET",
        url: `https://sore-red-gosling-vest.cyclic.app/user/${userId}`,
        headers: {
          authorization: token,
        },
      })
        .then((res) => setuserData((usrData) => (usrData = res.data)))
        .catch((err) => {
          throw setError(
            (e) => (e = "maybe no cookie or you is not signed in")
          );
        })
        .finally(() => {
          setLoading((l) => (l = false));
        });
    }
  }, [isAuth, userId]);

  return { userData, isAuth, error, Loading };
}
export default useGetUserData;
