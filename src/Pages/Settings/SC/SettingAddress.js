import React, { useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

// components
import CustomziedButton from "../../../Components/Buttons/CustomziedButton";
const AddAddressModal = React.lazy(() => import("./AddAddressModal"));

const SettingAddressWrapper = styled.section`
  width: calc(100% - 300px);
  min-height: 50vh;
  padding: 0.5rem;
  border-radius: var(--border-radius);
  margin-top: 0.5rem;

  > .row:nth-child(2) {
    background-color: var(--third-color);
    border-radius: var(--border-radius);
  }
  .password-section {
    padding: 0.5rem;
    background-color: var(--third-color);
    border-radius: var(--border-radius);
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0;
    padding-top: 1rem;
    background-color: var(--primary-color);
  }
`;

const Headding = styled.header`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
  background-color: var(--primary-color);

  > button {
    font-size: 1.2rem;
    border: none;
    background-color: var(--third-color);
    border-radius: 45px;
    aspect-ratio: 1 / 1;
    height: inherit;
    display: none;

    &:hover {
      color: var(--secondary-color);
    }

    > svg {
      user-select: none;
      pointer-events: none;
    }

    @media (max-width: 768px) {
      display: block;
    }
  }

  > h6 {
    text-transform: uppercase;
    margin-bottom: 0;
    border-radius: 45px;
  }
`;

function SettingAddress() {
  const buttonRef = useRef();
  const addAddressModal = createPortal(
    <React.Suspense fallback={<span>.......</span>}>
      <AddAddressModal />
    </React.Suspense>,
    document.getElementById("profile-page-modal")
  );

  function handleShowAddAddressModal({ currentTarget }) {
    const myModal = document.getElementById("AddAddressModal");

    myModal.classList.toggle("show");
    if (myModal.classList.contains("show")) {
      document.body.style.overflow = "hidden";
      document.body.style.marginBlockEnd = "17px";
      myModal.style.display = "block";
      myModal.style.background = "#403f3fb0";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.marginBlockEnd = "initial";
      myModal.style.display = "none";
      myModal.style.background = "transparent";
    }
  }
  return (
    <SettingAddressWrapper>
      {addAddressModal}
      <article className="row">
        <div className="col-12 mb-3">
          <h3 className="fw-semibold text-uppercase">adresses</h3>
          <small className="text-muted">
            add your location address from here and manage your adresses .
          </small>
          <br />
          <span className="col-12 col-md-4 d-inline-block">
            <CustomziedButton
              type="button"
              md
              ref={buttonRef}
              onClick={(e) => handleShowAddAddressModal(e)}
            >
              add new address
            </CustomziedButton>
          </span>
        </div>
      </article>
    </SettingAddressWrapper>
  );
}

export default SettingAddress;
