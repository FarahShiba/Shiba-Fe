import React from "react";
import { Row, Col } from "react-bootstrap";

const Backend = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Backend Developer</h3>
      <Row className="skills-box">
        <Col md={6} className="skills-group">
          <div className="skills-data">
            <div>
              <h3 className="skills-name">
                <i className="bx bx-badge-check skill-icon"></i> Node.js &
                Express.js
              </h3>
              <p className="skills-description">
                Competent in designing and implementing RESTful APIs and
                server-side logic.
              </p>
            </div>
          </div>

          <div className="skills-data">
            <div>
              <h3 className="skills-name">
                {" "}
                <i className="bx bx-badge-check skill-icon"></i> GraphQL
              </h3>
              <p className="skills-description">
                Familiar with building flexible and efficient APIs for optimized
                data querying.
              </p>
            </div>
          </div>

          <div className="skills-data">
            <div>
              <h3 className="skills-name">
                {" "}
                <i className="bx bx-badge-check skill-icon"></i> Firebase
              </h3>
              <p className="skills-description">
                Hands-on experience with authentication, cloud storage, and
                real-time database integration.
              </p>
            </div>
          </div>

          <div className="skills-data">
            <div>
              <h3 className="skills-name">
                {" "}
                <i className="bx bx-badge-check skill-icon"></i> MongoDb
              </h3>
              <p className="skills-description">
                Knowledgeable in managing relational databases for scalable
                applications.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Backend;
