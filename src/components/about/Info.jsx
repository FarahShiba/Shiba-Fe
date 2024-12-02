import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Info = () => {
  return (
    <Container className="about_info">
      <Row className=" justify-content-center">
        <Col xs={12} sm={6} md={4} className="about_box">
          <i className="bx bx-award about_icon"></i>
          <h3 className="about_title">Volunteer Experience</h3>
          <span className="about_subtitle">
            Web Designer, Karinya Counselling
          </span>
        </Col>

        <Col xs={12} sm={6} md={4} className="about_box">
          <i className="bx bx-briefcase-alt about_icon"></i>
          <h3 className="about_title">Academic Projects</h3>
          <span className="about_subtitle">
            Music Web Application, Fashion Store Web Application, and more
          </span>
        </Col>

        <Col xs={12} sm={7} md={4} className="about_box">
          <i className="bx bx-support about_icon"></i>
          <h3 className="about_title">Skills</h3>
          <span className="about_subtitle">Front-End and Back-End</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Info;
