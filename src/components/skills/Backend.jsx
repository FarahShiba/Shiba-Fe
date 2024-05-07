import React from "react";
import { Row, Col } from "react-bootstrap";

const Backend = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Backend Developer</h3>
      <Row className="skills-box">
        <Col md={6} className="skills-group">
          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">API</h3>
              <span>Basic</span>
            </div>
          </div>

          <div className="skills-data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills-name">MySql</h3>
              <span>Basic</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Backend;
