import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Nav,
} from "react-bootstrap";

import style from "./Footer.module.scss";
import useTheme from "../../hooks/useTheme";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <div className={`${style[theme]}`}>
      <footer className={`footer ${style.footer} `}>
        <Container className="footer_container">
          <Row className="justify-content-md-center">
            <Col xs={12} md={4}>
              <h1 className={`footer_title ${style.darkText}`}>
                Farah S Tambunan
              </h1>
            </Col>
            <Col md="auto">
              <ListGroup horizontal className="footer_list">
                <ListGroupItem className="bg-transparent border-0">
                  <Nav.Link href="#about" className="footer_link">
                    About
                  </Nav.Link>
                </ListGroupItem>

                <ListGroupItem className="bg-transparent border-0">
                  <Nav.Link href="#portfolio" className="footer_link">
                    Projects
                  </Nav.Link>
                </ListGroupItem>
              </ListGroup>
            </Col>

            <Col xs={12} lg={4}>
              <div>
                <Nav className="justify-content-center">
                  <Nav.Item>
                    <Nav.Link
                      href="https://www.linkedin.com/feed/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className={`${style.darkText} bx bxl-linkedin footer_icon`}
                      ></i>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="https://github.com/FarahShiba?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className={`${style.darkText} bx bxl-github footer_icon`}
                      ></i>
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link
                      href="https://www.instagram.com/farahshiba_/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className={`${style.darkText} bx bxl-instagram footer_icon`}
                      ></i>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="text_center">
              <span className={`footer_copy ${style.darkText}`}>
                &#169; All rights reserved
              </span>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
