import React from "react";

// Libraries
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { m } from "framer-motion";

// Components
import IconWithText from "../../Components/IconWithText/IconWithText";
import { fadeIn } from "../../Functions/GlobalAnimations";

// Data
import Section from "./Components/Header/Section";
import HeaderCom from "./Components/Header";
import FooterCom from "./Components/Footer";
import banner from "../../Assets/img/img/sch1.jpg";

const IconWithTextData = [
  {
    icon: "line-icon-Book text-[#b7b7b7] text-[40px]",
    title: "Comprehensive Curriculum",
    content:
      "Our curriculum covers a wide range of subjects, ensuring a well-rounded education that prepares students for future challenges.",
  },
  {
    icon: "line-icon-Student-Male text-[#b7b7b7] text-[40px]",
    title: "Expert Faculty",
    content:
      "Learn from experienced professors and industry experts who bring real-world knowledge into the classroom.",
  },
  {
    icon: "line-icon-Idea-5 text-[#b7b7b7] text-[40px]",
    title: "Innovative Research",
    content:
      "Engage in cutting-edge research projects that push the boundaries of knowledge and prepare you for academic excellence.",
  },
  {
    icon: "line-icon-Monitor-5 text-[#b7b7b7] text-[40px]",
    title: "Digital Learning Resources",
    content:
      "Access a wealth of online resources, including e-books, virtual labs, and interactive modules to enhance your learning experience.",
  },
];

const AboutComp = (props) => {
  return (
    <div>
      <Outlet />
      {/* Header Start */}
      <HeaderCom props={props} />
      {/* Header End */}
      {/* Section Start */}
      <Section
        title={"About us"}
        caption={"Empowering minds, shaping the future"}
      />
      {/* Section End */}
      {/* Section Start */}
      <section
        id="about"
        className="py-[80px] overflow-hidden lg:py-[50px] md:py-[40px] sm:py-[20px] xs:py-[10px]"
      >
        <Container>
          <Row className="justify-center">
            <m.div
              className="flex flex-col md:mb-24 col-xl-3 col-lg-4 col-sm-7"
              {...fadeIn}
            >
              <div className="mb-[20px] md:text-center sm:mb-[10px]">
                <span className="font-serif text-md uppercase font-medium text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]">
                  About
                </span>
              </div>
              <h5 className="font-serif text-darkgray font-semibold mb-[20px] md:text-center md:mb-[30px] xs:w-[90%] xs:mx-auto">
                Nurturing minds with knowledge and innovation.
              </h5>
            </m.div>
            <m.div
              className="col-xl-7 col-lg-8 offset-xl-2"
              {...{ ...fadeIn, transition: { delay: 0.6 } }}
            >
              <IconWithText
                grid="row-cols-1 row-cols-lg-2 row-cols-sm-2 gap-y-10"
                theme="icon-with-text-01"
                data={IconWithTextData}
                animation={fadeIn}
                animationDuration={0.4}
                animationDelay={0.2}
              />
            </m.div>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Info Banner Style 02 */}
      <m.section
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
                <m.h4 {...fadeIn} className="font-semibold mb-[45px]">
                  Inspiring, carefully crafted educational tools for student
                  success
                </m.h4>
                <m.span {...fadeIn} className="uppercase tracking-[1px]">
                  Empower learning with creativity and precision
                </m.span>
              </div>
            </Col>
          </Row>
        </Container>
      </m.section>
      {/* Info Banner Style 02 End */}

      {/* Footer Start */}
      <FooterCom />
      {/* Footer End   */}
    </div>
  );
};

export default AboutComp;
