import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Section({ title, caption }) {
  return (
    <section className="bg-lightgray py-[42px] sm:py-[30px]">
      <Container>
        <Row className="items-center justify-center">
          <Col
            xl={8}
            lg={6}
            className="text-center font-serif flex items-center md:justify-center sm:block"
          >
            <h1 className="text-lg text-darkgray font-medium mb-0 inline-block">
              {title}
            </h1>
            <span className="pl-[25px] ml-[30px] relative -top-[1px] text-[14px] leading-[25px] block md:inline-block sm:p-0 sm:m-0 sm:mt-[5px] before:absolute before:border-l-[2px] before:border-darkgray before:h-[12px] sm:before:border-0 before:top-[7px] before:left-[-2px] sm:block">
              {caption}
            </span>
          </Col>
          <Col
            xl={4}
            lg={6}
            className="text-center breadcrumb text-sm font-serif md:mt-[15px] justify-end md:justify-center mb-0"
          >
            <ul>
              <li>
                <Link aria-label="link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  aria-label="link"
                  to="#"
                  onClick={(e) => e.preventDefault()}
                >
                  Pages
                </Link>
              </li>
              <li>{title}</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section;
