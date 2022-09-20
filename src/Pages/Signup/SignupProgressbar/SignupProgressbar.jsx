import React from "react";
import styled from "styled-components";

const ProggressbarWrapper = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgressValue = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  text-align: center;
  ${(props) =>
    props.Fill === "string" && "background-color : var(--secondary-color"};
`;

function SignupProgressbar() {
  return <ProggressbarWrapper>SignupProgressbar</ProggressbarWrapper>;
}

export default SignupProgressbar;
