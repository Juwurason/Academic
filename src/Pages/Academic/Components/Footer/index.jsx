import React from "react";
import FooterMenu, { Footer } from "../../../../Components/Footers/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterData from "../../../../Components/Footers/FooterData";
import logo from "../../../../Assets/img/img/logowhite.png";

function FooterCom() {
  return (
    <div>
      <Footer className="bg-[#262b35] text-slateblue" theme="dark">
        <div className="py-[7%] lg:py-[8%] sm:py-[50px]">
          <Container>
            <Row className="justify-between md:justify-center sm:justify-between">
              <Col
                className="m-0 md:text-center sm:text-start"
                lg={{ offSet: 0, span: 3, order: 0 }}
                sm={{ span: 6, order: 5, offSet: 2 }}
                md={{ span: 4, offset: 0, order: 5 }}
                xs={{ span: 12, order: 5, offSet: 2 }}
              >
                <Link
                  to="/"
                  className="text-slateblue mb-[15px] mt-[5px] inline-block"
                >
                  <img
                    loading="lazy"
                    src={`${logo}`}
                    alt="logo"
                    width="111"
                    height="36"
                  />
                </Link>
                <p className="mb-[25px] text-slateblue sm:w-[90%] md:mb-[15px] md:text-center sm:text-start">
                  We create innovative digital learning experiences to boost
                  student engagement.
                </p>

                <p>© Copyright {new Date().getFullYear()} </p>
              </Col>
              <FooterMenu
                data={FooterData.slice(0, 4)}
                lg={{ span: 2, offSet: 1, order: 0 }}
                md={{ span: 3, order: 0 }}
                sm={{ span: 4, offSet: 1, order: 2 }}
                className="xl:px-[15px] md:mb-[40px] xs:mb-[25px]"
                titleClass="capitalize"
              />
            </Row>
          </Container>
        </div>
      </Footer>
    </div>
  );
}

export default FooterCom;
