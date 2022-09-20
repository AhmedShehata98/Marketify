import React from "react";
import { useLocation } from "react-router-dom";
import ContactInfo from "./SC/ContactInfo";
import FooterWrapper from "./SC/FooterWrapper";
import NewsLetter from "./SC/NewsLetter";

function Footer() {
  const { pathname } = useLocation();
  return (
    <FooterWrapper pathname={pathname}>
      <section className="container">
        <div className="row">
          <div className="col-12">
            <ContactInfo />
            <NewsLetter />
          </div>
          <hr />
          <div className="col-12">
            <small>
              &copy; Marketify E-commerce . all Rights Reserved to "Ahmed
              Shehata (frontend)" - "Mahmoud R. Alnakib (backend)"
            </small>
          </div>
        </div>
      </section>
    </FooterWrapper>
  );
}

export default Footer;
