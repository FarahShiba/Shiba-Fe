import React from "react";
import { Row, Col } from "react-bootstrap";

const Frontend = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Frontend Developer</h3>
      <Row className="skills-box py-1">
        <Col md={6} className="skills-group">
          <div className="skills-data">
            <div>
              <h3 className="skills-name">
                <i className="bx bx-badge-check skill-icon"></i> HTML5 & CSS3
              </h3>
              <p className="skills-description">
                Capable of creating responsive and visually appealing layouts.
              </p>
            </div>
          </div>

          <div className="skills-data">
            <div>
              <h3 className="skills-name">
                <i className="bx bx-badge-check skill-icon"></i> JavaScript
              </h3>
              <p className="skills-description">
                Experienced in building dynamic and interactive user interfaces.
              </p>
            </div>
          </div>

          <div className="skills-data">
            <div>
              <h3 className="skills-name">
                {" "}
                <i className="bx bx-badge-check skill-icon"></i> React.js
              </h3>
              <p className="skills-description">
                Adept at developing reusable components and managing application
                state.
              </p>
            </div>
          </div>

          <div className="skills-data">
            <div>
              <h3 className="skills-name">
                <i className="bx bx-badge-check skill-icon"></i> Bootstrap,
                Vanilla Css, SASS
              </h3>
              <p className="skills-description">
                Proficient in creating responsive designs using Bootstrap.
              </p>
            </div>
          </div>

          <div className="skills-data">
            <div>
              <h3 className="skills-name">
                <i className="bx bx-badge-check skill-icon"></i>
                Design (Figma, Canva and wordPress)
              </h3>
              <p className="skills-description">
                Experienced in collaborative design and prototyping.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Frontend;
