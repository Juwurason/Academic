import React, { lazy } from "react";

// Libraries
import { Col, Container, Row } from "react-bootstrap";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { m } from "framer-motion";

// Components
import { fadeIn } from "../../Functions/GlobalAnimations";
import Buttons from "../../Components/Button/Buttons";
import InteractiveBanners02 from "../../Components/InteractiveBanners/InteractiveBanners02";
import Piechart from "../../Components/PieChart/PieChart";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Tab01 from "../../Components/Tab/Tab01";
import SideButtons from "../../Components/SideButtons";

// Data
import { InteractiveBannersData02 } from "../../Components/InteractiveBanners/InteractiveBannersData";
import { TabData01 } from "../../Components/Tab/TabData";
import { IconWithTextData_02 } from "../../Components/IconWithText/IconWithTextData";
import { TestimonialsData03 } from "../../Components/Testimonials/TestimonialsData";
import InViewPort from "../../Components/InViewPort";
import bg1 from "../../Assets/img/img/sch1.jpg";
import bg2 from "../../Assets/img/img/sch2.jpg";
import bg3 from "../../Assets/img/img/sch3.jpg";
import banner from "../../Assets/img/img/banner.jpg";
import HeaderCom from "./Components/Header";
import FooterCom from "./Components/Footer";

const IconWithText = lazy(() =>
  import("../../Components/IconWithText/IconWithText")
);

const SwiperData = [
  {
    img: bg1,
    title: "Empower Learning for Everyone",
    subtitle: "Building engaging educational platforms",
  },
  {
    img: bg2,
    title: "Start Your Educational Journey Today",
    subtitle: "Providing innovative tools for learning success",
  },
  {
    img: bg3,
    title: "The Future of Education is Here",
    subtitle: "Creating digital solutions for modern education",
  },
];

const PiechartData = [
  {
    percentage: 92,
    title: "Academic Excellence",
    content: "Dedicated to fostering high standards in education and learning.",
  },
  {
    percentage: 90,
    title: "Student Engagement",
    content:
      "Enhancing learning through interactive and innovative approaches.",
  },
];

const IconWithTextData = [
  {
    icon: "line-icon-Money-Bag text-[#b7b7b7] text-[40px]",
    title: "Innovative Teaching Methods",
    content:
      "Empower educators with creative strategies to enhance student learning outcomes.",
  },
  {
    icon: "line-icon-Gear-2 text-[#b7b7b7] text-[40px]",
    title: "Customizable Learning Tools",
    content:
      "Provide learners with flexible tools that adapt to different learning styles and needs.",
  },
  {
    icon: "line-icon-Talk-Man text-[#b7b7b7] text-[40px]",
    title: "Engaging Student Interaction",
    content:
      "Facilitate active participation and collaboration through engaging activities and discussions.",
  },
  {
    icon: "line-icon-Cursor-Click2 text-[#b7b7b7] text-[40px]",
    title: "Easy-to-Use Learning Platforms",
    content:
      "Deliver seamless education experiences without the need for technical expertise.",
  },
];

