import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Info = () => {
  return (
    <Container className="about_info">
      <Row className=" justify-content-center">
        <Col xs={12} sm={6} md={4} className="about_box">
          <i className="bx bx-award about_icon"></i>
          <h3 className="about_title">Experience</h3>
          <span className="about_subtitle">not working just study</span>
        </Col>

        <Col xs={12} sm={6} md={4} className="about_box">
          <i className="bx bx-briefcase-alt about_icon"></i>
          <h3 className="about_title">Complete</h3>
          <span className="about_subtitle">
            3 + Project from practical on my campus.
          </span>
        </Col>

        <Col xs={12} sm={7} md={4} className="about_box">
          <i className="bx bx-support about_icon"></i>
          <h3 className="about_title">Support</h3>
          <span className="about_subtitle">Online Support 24/7</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Info;
