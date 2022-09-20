import React, { useCallback, useState } from "react";

// 3rd party libraries
import styled from "styled-components";
import { useDispatch } from "react-redux";

// redux slices
import { TOGGLE_THEME_MODE } from "../../../Redux/Slice/AppSlice";

//icons
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
import { dynamicColor } from "../../../Utillites/MarketifyMethods";

const StyledUpperbar = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
`;

const UpperbarList = styled.ul`
  position: relative;
  width: 100%;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  background-color: var(--secondary-color);
`;
const UpperbarListItems = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  list-style: none;
  font-size: 0.9rem;
  font-family: var(--prompt-sans-family);
  font-weight: 300;
  color: ${dynamicColor("--secondary-color")};

  &:first-child {
    margin-inline-end: auto;
  }

  > select {
    text-transform: uppercase;
    background-color: transparent;
    color: inherit;
    margin-inline: 1rem;
    padding-inline: 0.5rem;
    border-radius: var(--border-radius);
    border: none;

    &:focus {
      outline: none;
    }

    &:disabled {
      opacity: 0.7;
      color: var(--primary-color-200);
    }
    > option {
      background-color: var(--accent-primary-color);
      color: ${dynamicColor("--accent-primary-color")};
    }
  }

  > .form-check {
    height: inherit;
    width: max-content;
    display: flex;
    gap: 0.8rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    > .form-check-label {
      > :first-child {
        line-height: 0.5rem;
        display: inline-block;
        rotate: -45deg;
      }
    }
    > .form-check-input {
      line-height: 0.5;
      margin: unset;
      padding: unset;
    }

    .form-check-input:checked {
      background-color: var(--accent-secondary-color);
      border-color: unset;
    }
  }
`;

function Upperbar(props) {
  const dispatch = useDispatch();
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("THEME_CONDITINAL_VALUE") || "LIGHT"
  );

  //
  const changeThemeModeAction = useCallback(
    (mode) => dispatch(TOGGLE_THEME_MODE(mode)),
    []
  );
  const handleToggleTheme = useCallback((e) => {
    const target = e.target;

    if (themeMode === "DARK") {
      changeThemeModeAction("LIGHT");
      setThemeMode((mode) => (mode = "LIGHT"));
    }
    if (themeMode === "LIGHT") {
      changeThemeModeAction("DARK");
      setThemeMode((mode) => (mode = "DARK"));
    }

    // if (target.checked === true) {
    //   setThemeMode((mode) => (mode = "DARK"));
    //   changeThemeModeAction(themeMode);
    // }
    // if (target.checked === false) {
    //   setThemeMode((mode) => (mode = "LIGHT"));
    //   changeThemeModeAction(themeMode);
    // }
  });

  return (
    <StyledUpperbar>
      <UpperbarList>
        <UpperbarListItems>{props.adsMessage}</UpperbarListItems>
        <i class="flag flag-egypt"></i>
        <UpperbarListItems>
          <select aria-label="language" selected={"EN"} disabled={true}>
            <option value="EN">english</option>
            <option value="AR">العربية</option>
          </select>
        </UpperbarListItems>
        <UpperbarListItems>
          <div className="form-check form-switch ">
            <label className="form-check-label" htmlFor="themeNode">
              {themeMode === "DARK" ? (
                <i className="fi fi-rr-moon-stars"></i>
              ) : (
                <i className="fi fi-rr-sun "></i>
              )}
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="themeNode"
              onChange={handleToggleTheme}
              checked={themeMode === "DARK" ? true : false}
            />
          </div>
        </UpperbarListItems>
      </UpperbarList>
    </StyledUpperbar>
  );
}

export default Upperbar;
