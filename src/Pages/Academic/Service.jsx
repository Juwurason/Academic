import React from "react";

// Libraries
import { Col, Container, Row } from "react-bootstrap";
import { m } from "framer-motion";
import { SwiperSlide, Swiper } from "swiper/react";
import { Parallax } from "react-scroll-parallax";
import { Keyboard } from "swiper/modules";
import { Link as ScrollTo } from "react-scroll";

// Components
import Services from "../../Components/Services/Services";
import CustomIconWithText from "../../Components/CustomIconWithText/CustomIconWithText";
import { fadeIn } from "../../Functions/GlobalAnimations";
import Overlap from "../../Components/Overlap/Overlap";
import bg1 from "../../Assets/img/img/sch1.jpg";
import bg2 from "../../Assets/img/img/sch1.jpg";

// Data
import { serviceData5 } from "../../Components/Services/ServicesData";
import Section from "./Components/Header/Section";
import HeaderCom from "./Components/Header";
import FooterCom from "./Components/Footer";

const OurServicesComp = (props) => {
  const swiperRef = React.useRef(null);
  return (
    <div>
      {/* Header Start */}
      <HeaderCom props={props} />
      {/* Header End */}
      {/* Section Start */}
      <Section
        title={"Our services"}
        caption={"Empowering knowledge for a lifetime of success"}
      />
      {/* Section End */}

      {/* Section Start */}
      <section className="py-[130px] overflow-hidden lg:py-[90px] sm:py-[75px] xs:py-[50px]">
        <Container>
          <Row className="items-center justify-center">
            <Col lg={5} md={9} className="mb-[10px] md:mb-28">
              <span className="font-serif mb-[20px] text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] inline-block uppercase font-medium tracking-[1px]">
                Academic Excellence
              </span>
              <h4 className="font-serif font-semibold text-darkgray w-[95%]">
                Shaping Futures through Knowledge
              </h4>
              <p className="w-[80%] mb-[25px] lg:w-[95%]">
                Our institution is dedicated to fostering academic growth and
                delivering exceptional education. From personalized learning
                experiences to collaborative projects, we empower students to
                reach their full potential and create a lasting impact.
              </p>
              <ScrollTo
                to="services"
                offset={0}
                delay={0}
                spy={true}
                smooth={true}
                duration={800}
              ></ScrollTo>
            </Col>
            <Col
              lg={7}
              md={9}
              xs={12}
              className="px-[55px] md:pr-[50px] md:pl-[5px]"
            >
              <m.figure className="image-back-offset-shadow w-100">
                <m.img
                  className="rounded-[6px] w-auto h-auto"
                  src={`${bg1}`}
                  alt="our-services"
                  width="572.5"
                  height="436.53"
                  initial={{ opacity: 0, x: "0", y: "0" }}
                  whileInView={{ opacity: 1, x: "10px", y: "-20px" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, easing: "linear" }}
                />
                <m.span
                  className="rounded-[6px]"
                  {...{ ...fadeIn, animate: { x: "35px", y: "5px" } }}
                ></m.span>
              </m.figure>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="bg-lightgray z-[1] relative py-[130px] lg:py-[90px] sm:py-[75px] xs:py-[50px]">
        <Container>
          <Row className="justify-center">
            <Col
              md={6}
              className="font-serif justify-center flex flex-col items-center mb-20 sm:mb-12"
            >
              <span className="mb-[10px] inline-block uppercase font-medium text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] tracking-[1px]">
                Inspiring Minds
              </span>
              <h5 className="text-darkgray font-semibold -tracking-[1px]">
                Innovative Learning Solutions
              </h5>
            </Col>
          </Row>
          <Row className="justify-center">
            <Col lg={12} md={10} xs={12} className="xs:px-0">
              <Services
                grid="row-cols-lg-3 row-cols-1 md:my-0 md:mx-auto gap-y-[15px]"
                theme="service-style-05"
                className=""
                data={serviceData5}
                animation={fadeIn}
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      <FooterCom />
    </div>
  );
};

export default OurServicesComp;
