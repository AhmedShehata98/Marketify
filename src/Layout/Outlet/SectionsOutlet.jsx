import React from "react";
import { Outlet } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";

const CategoryOutlet = () => {
  return (
    <SectionWrapper>
      <section className="container">
        <Outlet />
      </section>
    </SectionWrapper>
  );
};

export default CategoryOutlet;
