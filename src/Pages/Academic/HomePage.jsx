// import React, { lazy } from "react";

// // Libraries
// import { Col, Container, Row } from "react-bootstrap";
// import { Autoplay, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { m } from "framer-motion";

// // Components
// import { fadeIn } from "../../Functions/GlobalAnimations";
// import Buttons from "../../Components/Button/Buttons";
// import InteractiveBanners02 from "../../Components/InteractiveBanners/InteractiveBanners02";
// import Piechart from "../../Components/PieChart/PieChart";
// import Testimonials from "../../Components/Testimonials/Testimonials";
// import Tab01 from "../../Components/Tab/Tab01";
// import SideButtons from "../../Components/SideButtons";

// // Data
// import { InteractiveBannersData02 } from "../../Components/InteractiveBanners/InteractiveBannersData";
// import { TabData01 } from "../../Components/Tab/TabData";
// import { IconWithTextData_02 } from "../../Components/IconWithText/IconWithTextData";
// import { TestimonialsData03 } from "../../Components/Testimonials/TestimonialsData";
// import InViewPort from "../../Components/InViewPort";
// import bg1 from "../../Assets/img/img/sch11.jpeg";
// import bg2 from "../../Assets/img/img/sch2.jpg";
// import bg3 from "../../Assets/img/img/sch3.jpg";
// import banner from "../../Assets/img/img/banner.jpg";
// import HeaderCom from "./Components/Header";
// import FooterCom from "./Components/Footer";

// const IconWithText = lazy(() =>
//   import("../../Components/IconWithText/IconWithText")
// );

// const SwiperData = [
//   {
//     img: bg1,
//     title: "Empower Learning for Everyone",
//     subtitle: "Building engaging educational platforms",
//   },
//   {
//     img: bg2,
//     title: "Start Your Educational Journey Today",
//     subtitle: "Providing innovative tools for learning success",
//   },
//   {
//     img: bg3,
//     title: "The Future of Education is Here",
//     subtitle: "Creating digital solutions for modern education",
//   },
// ];

// const PiechartData = [
//   {
//     percentage: 92,
//     title: "Academic Excellence",
//     content: "Dedicated to fostering high standards in education and learning.",
//   },
//   {
//     percentage: 90,
//     title: "Student Engagement",
//     content:
//       "Enhancing learning through interactive and innovative approaches.",
//   },
// ];

// const IconWithTextData = [
//   {
//     icon: "line-icon-Money-Bag text-[#b7b7b7] text-[40px]",
//     title: "Innovative Teaching Methods",
//     content:
//       "Empower educators with creative strategies to enhance student learning outcomes.",
//   },
//   {
//     icon: "line-icon-Gear-2 text-[#b7b7b7] text-[40px]",
//     title: "Customizable Learning Tools",
//     content:
//       "Provide learners with flexible tools that adapt to different learning styles and needs.",
//   },
//   {
//     icon: "line-icon-Talk-Man text-[#b7b7b7] text-[40px]",
//     title: "Engaging Student Interaction",
//     content:
//       "Facilitate active participation and collaboration through engaging activities and discussions.",
//   },
//   {
//     icon: "line-icon-Cursor-Click2 text-[#b7b7b7] text-[40px]",
//     title: "Easy-to-Use Learning Platforms",
//     content:
//       "Deliver seamless education experiences without the need for technical expertise.",
//   },
// ];

// const NewHomePage = (props) => {
//   return (
//     <div style={props.style}>
//       <SideButtons />
//       {/* Header Start */}
//       <HeaderCom props={props} />
//       {/* Header End */}

//       {/* Section Start */}
//       <section className="full-screen md:h-[600px] sm:h-[500px]">
//         <Swiper
//           className="slider-nav-dark white-move swiper-pagination-03 swiper-pagination-light swiper-pagination-large h-full"
//           modules={[Pagination, Autoplay]}
//           slidesPerView={1}
//           spaceBetween={0}
//           loop={true}
//           autoplay={{ delay: 4500, disableOnInteraction: false }}
//           pagination={{ dynamicBullets: false, clickable: true }}
//         >
//           {SwiperData.map((item, i) => {
//             return (
//               <SwiperSlide
//                 key={i}
//                 style={{ backgroundImage: `url(${item.img})` }}
//                 className="bg-no-repeat	bg-cover	overflow-hidden relative bg-center"
//               >
//                 <div className="absolute h-full w-full top-0 left-0 bg-gradient-dark-slate-blue"></div>
//                 <Container className="h-full">
//                   <Row className="h-full">
//                     <Col
//                       xl={6}
//                       lg={7}
//                       sm={8}
//                       xs={12}
//                       className="h-full text-white font-serif justify-center flex-col relative flex"
//                     >
//                       <p className="mb-[40px] font-light text-xmd opacity-70 xs:mb-[20px]">
//                         {item.subtitle}
//                       </p>
//                       <h2 className="mb-[55px] font-semibold xs:mb-[35px]">
//                         {item.title}
//                       </h2>
//                     </Col>
//                   </Row>
//                 </Container>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//       </section>
//       {/* Section End */}

