import React from "react";
import styled from "styled-components";
import LoadingWrapper from "./SC/LoadingWrapper";
import Logo from "../../Components/HeaderBar/SC/Logo";

const StyledSpinner = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--secondary-color);
`;
const LoadingPragraph = styled.h6`
  color: var(--text-color);
  font-weight: bold;
  opacity: 0.7;
  margin-top: 0.5rem;
  text-transform: capitalize;
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <section className="container d-flex flex-column ">
        <article className="row h-50 justify-content-center align-items-center">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <React.Suspense fallback={<p>..</p>}>
              <Logo
                Type={localStorage.getItem("THEME_CONDITINAL_VALUE") || "LIGHT"}
              />
            </React.Suspense>
          </div>
        </article>
        <article className="row h-25">
          <div className="col-12 d-flex flex-column gap-3 justify-content-center align-items-center ">
            <StyledSpinner
              className="spinner-border spinner-border-sm "
              role={"status"}
            >
              <span className="visually-hidden">Loading...</span>
            </StyledSpinner>
            <LoadingPragraph>Loading ...</LoadingPragraph>
          </div>
        </article>
      </section>
    </LoadingWrapper>
  );
};

export default Loading;
