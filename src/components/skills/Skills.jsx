import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Frontend from "./Frontend";
import Backend from "./Backend";
import style from "./Skills.module.scss";
import useTheme from "../../hooks/useTheme";

const Skills = () => {
  const { theme } = useTheme();

  return (
    <div className={`${style[theme]}`}>
      <section className={`skills section ${style.skills}`} id="skills">
        <Container>
          <h2 className={`section-title ${style.darkText}`}>Skills</h2>
          <span className={`section-subtitle ${style.darkText} `}>
            My technical level
          </span>

          <Row className="justify-content-center mb-5">
            <Col lg={6}>
              <Frontend />
            </Col>
            <Col lg={6}>
              <Backend />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Skills;
