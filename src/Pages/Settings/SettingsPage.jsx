import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import Loading from "../../Layout/Loading/Loading";
import SectionWrapper from "../../Layout/SectionWrapper";
import { RoutesList } from "../../Routes/RoutesList";
import { breakpoints } from "../../StyledComponentsVariables/breakPoints";

const ProfileSettingsList = React.lazy(() =>
  import("./SC/ProfileSettingsList")
);

const SettingsPage = () => {
  // const { pathname } = useLocation();
  const Navigate = useNavigate();
  useEffect(() => {
    document.title = "Marketify - Account preferences";
  }, []);

  useEffect(() => {
    Navigate(RoutesList.profile.personalInfo);
  }, []);

  return (
    <SectionWrapper>
      <React.Suspense fallback={<Loading />}>
        <secion className="container d-flex justify-content-between">
          <ProfileSettingsList />
          <Outlet />
        </secion>
      </React.Suspense>
    </SectionWrapper>
  );
};

export default SettingsPage;
