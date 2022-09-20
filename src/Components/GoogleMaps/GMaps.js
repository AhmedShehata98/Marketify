import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import LocationPin from "./LocationPin";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

function GMaps({ location, zoom }) {
  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDciJ3u_GuswFV-gdkFxUGqecn8PjM61Gw" }}
        defaultCenter={location}
        defaultZoom={zoom}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </Wrapper>
  );
}

export default GMaps;
