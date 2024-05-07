import React from "react";
import { Row, Col } from "react-bootstrap";

const Frontend = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Frontend Developer</h3>

      <Row className="skills-box py-1">
        <Col md={6} className="skills-group">
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">HTML</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>

          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">CSS</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>

          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">JavaScript</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>

          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">Bootstrap</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">React</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">Design(Figma & adobe)</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Frontend;
