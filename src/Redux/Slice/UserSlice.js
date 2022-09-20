import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { Axios } from "axios";

//
const API_URL = "https://sore-red-gosling-vest.cyclic.app";
//

export const SIGN_UP_ACTION = createAsyncThunk(
  "user/signup",
  async function (data, thunkApi) {
    const { rejectWithValue } = thunkApi;
    let incomingData = data;
    try {
      const request = await axios({
        method: "POST",
        url: `${API_URL}/signup`,
        data: incomingData,
        headers: {
          "Content-Type": "application/json",
        },
      });
      //
      const data = await request.data;
      return data;
      //
    } catch (error) {
      throw rejectWithValue({
        code: error?.response.status,
        reason: error?.response.data.nulls,
      });
    }
  }
);

export const LOGIN_ACTION = createAsyncThunk(
  "user/login",
  async ({ request }, thunkApi) => {
    const { fulfillWithValue, rejectWithValue } = thunkApi;

    try {
      const res = await axios({
        method: "POST",
        url: `${API_URL}/login`,
        data: request,
        headers: {
          "Content-Type": "application/json",
        },
      });
      //
      return await fulfillWithValue(res.data.access_token);
    } catch (error) {
      console.log(error);
      throw rejectWithValue("Error , waring email or password");
    }

    //
  }
);

export const AUTH_USER_ACTION = createAsyncThunk(
  "user/auth",
  async (token, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi;
    try {
      const request = await axios({
        method: "POST",
        url: `${API_URL}/auth`,
        data: { token: token },
      });
      //
      const data = await request.data;
      return data;
      //
    } catch (error) {
      throw rejectWithValue(false);
    }
  }
);

