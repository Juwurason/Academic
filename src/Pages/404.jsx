import React, { lazy } from "react";

// Libraries
import { Col, Container } from "react-bootstrap";
import { m } from "framer-motion";

// Components
import Buttons from "../Components/Button/Buttons";
import { fadeIn } from "../Functions/GlobalAnimations";
import HeaderCom from "./Academic/Components/Header";
import FooterCom from "./Academic/Components/Footer";

const SideButtons = lazy(() => import("../Components/SideButtons"));

const NotFoundPage = (props) => {
  return (
    <div style={props.style}>
      {/* Header Start */}
      <HeaderCom props={props} />
      {/* Header End */}
      <SideButtons />
      {/* Section Start */}
      <section
        className="cover-background overflow-hidden flex items-center justify-center p-0"
        style={{ backgroundImage: `url("/assets/img/webp/404-bg.webp")` }}
      >
        <Container>
          <m.div
            className="row items-stretch full-screen justify-center"
            {...fadeIn}
          >
            <Col
              xl={6}
              lg={7}
              md={8}
              className="col-12 text-center flex items-center justify-center flex-col"
            >
              <h6 className="font-serif text-fastblue font-semibold -tracking-[1px] mb-[10px] uppercase">
                Ooops!
              </h6>
              <h1 className="font-serif text-[230px] leading-[230px] font-bold tracking-[-5px] text-darkgray mb-24 lg:text-[170px] lg:leading-[170px] md:text-[130px] md:leading-[130px] md:mb-16 sm:text-[100px] sm:leading-[100px] xs:text-[55px] xs:leading-[55px] xl:text-[200px] xl:leading-[200px]">
                404
              </h1>
              <span className="font-serif font-medium text-darkgray block mb-[20px]">
                This page could not be found!
              </span>
              <Buttons
                className="font-medium font-serif rounded-none uppercase mb-0"
                to="/"
                themeColor={["#556fff", "#ff798e"]}
                size="lg"
                color="#fff"
                title="Back to homepage"
              />
            </Col>
          </m.div>
        </Container>
      </section>
      {/* Section End */}

      {/* Footer Start */}
      <FooterCom />
      {/* Footer End */}
    </div>
  );
};

export default NotFoundPage;
