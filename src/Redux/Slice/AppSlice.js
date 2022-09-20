import { createSlice } from "@reduxjs/toolkit";
import { locales } from "../../Locales/locales";
import { themes } from "../../Theme/ThemeMode";

const initialState = {
  formSteps: 1,
  redirectTimer: 10,
  dimensions: {
    innerWidth: window.innerWidth,
    innerheight: window.innerHeight,
  },
  languageData: locales?.english,
  selectedProductData: {},
  themeMode: { colors: themes.lightColors, properies: themes.properties },
};
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    TOGGLE_THEME_MODE: (state, action) => {
      if (action.payload === "LIGHT") {
        window.localStorage.setItem(
          action.payload,
          JSON.stringify(themes.lightColors)
        );
        window.localStorage.setItem("THEME_CONDITINAL_VALUE", action.payload);
        //
        const storedthemeMode = JSON.parse(
          localStorage.getItem(action.payload)
        );
        //
        state.themeMode = { ...state.themeMode, colors: storedthemeMode };
      }
      if (action.payload === "DARK") {
        window.localStorage.setItem(
          action.payload,
          JSON.stringify(themes.darkColors)
        );
        window.localStorage.setItem("THEME_CONDITINAL_VALUE", action.payload);
        //
        const storedthemeMode = JSON.parse(
          localStorage.getItem(action.payload)
        );
        //
        state.themeMode = { ...state.themeMode, colors: storedthemeMode };
      }
      const {
        primaryColorVar,
        primaryColor_800_Var,
        primaryColor_700_Var,
        primaryColor_600_Var,
        primaryColor_500_Var,
        primaryColor_400_Var,
        primaryColor_300_Var,
        primaryColor_200_Var,
        secondaryColorVar,
        thirdColorVar,
        fourthColorVar,
        accentPrimaryColorVar,
        accentSecondaryColorVar,
        textColorVar,
        textColorSecondaryVar,
        borderColorVar,
      } = state.themeMode.properies;
      const {
        primaryColor,
        primaryColor_800,
        primaryColor_700,
        primaryColor_600,
        primaryColor_500,
        primaryColor_400,
        primaryColor_300,
        primaryColor_200,
        secondaryColor,
        thirdColor,
        fourthColor,
        accentPrimaryColor,
        accentSecondaryColor,
        textColor,
        textColorSecondary,
        borderColor,
      } = state.themeMode.colors;

      //
      window.document.documentElement.style.setProperty(
        primaryColorVar,
        primaryColor
      );
      window.document.documentElement.style.setProperty(
        primaryColor_800_Var,
        primaryColor_800
      );
      window.document.documentElement.style.setProperty(
        primaryColor_700_Var,
        primaryColor_700
      );
      window.document.documentElement.style.setProperty(
        primaryColor_600_Var,
        primaryColor_600
      );
      window.document.documentElement.style.setProperty(
        primaryColor_500_Var,
        primaryColor_500
      );
      window.document.documentElement.style.setProperty(
        primaryColor_400_Var,
        primaryColor_400
      );
      window.document.documentElement.style.setProperty(
        primaryColor_300_Var,
        primaryColor_300
      );
      window.document.documentElement.style.setProperty(
        primaryColor_200_Var,
        primaryColor_200
      );
      window.document.documentElement.style.setProperty(
        secondaryColorVar,
        secondaryColor
      );
      window.document.documentElement.style.setProperty(
        thirdColorVar,
        thirdColor
      );
      window.document.documentElement.style.setProperty(
        fourthColorVar,
        fourthColor
      );
      window.document.documentElement.style.setProperty(
        borderColorVar,
        borderColor
      );
      window.document.documentElement.style.setProperty(
        textColorVar,
        textColor
      );
      window.document.documentElement.style.setProperty(
        textColorSecondaryVar,
        textColorSecondary
      );
      window.document.documentElement.style.setProperty(
        accentPrimaryColorVar,
        accentPrimaryColor
      );
      window.document.documentElement.style.setProperty(
        accentSecondaryColorVar,
        accentSecondaryColor
      );
      //
    },
    CHANGE_WEBSITE_LANGUAGE: (state, actions) => {
      const selectedLang = actions.payload;
      const fontFamilyVar = "--bs-body-font-family";
      const engFont = `"Poppins", sans-serif`;
      const arFont = "'Cairo', serif";
      if (selectedLang === "EN") {
        state.languageData = locales?.english;
        document.documentElement.style.setProperty(fontFamilyVar, engFont);
        document.documentElement.dir = "ltr";
        document.documentElement.lang = "en";
      }
      if (selectedLang === "AR") {
        state.languageData = locales?.arabic;
        document.documentElement.style.setProperty(fontFamilyVar, arFont);
        document.documentElement.dir = "rtl";
        document.documentElement.lang = "ar";
      }
    },
    INCREASE_FORMSTEP: (state, actions) => {
      state.formSteps = state.formSteps + 1;
    },
    DECREASE_FORMSTEP: (state, actions) => {
      if (state.formSteps === 0) {
      } else {
        state.formSteps = state.formSteps - 1;
      }
    },
    START_REDIRECT_TIMER: (state, actions) => {
      if (state.redirectTimer !== 0) {
        var interval = setInterval(() => {
          state.redirectTimer = state.redirectTimer - 1;
        }, 1000);
      } else {
        clearInterval(interval);
      }
    },
    SET_PRODUCT_PREVIEW_DATA: (state, action) => {
      state.selectedProductDataKey = action.payload;
      window.localStorage.setItem(
        "SelectedProductData",
        JSON.stringify(action.payload)
      );
    },
    SET_WINDOW_WIDTH: (state, actions) => {
      state.dimensions = { ...state.dimensions, ...actions.payload };
    },
  },
});
export const {
  INCREASE_FORMSTEP,
  DECREASE_FORMSTEP,
  START_REDIECT_TIMER,
  CHANGE_WEBSITE_LANGUAGE,
  SET_PRODUCT_PREVIEW_DATA,
  TOGGLE_THEME_MODE,
  SET_WINDOW_WIDTH,
} = appSlice.actions;
