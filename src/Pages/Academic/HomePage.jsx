import React, { lazy } from "react";

// Libraries
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import { m } from "framer-motion";

// Components
import { Header, HeaderNav, Menu } from "../../Components/Header/Header";
import Overlap from "../../Components/Overlap/Overlap";
import FooterCom from "./Components/Footer";
import Testimonials from "../../Components/Testimonials/Testimonials";
import { fadeIn } from "../../Functions/GlobalAnimations";
import SideButtons from "../../Components/SideButtons";

// Data
import { IconWithTextData_11 } from "../../Components/IconWithText/IconWithTextData";
import { TestimonialsData02 } from "../../Components/Testimonials/TestimonialsData";
import bg1 from "../../Assets/img/img/sch1.jpeg";
import logo from "../../Assets/img/img/logo.png";

const IconWithText = lazy(() =>
  import("../../Components/IconWithText/IconWithText")
);

const CounterData = [
  {
    number: {
      text: "3650",
    },
  },
];

const AccordionData = [
  {
    title: "What do you mean by item and end product?",
    content:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever when an unknown printer took a galley. Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "What are some examples of permitted end products?",
    content:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever when an unknown printer took a galley. Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Am i allowed to modify the item that i purchased?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod tempor incididunt ut labore et dolore ut enim ad minim veniam, nostrud exercitation. Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut labore et dolore.",
  },
];

const NewHomePage = (props) => {
  return (
    <div style={props.style}>
      {/* Header Start */}
      <Header topSpace={{ md: true }} type="reverse-scroll">
        <HeaderNav
          theme="dark"
          expand="lg"
          className="py-[0px] lg:px-[15px] md:px-0"
          containerClass="sm:px-0"
        >
          <Col className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
            <Link aria-label="header logo" className="flex items-center" to="/">
              <Navbar.Brand className="inline-block p-0 m-0">
                <img
                  className="default-logo"
                  width="111"
                  height="36"
                  loading="lazy"
                  src={`${logo}`}
                  data-rjs="/assets/img/webp/logo-gradient-sky-blue-pink@2x.webp"
                  alt="logo"
                />
                <img
                  className="alt-logo"
                  width="111"
                  height="36"
                  loading="lazy"
                  src={`${logo}`}
                  data-rjs="/assets/img/webp/logo-black@2x.webp"
                  alt="logo"
                />
                <span className="mobile-logo font-bold">Smart City</span>
              </Navbar.Brand>
            </Link>
          </Col>
          <div className="col-auto hidden order-last md:block">
            <Navbar.Toggle className="md:ml-[10px] sm:ml-0">
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse className="col-auto px-0 justify-end">
            <Menu {...props} />
          </Navbar.Collapse>
          <Col className="col-auto text-right pe-0"></Col>
        </HeaderNav>
      </Header>
      {/* Header End */}
      <SideButtons />
      {/* Parallax Section Start */}
      <div className="h-[660px] lg:h-[580px] md:h-[550px] sm:h-[500px] xs:h-[380px] overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-darkgray opacity-30 z-[1]"></div>
        <Parallax
          className="lg-no-parallax bg-cover absolute -top-[50px] left-0 w-full h-[100vh] z-0 lg:-top-[70px] md:h-[600px] md:-top-[50px] xs:h-[450px]"
          translateY={[-40, 40]}
          style={{
            backgroundImage: `url(${bg1})`,
          }}
        ></Parallax>
        <Container className="h-full relative z-[2]">
          <Row className="justify-center h-full">
            <Col
              xl={6}
              lg={7}
              md={8}
              className="relative font-serif text-center flex justify-center flex-col"
            >
              <h1 className="text-white font-bold -tracking-[1px] mb-0">
                Smart City
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Parallax Section End */}

      {/* Section Start */}
      <div className="pt-[130px] pb-[310px] overflow-hidden relative lg:pt-[95px] lg:pb-[275px] md:py-[75px] sm:py-[50px]">
        <Parallax
          className="lg-no-parallax bg-cover absolute left-0 w-full h-full"
          translateY={[-40, 40]}
          style={{
            backgroundImage: `url(/assets/img/webp/our-process-bg-2.webp)`,
          }}
        ></Parallax>
        <div className="top-0 left-0 w-full h-full absolute opacity-75 bg-white"></div>
        <Container>
          <Row className="justify-center text-center">
            <Col md={6} className="relative lg:mx-auto sm:mb-[30px]">
              <div className="flex items-center font-serif text-xmd font-medium mb-[30px]">
                <span className="flex-shrink-0 w-[30px] h-[1px] bg-fastblue mr-[20px]"></span>
                <div className="flex-grow-1 text-fastblue">
                  Unlock Your Potential!
                </div>
              </div>
              <h5 className="font-serif font-medium text-darkgray m-0">
                Introducing SmartCity Institute , Your Partner in Academic
                Success!
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Section Start */}

      {/* Section Start */}
      <m.section
        className="overflow-visible p-10 md:py-[75px] sm:py-[50px]"
        {...fadeIn}
      >
        <Container>
          <Overlap className="mb-32 sm:mb-28 md:mt-0">
            <Row className="justify-center">
              <Col md={12} sm={8}>
                <IconWithText
                  grid="row-cols-1 row-cols-lg-3 row-cols-md-2 gap-y-10"
                  theme="icon-with-text-11"
                  data={IconWithTextData_11}
                  animationDelay={0.2}
                  animation={fadeIn}
                />
              </Col>
            </Row>
          </Overlap>
        </Container>
      </m.section>
      {/* Section End */}

      {/* Section Start*/}
      <m.section
        className=" md:py-[75px] sm:py-[50px] overflow-hidden bg-lightgray"
        {...fadeIn}
      >
        <Container>
          <Row className="justify-center">
            <Col
              lg={6}
              sm={8}
              xl={5}
              className="text-center mb-24 md-mb-20 sm:mb-12"
            >
              <span className="font-serif text-xmd mb-[20px] block text-fastblue font-medium">
                What people say
              </span>
              <h5 className="font-serif text-darkgray font-medium">
                Perfect design and code delivered for your projects
              </h5>
            </Col>
            <Testimonials
              carousel={true}
              carouselOption={{
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                navigation: false,
                autoplay: { delay: 4500, disableOnInteraction: false },
                pagination: { dynamicBullets: true, clickable: true },
                breakpoints: {
                  992: { slidesPerView: 3 },
                  768: { slidesPerView: 2 },
                },
                keyboard: { enabled: true, onlyInViewport: true },
              }}
              className="black-move swiper-pagination-dark swiper-pagination-big pb-[70px]"
              grid="row-cols-1 row-cols-md-2 row-cols-lg-3 gap-y-10 justify-center"
              theme="testimonials-style-02"
              data={TestimonialsData02}
            />
          </Row>
        </Container>
      </m.section>
      {/* Section End*/}

      {/* Footer Start */}
      <FooterCom />
      {/* <FooterStyle01
        theme="dark"
        className="bg-[#262b35] text-slateblue overflow-visible"
      /> */}
      {/* Footer End */}
    </div>
  );
};

export default NewHomePage;
