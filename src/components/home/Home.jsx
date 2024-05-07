import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import About from "../about/About";
import Skills from "../skills/Skills";
import Services from "../services/Services";
import Portfolio from "../portfolio/Portfolio";
import Qualification from "../qualification/Qualification";
import Contact from "../contact/Contact";
import style from "./Home.module.scss";
import useTheme from "../../hooks/useTheme";

function Home() {
  const { theme } = useTheme();

  return (
    <div className={`${style[theme]}`}>
      <section className={`home section ${style.home}`} id="home">
        <Container
          fluid
          className="align-items-center justify-content-between home-content py-6"
        >
          <Row className="home-content mb-3">
            <Col xs={12} md={4} className="social-wrapper mb-4">
              <Social />
            </Col>

            <Col
              xs={12}
              md={7}
              className="home-img-wrapper d-flex justify-content-center mb-3"
            >
              <div className="home-img mb-3"></div>
              <Data />
            </Col>

            <Col className="data-wrapper"></Col>
          </Row>
          <ScrollDown />
        </Container>
      </section>
      <About />
      <Portfolio />
      <Skills />
      <Services />
      <Qualification />
      <Contact />
    </div>
  );
}

export default Home;