//       {/* Section Start */}
//       <section className="py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
//         <Container>
//           <Row className="justify-center">
//             <m.div
//               className="col-xl-3 col-lg-4 col-sm-7 flex flex-col md:mb-24"
//               {...{ ...fadeIn, transition: { delay: 0.2 } }}
//             >
//               <div className="mb-[20px] md:text-center sm:mb-[10px]">
//                 <span className="font-serif text-md uppercase font-medium text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]">
//                   About company
//                 </span>
//               </div>
//               <h3 className="alt-font text-darkgray font-semibold mb-[20px] font-serif md:text-center md:mb-[30px] heading-5">
//                 Empowering Minds Through Innovative Learning
//               </h3>
//             </m.div>
//             <Col xl={{ span: 7, offset: 2 }} lg={8}>
//               <IconWithText
//                 grid="row-cols-1 row-cols-lg-2 row-cols-sm-2 gap-y-[40px]"
//                 theme="icon-with-text-01"
//                 data={IconWithTextData}
//                 animation={fadeIn}
//                 animationDelay={0.2}
//               />
//             </Col>
//           </Row>
//         </Container>
//       </section>
//       {/* Section End */}

//       {/* Lazy Load HTML */}
//       <InViewPort>
//         {/* Section Start */}
//         <section className="py-[130px] lg:py-[90px] md:py-[75px] sm:[50px] bg-[#f7f8fc] overflow-hidden">
//           <Container>
//             <Row className="justify-center">
//               <m.div
//                 className="col-xl-5 col-lg-6 col-md-8 col-sm-7 mb-20 text-center md:mb-[60px] sm:[44px]"
//                 {...fadeIn}
//               >
//                 <span className="mb-[20px] font-medium text-md font-serif uppercase inline-block text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]">
//                   Why choose us
//                 </span>
//                 <h4 className="font-semibold -tracking-[1px] text-darkgray font-serif block heading-5">
//                   Expertly crafted educational resources for academic excellence
//                 </h4>
//               </m.div>
//             </Row>
//           </Container>
//           <Container>
//             <InteractiveBanners02
//               carousalOption={{
//                 slidesPerView: 1,
//                 spaceBetween: 30,
//                 loop: true,
//                 autoplay: { delay: 2500, disableOnInteraction: false },
//                 breakpoints: {
//                   1200: { slidesPerView: 4 },
//                   992: { slidesPerView: 3 },
//                   768: { slidesPerView: 2 },
//                 },
//               }}
//               data={InteractiveBannersData02}
//               animation={fadeIn}
//               animationDelay={0}
//             />
//           </Container>
//         </section>
//         {/* Section End */}

//         {/* Section Start */}
//         <section className="py-[130px] lg:py-[90px] home-business-piechart md:py-[75px] sm:[50px]">
//           <Container>
//             <Row className="justify-center md:block">
//               <Col
//                 lg={5}
//                 sm={9}
//                 className="text-left flex-col items-start flex md:text-center md:my-0 md:mx-auto md:mb-[70px] md:items-center sm:mb-[65px]"
//               >
//                 <div className="mb-[20px]">
//                   <span className="inline-block font-serif text-md font-medium uppercase text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]">
//                     Our Expertise
//                   </span>
//                 </div>
//                 <h5 className="w-[90%] mb-[20px] font-semibold text-darkgray font-serif sm:mb-[30px] xxs:w-full">
//                   We create academic solutions that inspire learning and drive
//                   student success.
//                 </h5>
//                 <Buttons
//                   href="/services"
//                   className="font-medium font-serif uppercase rounded-none bg-[#fff] hover:bg-black md:mb-[15px] mt-[38px] sm:my-0 sm:mx-auto"
//                   color="#000"
//                   size="sm"
//                   themeColor="#000"
//                   title="Discover"
//                 />
//               </Col>
//               <Col lg={{ offset: 1 }}>
//                 <Piechart
//                   grid="justify-center gap-y-10 row-cols-1 row-cols-sm-2"
//                   className="text-left flex flex-col justify-center items-start md:text-center md:items-center"
//                   theme="piechart-style-02"
//                   data={PiechartData}
//                   pathColor={["#5d6ff9", "#f77993"]}
//                   trailColor="#f5f5f5"
//                   pathWidth={13}
//                   trailWidth={13}
//                   animation={fadeIn}
//                 />
//               </Col>
//             </Row>
//           </Container>
//         </section>
//         {/* Section End */}

