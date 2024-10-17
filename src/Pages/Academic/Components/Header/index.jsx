import React from "react";
import SocialIcons from "../../../../Components/SocialIcon/SocialIcons";
import Header, {
  HeaderNav,
  Menu,
  Topbar,
} from "../../../../Components/Header/Header";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../../../Assets/img/img/logo.png";

function HeaderCom(props) {
  const SocialIconsData = [
    {
      color: "#0038e3",
      link: "https://www.facebook.com/",
      icon: "fab fa-facebook-f",
    },
    {
      color: "#0038e3",
      link: "https://twitter.com/",
      icon: "fab fa-twitter",
    },
    {
      color: "#0038e3",
      link: "https://www.instagram.com/",
      icon: "fab fa-instagram",
    },
  ];

  return (
    <div>
      <Header
        className="header-with-topbar"
        topSpace={{ desktop: true }}
        type="reverse-scroll"
      >
        <Topbar className="bg-lightgray border-b home-business-topbar border-[#0000001a] sm:hidden md:px-0 header-with-topbar border-bottom px-[35px]">
          <Container fluid>
            <Row className="justify-between pl-[15px] lg:pr-[15px] items-center">
              <Col className="col-12 text-center sm:text-start col-sm-auto me-auto ps-lg-0">
                <SocialIcons
                  theme="social-icon-style-01"
                  size="xs"
                  iconColor="dark"
                  data={SocialIconsData}
                />
              </Col>
              <Col className="col-auto none sm:block text-end lg:px-0">
                <span className="top-bar-contact-list border-l border-inherit	py-[9px] px-[18px] text-[13px] inline-block float-left">
                  <i className="feather-phone-call text-darkgray mr-[6px] text-md relative top-[1px]"></i>{" "}
                  08135381901
                </span>
                <span className="border-l border-inherit py-[9px] pl-[18px] text-[13px] inline-block float-left border-r-0 pr-0">
                  <i className="feather-map-pin text-darkgray mr-[6px] text-md relative top-[1px]"></i>{" "}
                  401 Broadway, 24th Floor
                </span>
              </Col>
            </Row>
          </Container>
        </Topbar>
        <HeaderNav
          fluid="fluid"
          theme="light"
          bg="white"
          menu="light"
          className="px-[35px] py-[0px] md:px-[15px] sm:px-0"
          containerClass="md:px-0"
        >
          <Col className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
            <Link aria-label="header logo" className="flex items-center" to="/">
              <Navbar.Brand className="inline-block xl:p-0 m-0 md:p-5">
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
                {/* <img
                  className="mobile-logo"
                  width="111"
                  height="36"
                  loading="lazy"
                  src={`${logo}`}
                  data-rjs="/assets/img/webp/logo-gradient-sky-blue-pink@2x.webp"
                  alt="logo"
                /> */}
              </Navbar.Brand>
            </Link>
          </Col>
          <Navbar.Toggle className="order-last md:mx-[15px]">
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
          </Navbar.Toggle>
          <Navbar.Collapse className="col-auto justify-end p-0">
            <Menu {...props} />
          </Navbar.Collapse>
        </HeaderNav>
      </Header>
    </div>
  );
}

export default HeaderCom;