export const GET_USERDATA_ACTION = createAsyncThunk(
  "user/userData",
  async (_, thunkApi) => {
    const { getState, rejectWithValue } = thunkApi;
    const token = document.cookie.split("=")[1];
    const {
      user: { userID },
    } = getState();
    try {
      const res = await axios({
        method: "GET",
        url: `${API_URL}/user/${userID}`,
        headers: {
          authorization: token,
        },
      });
      //
      const data = await res.data;
      return data;

      //
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);
export const LOGOUT_USER_ACTION = createAsyncThunk(
  "user/logout",
  async (_, thunkApi) => {
    const token = document.cookie.split("=")[1];
    const { rejectWithValue } = thunkApi;
    try {
      const response = await axios({
        method: "PUT",
        url: `${API_URL}/logout`,
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      });
      //
      const data = await response.data;
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const UPDATE_USER_DATA_ACTION = createAsyncThunk(
  "user/update",
  async (data, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    const token = document.cookie.split("=")[1];
    try {
      const response = await axios({
        method: "PUT",
        url: `${API_URL}/user`,
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
        data,
      });
      return await response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const UPDATE_USER_PASSWORD = createAsyncThunk(
  "user/updatePassword",
  async (data, thunkApi) => {
    const token = document.cookie.split("=")[1];
    //
    const { rejectWithValue } = thunkApi;
    const incomingData = data;
    //
    try {
      const respnse = await axios({
        method: "PUT",
        url: `${API_URL}/user/password`,
        headers: {
          authorization: token,
        },
        data: incomingData,
      });
      //
      const data = await respnse.data;
      return data;
      //
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);
export const DELETE_ACCOUNT_ACTION = createAsyncThunk(
  "user/deleteAccount",
  async (data, thunkApi) => {
    const token = document.cookie.split("=")[1];
    //
    const { rejectWithValue } = thunkApi;
    //
    try {
      const respnse = await axios({
        method: "DELETE",
        url: `${API_URL}/user/password`,
        headers: {
          authorization: token,
        },
      });
      //
      const data = await respnse.data;
      return data;
      //
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

export const CHECK_VALIED_EMAIL = createAsyncThunk(
  "user/checkEmail",
  async function ({ email }, thunkApi) {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await axios({
        url: `${API_URL}/user/check-email/${email}`,
        method: "GET",
      });
      const data = await res.data;
      return data;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);
export const CHECK_VALIED_USERNAME = createAsyncThunk(
  "user/username",
  async function ({ username }, thunkApi) {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await axios({
        url: `${API_URL}/user/check-username/${username}`,
        method: "GET",
      });
      const data = await res.data;
      return data;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

const initialState = {
  //
  authPending: null,
  fetchedUsrDataPending: null,
  editUsrDataPending: null,
  changePwdPending: null,
  deleteAccountPending: null,
  logoutPending: null,
  //
  loginError: null,
  loginSuccess: null,
  loginErrorMessage: null,
  loginSuccessMessage: null,
  //
  signupError: null,
  signupSuccess: null,
  signupErrorMessage: null,
  signuoSuccessMessage: null,
  warningField: null,
  isLoading: null,
  connectionError: null,
  //
  logoutSuccess: null,
  logoutError: null,
  logoutErrorMessage: null,
  //
  updateDataError: null,
  updateDataSuccess: null,
  updateDataErrorMsg: null,
  //
  updatePasswordError: null,
  updatePasswordSuccess: null,
  updatePasswordErrorMsg: null,
  //
  deleteAccountSuccess: null,
  deleteAccountError: null,
  //
  userID: null,
  isAuth: null,
  expireDate: null,
  startDate: null,
  isLoggedin:
    JSON.parse(localStorage.getItem("LOGIN_ACTIVE")) !== null
      ? Object.values(JSON.parse(localStorage.getItem("LOGIN_ACTIVE")))[0]
      : null,
  rememberMe: null,
  userData: null,
  //
  // check
  isPindingCheckUsr: false,
  isPindingCheckMail: false,
  isValidUsername: null,
  isValidEmail: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    BACK_TO_NORMAL_STATE: (state) => {
      //
      state.authPending = null;
      state.fetchedUsrDataPending = null;
      state.editUsrDataPending = null;
      state.changePwdPending = null;
      state.deleteAccountPending = null;
      state.logoutPending = null;
      //
      state.loginError = null;
      state.loginSuccess = null;
      state.loginErrorMessage = null;
      state.loginSuccessMessage = null;
      //
      state.signupError = null;
      state.signupSuccess = null;
      state.signupErrorMessage = null;
      state.signuoSuccessMessage = null;
      state.warningField = null;
      state.isLoading = null;
      state.connectionError = null;
      //
      state.updateDataError = null;
      state.updateDataSuccess = null;
      state.updateDataErrorMsg = null;
      //
      state.updatePasswordError = null;
      state.updatePasswordSuccess = null;
      state.updatePasswordErrorMsg = null;
      //
      state.deleteAccountSuccess = null;
      state.deleteAccountError = null;
      //
      state.isPindingCheckUsr = false;
      state.isPindingCheckMail = false;
      state.isValidUsername = null;
      state.isValidEmail = null;
    },
  },

  extraReducers: {
    [SIGN_UP_ACTION.pending]: (state, actions) => {
      state.signupError = null;
      state.signupSuccess = null;
      state.signupErrorMessage = null;
      state.signuoSuccessMessage = null;
      state.warningField = null;
      state.isLoading = true;
    },
    [SIGN_UP_ACTION.fulfilled]: (state, actions) => {
      state.signupSuccess = true;
      state.signupError = null;
      state.signuoSuccessMessage = actions.payload.msg;
      state.signupErrorMessage = null;
      state.isLoading = false;
    },
    [SIGN_UP_ACTION.rejected]: (state, actions) => {
      state.signupError = true;
      state.signupSuccess = null;
      state.signuoSuccessMessage = null;
      if (actions.payload.code === 400) {
        state.signupErrorMessage = Array.isArray(actions.payload.reason)
          ? `Its seems like you forget ${actions.payload?.reason.join()}`
          : `Its seems like you forget ${actions.payload?.reason}`;
      }
      state.isLoading = false;
    },

    //
    // Login action
    //
    [LOGIN_ACTION.pending]: (state, actions) => {
      state.loginError = null;
      state.loginSuccess = null;
      state.loginErrorMessage = null;
      state.loginSuccessMessage = null;
      state.isLoading = true;
    },
    [LOGIN_ACTION.fulfilled]: (state, actions) => {
      const token = actions.payload;
      state.isLoading = false;
      state.loginSuccess = true;
      state.loginError = null;
      token !== null ? (state.isLoggedin = true) : (state.isLoggedin = null);
      state.loginErrorMessage = null;
      state.loginSuccessMessage = "You have signd in successfully .";
      document.cookie = `token=${token};secure;samesite=lax;`;
    },
    [LOGIN_ACTION.rejected]: (state, actions) => {
      state.loginError = true;
      state.loginSuccess = null;
      state.isLoading = false;
      state.isLoggedin = null;
      state.loginSuccessMessage = null;
      state.loginErrorMessage = actions.payload;
    },
    //
    // logout
    //
    [LOGOUT_USER_ACTION.pending]: (state, actions) => {
      state.logoutError = null;
      state.logoutSuccess = null;
      state.isLoading = true;
    },
    [LOGOUT_USER_ACTION.fulfilled]: (state, actions) => {
      state.logoutError = null;
      state.logoutSuccess = true;
      state.isLoading = false;
      state.userID = null;
      state.isAuth = null;
      state.isLoggedin = null;
      state.userData = null;
      document.cookie = `token=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    },
    [LOGOUT_USER_ACTION.rejected]: (state, actions) => {
      state.logoutError = true;
      state.logoutSuccess = null;
      state.logoutErrorMessage = actions.payload;
      state.isLoading = false;
    },

    //
    // auth
    //
    [AUTH_USER_ACTION.pending]: (state, actions) => {
      state.isAuth = null;
      state.userID = null;
      state.startDate = null;
      state.expireDate = null;
      state.authPending = true;
    },
    [AUTH_USER_ACTION.fulfilled]: (state, actions) => {
      const userId = actions.payload.user.user_id;
      const startDate = actions.payload.user.iat;
      const expertDate = actions.payload.user.exp;
      const auth = actions.payload.isAuth;
      //
      state.isAuth = auth;
      state.userID = userId;
      state.expireDate = expertDate;
      state.startDate = startDate;
      state.isLoggedin = true;
      state.authPending = false;
    },
    [AUTH_USER_ACTION.rejected]: (state, actions) => {
      const auth = actions.payload.isAuth;
      state.isAuth = auth;
      state.authPending = false;
      state.userID = null;
      state.expireDate = null;
      state.startData = null;
    },
    [GET_USERDATA_ACTION.pending]: (state, actions) => {
      state.userData = null;
      state.fetchedUsrDataPending = true;
    },
    [GET_USERDATA_ACTION.fulfilled]: (state, actions) => {
      state.fetchedUsrDataPending = false;
      state.userData = actions.payload;
      if (state.userData !== null) {
        state.isLoggedin = true;
        window.localStorage.setItem(
          "LOGIN_ACTIVE",
          JSON.stringify({
            isLoggedin: true,
          })
        );
      } else {
        if (localStorage.LOGIN_ACTIVE) {
          localStorage.removeItem("LOGIN_ACTIVE");
        }
      }
    },
    [GET_USERDATA_ACTION.rejected]: (state, actions) => {
      state.isLoggedin = null;
      if (localStorage.LOGIN_ACTIVE) {
        localStorage.removeItem("LOGIN_ACTIVE");
      }
      state.fetchedUsrDataPending = false;
    },
    //
    // update data
    //
    [UPDATE_USER_DATA_ACTION.pending]: (state, actions) => {
      state.editUsrDataPending = true;
      state.updateDataError = null;
      state.updateDataSuccess = null;
      state.updateDataErrorMsg = "";
    },
    [UPDATE_USER_DATA_ACTION.fulfilled]: (state, actions) => {
      state.editUsrDataPending = false;
      state.updateDataSuccess = true;
      state.userData = actions.payload;
    },
    [UPDATE_USER_DATA_ACTION.rejected]: (state, actions) => {
      state.editUsrDataPending = false;
      state.updateDataError = true;
      state.updateDataErrorMsg = actions.payload;
    },
    [UPDATE_USER_PASSWORD.pending]: (state) => {
      state.changePwdPending = true;
      state.updatePasswordError = null;
      state.updatePasswordSuccess = null;
      state.updatePasswordErrorMsg = "";
    },
    [UPDATE_USER_PASSWORD.fulfilled]: (state, actions) => {
      const newToken = actions.payload.access_token;
      state.updatePasswordError = null;
      //
      if (actions.payload.access_token) {
        document.cookie = `token=${newToken};secure;samesite=lax;`;
      }
      //
      state.changePwdPending = false;
    },
    [UPDATE_USER_PASSWORD.rejected]: (state, actions) => {
      state.updatePasswordSuccess = null;
      state.updatePasswordError = true;
      state.updatePasswordErrorMsg = actions.payload;
      state.changePwdPending = false;
    },
    [DELETE_ACCOUNT_ACTION.pending]: (state) => {
      state.deleteAccountPending = true;
      state.deleteAccountError = null;
      state.deleteAccountSuccess = null;
    },
    [DELETE_ACCOUNT_ACTION.fulfilled]: (state, actions) => {
      state.deleteAccountPending = true;
      state.deleteAccountError = null;
      state.deleteAccountSuccess = true;
    },
    [DELETE_ACCOUNT_ACTION.rejected]: (state, actions) => {
      state.deleteAccountPending = true;
      state.deleteAccountError = true;
      state.deleteAccountSuccess = null;
    },

    // checking email address
    [CHECK_VALIED_EMAIL.pending]: (state, actions) => {
      state.isisPindingCheckMail = true;
      state.isValidEmail = null;
    },
    [CHECK_VALIED_EMAIL.fulfilled]: (state, actions) => {
      state.isisPindingCheckMail = false;
      state.isValidEmail = actions.payload.availble;
    },
    [CHECK_VALIED_EMAIL.rejected]: (state, actions) => {
      state.isisPindingCheckMail = true;
      state.isValidEmail = null;
    },
    // checking username address
    [CHECK_VALIED_USERNAME.pending]: (state, actions) => {
      state.isPindingCheckUsr = true;
      state.isValidUsername = null;
    },
    [CHECK_VALIED_USERNAME.fulfilled]: (state, actions) => {
      state.isPindingCheckUsr = false;
      state.isValidUsername = actions.payload.availble;
    },
    [CHECK_VALIED_USERNAME.rejected]: (state, actions) => {
      state.isPindingCheckUsr = true;
      state.isValidUsername = null;
    },
  },
});

export const { BACK_TO_NORMAL_STATE } = userSlice.actions;
