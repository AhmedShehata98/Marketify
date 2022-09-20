import React, { useCallback } from "react";
import styled from "styled-components";
import InputsWrapper from "../../../Components/FormComponents/InputsWrapper";
import Title from "../../../Components/Titles/Title";
import { Formik, Form, Field } from "formik";
import GMaps from "../../../Components/GoogleMaps/GMaps";

const StyledChangeAddress = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem 1rem 1rem;
`;

function ChangeAddress(props) {
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };

  const handleCloseModal = useCallback(() => {
    props.$setshowModal((open) => (open = false));
    props.$setShowChangeaddress((open) => (open = false));
  }, []);

  return (
    <StyledChangeAddress {...props}>
      <Title titleTypography="change address">
        <button
          type="button"
          className="btn btn-close"
          onClick={handleCloseModal}
        ></button>
      </Title>
      <GMaps location={location} zoom={12} />
    </StyledChangeAddress>
  );
}

export default ChangeAddress;
