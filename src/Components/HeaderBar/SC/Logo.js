import React, { useCallback, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import darkLogo from "../../../assets/images/logo/logo-dark-2.png";
import lightLogo from "../../../assets/images/logo/logo-light-2.png";

const StyledLogoWrapper = styled.div`
  text-transform: uppercase;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  > a {
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;

function Logo(props) {
  return (
    <StyledLogoWrapper>
      <Link to="/">
        <img src={props.Type === "DARK" ? darkLogo : lightLogo} />
      </Link>
    </StyledLogoWrapper>
  );
}

export default Logo;
