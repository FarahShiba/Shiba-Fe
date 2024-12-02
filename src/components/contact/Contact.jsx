import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Badge,
} from "react-bootstrap";

import style from "./Contact.module.scss";
import useTheme from "../../hooks/useTheme";

const Contact = () => {
  const form = useRef();
  const { theme } = useTheme();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ceabf0b",
      "template_aarhuxa",
      form.current,
      "I50O6BVKXPyHnEaXs"
    );
    e.target.reset();
  };

  return (
    <div className={`${style[theme]}`}>
      <section className={`contact ${style.contact}`} id="contact">
        <h2 className={`section____title ${style.darkText}`}>Get in touch</h2>
        <span className={`section____subtitle ${style.darkText}`}>
          Contact Me👋🏻
        </span>

        <Container className={`contact_container ${style.darkText}`}>
          <Row className="justify-content-md-center">
            <Col lg={5} md={6} sm={12} className="contact_content mb-3">
              <h3 className="contact---title">Talk to me</h3>
              <div className="contact_info">
                <Card className="contact_card">
                  <Card.Body>
                    <Card.Title>Email</Card.Title>
                    <Card.Text>tambunanfarahshiba@gmail.com</Card.Text>
                    <Button
                      className="btn-custom"
                      target="_blank"
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=tambunanfarahshiba@gmail.com&su=Let's%20Connect&body=Hi%20Farah,%0D%0A%0D%0AI'd%20like%20to%20connect%20with%20you%20regarding%20a%20project.%0D%0A%0D%0AThanks!"
                    >
                      Write Me
                    </Button>
                  </Card.Body>
                </Card>

                <Card className="contact_card">
                  <Card.Body>
                    <Card.Title>Linkedin</Card.Title>
                    <Card.Text>
                      If You want to connect with me, just click the button
                      below.
                    </Card.Text>
                    <Button
                      target="_blank"
                      className="btn-custom"
                      href="https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit, more information!"
                    >
                      More Information
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col lg={5} md={6} sm={12} className="contact_content">
              <h3 className="contact---title">Write Me On Your Project</h3>
              <Form ref={form} onSubmit={sendEmail} className="contact_form">
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Insert Your Name"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Insert Your Email"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Project</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="project"
                    placeholder="Write Your Project"
                  />
                </Form.Group>

                <Button className="btn-custom" type="submit">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
