import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "../../Layout/SectionWrapper";
import { RoutesList } from "../../Routes/RoutesList";

const NotFound = () => {
  useEffect(() => {
    document.title = "Error 404 - Not Found";
  }, []);
  return (
    <SectionWrapper>
      <section className="container h-100">
        <article className="row d-flex justify-content-between align-items-center h-100 my-auto">
          <div className="col-12 col-md-6 h-100">
            <img
              className="w-100"
              src={
                require("../../assets/images/backgrounds/notfounded.svg")
                  .default
              }
              alt="notfounded-sumnail"
            />
          </div>
          <div className="col-12 col-md-6 h-100">
            <div className="row">
              <div className="col-12">
                <span className="badge bg-danger rounded-pill p-2 text-capitalize opacity-50 mb-2">
                  page not found
                </span>
              </div>
              <div className="col-12">
                <h2 className="text-danger text-uppercase mb-4">
                  Oops ! Error 404 .
                </h2>
                <p className="text-capitalize text-muted">
                  maybe bigfoot has broken this page or page is under build come
                  back to homepage .
                </p>
              </div>
              <div className="col">
                <Link
                  type="button"
                  className="btn btn-outline-secondary rounded-1"
                  to={RoutesList.app}
                >
                  back to homepage
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>
    </SectionWrapper>
  );
};

export default NotFound;