const NewHomePage = (props) => {
  return (
    <div style={props.style}>
      <SideButtons />
      {/* Header Start */}
      <HeaderCom props={props} />
      {/* Header End */}

      {/* Section Start */}
      <section className="full-screen md:h-[600px] sm:h-[500px]">
        <Swiper
          className="slider-nav-dark white-move swiper-pagination-03 swiper-pagination-light swiper-pagination-large h-full"
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ dynamicBullets: false, clickable: true }}
        >
          {SwiperData.map((item, i) => {
            return (
              <SwiperSlide
                key={i}
                style={{ backgroundImage: `url(${item.img})` }}
                className="bg-no-repeat	bg-cover	overflow-hidden relative bg-center"
              >
                <div className="absolute h-full w-full top-0 left-0 bg-gradient-dark-slate-blue"></div>
                <Container className="h-full">
                  <Row className="h-full">
                    <Col
                      xl={6}
                      lg={7}
                      sm={8}
                      xs={12}
                      className="h-full text-white font-serif justify-center flex-col relative flex"
                    >
                      <p className="mb-[40px] font-light text-xmd opacity-70 xs:mb-[20px]">
                        {item.subtitle}
                      </p>
                      <h2 className="mb-[55px] font-semibold xs:mb-[35px]">
                        {item.title}
                      </h2>
                    </Col>
                  </Row>
                </Container>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
        <Container>
          <Row className="justify-center">
            <m.div
              className="col-xl-3 col-lg-4 col-sm-7 flex flex-col md:mb-24"
              {...{ ...fadeIn, transition: { delay: 0.2 } }}
            >
              <div className="mb-[20px] md:text-center sm:mb-[10px]">
                <span className="font-serif text-md uppercase font-medium text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]">
                  About company
                </span>
              </div>
              <h3 className="alt-font text-darkgray font-semibold mb-[20px] font-serif md:text-center md:mb-[30px] heading-5">
                Empowering Minds Through Innovative Learning
              </h3>
            </m.div>
            <Col xl={{ span: 7, offset: 2 }} lg={8}>
              <IconWithText
                grid="row-cols-1 row-cols-lg-2 row-cols-sm-2 gap-y-[40px]"
                theme="icon-with-text-01"
                data={IconWithTextData}
                animation={fadeIn}
                animationDelay={0.2}
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Lazy Load HTML */}
      <InViewPort>
        {/* Section Start */}
        <section className="py-[130px] lg:py-[90px] md:py-[75px] sm:[50px] bg-[#f7f8fc] overflow-hidden">
          <Container>
            <Row className="justify-center">
              <m.div
                className="col-xl-5 col-lg-6 col-md-8 col-sm-7 mb-20 text-center md:mb-[60px] sm:[44px]"
                {...fadeIn}
              >
                <span className="mb-[20px] font-medium text-md font-serif uppercase inline-block text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]">
                  Why choose us
                </span>
                <h4 className="font-semibold -tracking-[1px] text-darkgray font-serif block heading-5">
                  Expertly crafted educational resources for academic excellence
                </h4>
              </m.div>
            </Row>
          </Container>
          <Container>
            <InteractiveBanners02
              carousalOption={{
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: { delay: 2500, disableOnInteraction: false },
                breakpoints: {
                  1200: { slidesPerView: 4 },
                  992: { slidesPerView: 3 },
                  768: { slidesPerView: 2 },
                },
              }}
              data={InteractiveBannersData02}
              animation={fadeIn}
              animationDelay={0}
            />
          </Container>
        </section>
        {/* Section End */}

        {/* Section Start */}
        <section className="py-[130px] lg:py-[90px] home-business-piechart md:py-[75px] sm:[50px]">
          <Container>
            <Row className="justify-center md:block">
              <Col
                lg={5}
                sm={9}
                className="text-left flex-col items-start flex md:text-center md:my-0 md:mx-auto md:mb-[70px] md:items-center sm:mb-[65px]"
              >
                <div className="mb-[20px]">
                  <span className="inline-block font-serif text-md font-medium uppercase text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]">
                    Our Expertise
                  </span>
                </div>
                <h5 className="w-[90%] mb-[20px] font-semibold text-darkgray font-serif sm:mb-[30px] xxs:w-full">
                  We create academic solutions that inspire learning and drive
                  student success.
                </h5>
                <Buttons
                  href="/services"
                  className="font-medium font-serif uppercase rounded-none bg-[#fff] hover:bg-black md:mb-[15px] mt-[38px] sm:my-0 sm:mx-auto"
                  color="#000"
                  size="sm"
                  themeColor="#000"
                  title="Discover"
                />
              </Col>
              <Col lg={{ offset: 1 }}>
                <Piechart
                  grid="justify-center gap-y-10 row-cols-1 row-cols-sm-2"
                  className="text-left flex flex-col justify-center items-start md:text-center md:items-center"
                  theme="piechart-style-02"
                  data={PiechartData}
                  pathColor={["#5d6ff9", "#f77993"]}
                  trailColor="#f5f5f5"
                  pathWidth={13}
                  trailWidth={13}
                  animation={fadeIn}
                />
              </Col>
            </Row>
          </Container>
        </section>
        {/* Section End */}

        <hr />
        {/* Section Start */}
        <m.section
          className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]"
          {...fadeIn}
        >
          <Container>
            <Tab01 data={TabData01} />
          </Container>
        </m.section>
        {/* Section End */}

        {/* Section Start */}
        <section className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] bg-[#f7f8fc]">
          <Container>
            <Row className="justify-center">
              <m.div
                className="col-xl-6 col-lg-7 col-sm-8 mb-20 text-center w-[51%] xl:mb-[70px] lg:mb-[65px] md:mb-[60px] sm:mb-[55px] md:w-[68%] xs:w-full"
                {...fadeIn}
              >
                <span className="inline-block font-serif text-md uppercase mb-[20px] font-medium text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] xs:mb-[15px]">
                  Our Premium Academic Services
                </span>
                <h5 className="w-full mb-[20px] font-semibold text-darkgray font-serif -tracking-[1px]">
                  We specializes in comprehensive educational solutions and
                  cutting-edge learning technologies.
                </h5>
              </m.div>
            </Row>
            <Row className="justify-center">
              <Col lg={12} md={9} xs={12}>
                <IconWithText
                  grid="row-cols-1 row-cols-lg-2 gap-y-10 justify-center"
                  theme="icon-with-text-02"
                  data={IconWithTextData_02}
                  animation={fadeIn}
                  animationDelay={0.9}
                />
              </Col>
            </Row>
          </Container>
        </section>
        {/* Section End */}

        {/* Section Start */}
        <section
          className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] relative bg-cover bg-center"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-60 bg-darkslateblue"></div>
          <Container className="relative">
            <Row className="justify-center text-center">
              <Col xl={7} lg={8} md={10}>
                <div className="font-serif text-white">
                  <m.h4
                    className="font-semibold mb-[45px]"
                    {...{ ...fadeIn, transition: { delay: 0.2 } }}
                  >
                    Streamlined for academic excellence
                  </m.h4>
                  <m.span
                    className="uppercase tracking-[1px]"
                    {...{ ...fadeIn, transition: { delay: 0.4 } }}
                  >
                    Empowering learning through customization
                  </m.span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Section End */}

        {/* Section Start */}
        <section className="bg-[#f7f8fc] py-[130px] lg:py-[90px] md:py-[75px] sm:[50px]">
          <Container>
            <Row className="justify-center">
              <m.div
                className="col-xl-5 col-lg-6 col-sm-8 mb-20 text-center"
                {...fadeIn}
              >
                <span className="inline-block font-serif text-md uppercase mb-[20px] font-medium text-gradient bg-gradient-to-r from-[#556fff] via-[#e355ff] to-[#ff798e]">
                  Student Testimonials
                </span>
                <h3 className="w-full mb-[20px] font-semibold text-darkgray font-serif heading-5">
                  Hear what our students and educators are saying about us!
                </h3>
              </m.div>
            </Row>
            <Row className="sm:justify-center sm:flex">
              <Col md={12} sm={8}>
                <Testimonials
                  grid="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-sm-8 gap-y-10 justify-center"
                  theme="testimonials-style-03"
                  data={TestimonialsData03}
                  animation={fadeIn}
                />
              </Col>
            </Row>
          </Container>
        </section>
        {/* Section End */}

        {/* <hr /> */}

        {/* Footer Start */}
        <FooterCom />
        {/* Footer End */}
      </InViewPort>
    </div>
  );
};

export default NewHomePage;