//         <hr />
//         {/* Section Start */}
//         <m.section
//           className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]"
//           {...fadeIn}
//         >
//           <Container>
//             <Tab01 data={TabData01} />
//           </Container>
//         </m.section>
//         {/* Section End */}

//         {/* Section Start */}
//         <section className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] bg-[#f7f8fc]">
//           <Container>
//             <Row className="justify-center">
//               <m.div
//                 className="col-xl-6 col-lg-7 col-sm-8 mb-20 text-center w-[51%] xl:mb-[70px] lg:mb-[65px] md:mb-[60px] sm:mb-[55px] md:w-[68%] xs:w-full"
//                 {...fadeIn}
//               >
//                 <span className="inline-block font-serif text-md uppercase mb-[20px] font-medium text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] xs:mb-[15px]">
//                   Our Premium Academic Services
//                 </span>
//                 <h5 className="w-full mb-[20px] font-semibold text-darkgray font-serif -tracking-[1px]">
//                   We specializes in comprehensive educational solutions and
//                   cutting-edge learning technologies.
//                 </h5>
//               </m.div>
//             </Row>
//             <Row className="justify-center">
//               <Col lg={12} md={9} xs={12}>
//                 <IconWithText
//                   grid="row-cols-1 row-cols-lg-2 gap-y-10 justify-center"
//                   theme="icon-with-text-02"
//                   data={IconWithTextData_02}
//                   animation={fadeIn}
//                   animationDelay={0.9}
//                 />
//               </Col>
//             </Row>
//           </Container>
//         </section>
//         {/* Section End */}

//         {/* Section Start */}
//         <section
//           className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] relative bg-cover bg-center"
//           style={{
//             backgroundImage: `url(${banner})`,
//           }}
//         >
//           <div className="absolute top-0 left-0 w-full h-full opacity-60 bg-darkslateblue"></div>
//           <Container className="relative">
//             <Row className="justify-center text-center">
//               <Col xl={7} lg={8} md={10}>
//                 <div className="font-serif text-white">
//                   <m.h4
//                     className="font-semibold mb-[45px]"
//                     {...{ ...fadeIn, transition: { delay: 0.2 } }}
//                   >
//                     Streamlined for academic excellence
//                   </m.h4>
//                   <m.span
//                     className="uppercase tracking-[1px]"
//                     {...{ ...fadeIn, transition: { delay: 0.4 } }}
//                   >
//                     Empowering learning through customization
//                   </m.span>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section>
//         {/* Section End */}

//         {/* Section Start */}
//         <section className="bg-[#f7f8fc] py-[130px] lg:py-[90px] md:py-[75px] sm:[50px]">
//           <Container>
//             <Row className="justify-center">
//               <m.div
//                 className="col-xl-5 col-lg-6 col-sm-8 mb-20 text-center"
//                 {...fadeIn}
//               >
//                 <span className="inline-block font-serif text-md uppercase mb-[20px] font-medium text-gradient bg-gradient-to-r from-[#556fff] via-[#e355ff] to-[#ff798e]">
//                   Student Testimonials
//                 </span>
//                 <h3 className="w-full mb-[20px] font-semibold text-darkgray font-serif heading-5">
//                   Hear what our students and educators are saying about us!
//                 </h3>
//               </m.div>
//             </Row>
//             <Row className="sm:justify-center sm:flex">
//               <Col md={12} sm={8}>
//                 <Testimonials
//                   grid="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-sm-8 gap-y-10 justify-center"
//                   theme="testimonials-style-03"
//                   data={TestimonialsData03}
//                   animation={fadeIn}
//                 />
//               </Col>
//             </Row>
//           </Container>
//         </section>
//         {/* Section End */}

//         {/* <hr /> */}

//         {/* Footer Start */}
//         <FooterCom />
//         {/* Footer End */}
//       </InViewPort>
//     </div>
//   );
// };

// export default NewHomePage;

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
                  Walking is the best possible exercise
                </div>
              </div>
              <h5 className="font-serif font-medium text-darkgray m-0">
                Litho specializes in strategy, creativity design and innovative
                technology build.
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Section Start */}

      {/* Section Start */}
      <m.section
        className="overflow-visible bg-lightgray p-10 md:py-[75px] sm:py-[50px]"
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
