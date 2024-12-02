import { useState } from "react";
import { Tab, Tabs, Card, Container, Row, Col } from "react-bootstrap";
import {
  UilGraduationCap,
  UilBriefcaseAlt,
  UilCalendarAlt,
} from "@iconscout/react-unicons";

import style from "./Qualification.module.scss";
import useTheme from "../../hooks/useTheme";

const Qualification = () => {
  const [key, setKey] = useState("education");
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <div
      className={`${style.qualification} ${
        isDarkTheme ? style.dark : style.light
      }`}
    >
      <Container
        fluid
        className={`qualification section qualification_container`}
      >
        <Row>
          <Col xs={12}>
            <h2 className={`section--title ${style.darkText}`}>
              Qualification
            </h2>
            <span className={`section--subtitle ${style.darkText}`}>
              My Personal Journey
            </span>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3 qualification_tabs"
            >
              <Tab
                eventKey="education"
                title={
                  <span className="colors__">
                    <UilGraduationCap className="tab-icon" /> Education
                  </span>
                }
              >
                <Row>
                  <Col>
                    <div className="timeline">
                      <Card className="timeline-item">
                        <Card.Body>
                          <div className="timeline-icon">
                            <UilCalendarAlt />
                          </div>
                          <div className="timeline-content">
                            <Card.Title>Bussiness Administration</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                              Indonesia - Padjajadjaran University
                            </Card.Subtitle>
                            <Card.Text>2018 - 2022</Card.Text>
                          </div>
                        </Card.Body>
                      </Card>

                      <Card className="timeline-item">
                        <Card.Body>
                          <div className="timeline-icon">
                            <UilCalendarAlt />
                          </div>
                          <div className="timeline-content">
                            <Card.Title>Web Development</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                              Australia - Holmesglen Institute of Technology
                            </Card.Subtitle>
                            <Card.Text>2023</Card.Text>
                          </div>
                        </Card.Body>
                      </Card>

                      <Card className="timeline-item">
                        <Card.Body>
                          <div className="timeline-icon">
                            <UilCalendarAlt />
                          </div>
                          <div className="timeline-content">
                            <Card.Title>Front end & Back end</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                              Australia - Holmesglen Institute of Technology
                            </Card.Subtitle>
                            <Card.Text>Feb 2024 - Nov 2024</Card.Text>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                </Row>
              </Tab>

              <Tab
                eventKey="experience"
                title={
                  <span className="colors__">
                    <UilBriefcaseAlt className="tab-icon" /> Experience
                  </span>
                }
              >
                <Row>
                  <Col>
                    <div className="timeline">
                      <Card className="timeline-item">
                        <Card.Body>
                          <div className="timeline-icon">
                            <UilCalendarAlt />
                          </div>
                          <div className="timeline-content">
                            <Card.Title>Marketing Specialist</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                              Indonesia - Annise Herbal
                            </Card.Subtitle>
                            <Card.Text>2020 - 2022</Card.Text>
                          </div>
                        </Card.Body>
                      </Card>

                      <Card className="timeline-item">
                        <Card.Body>
                          <div className="timeline-icon">
                            <UilCalendarAlt />
                          </div>
                          <div className="timeline-content">
                            <Card.Title>Freelance</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                              Indonesia - Working with Client
                            </Card.Subtitle>
                            <Card.Text>2020 - 2023</Card.Text>
                          </div>
                        </Card.Body>
                      </Card>

                      <Card className="timeline-item">
                        <Card.Body>
                          <div className="timeline-icon">
                            <UilCalendarAlt />
                          </div>
                          <div className="timeline-content">
                            <Card.Title>Practice</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                              Australia - Practice website and design on my
                              Campus.
                            </Card.Subtitle>
                            <Card.Text>Feb 2024 - Nov 2024</Card.Text>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Qualification;
