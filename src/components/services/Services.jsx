import { useState } from "react";
import { Container, Button, Modal, ListGroup, Row, Col } from "react-bootstrap";
import style from "./Services.module.scss";
import useTheme from "../../hooks/useTheme";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const { theme } = useTheme();

  const services = [
    { id: 1, title: "Web Developer", icon: "bx-laptop" },
    { id: 2, title: "UI/UX", icon: "bx-paint" },
    { id: 3, title: "Marketing", icon: "bx-image" },
  ];

  const toggleTab = (index) => {
    setToggleState(toggleState === index ? 0 : index);
  };

  return (
    <div className={`${style[theme]}`}>
      <section className={`services section ${style.services}`} id="services">
        <Container>
          <h2 className={`section__title ${style.darkText}`}>Services</h2>
          <span className={`section__subtitle ${style.darkText}`}>
            What I offer
          </span>

          <Row className="justify-content-md-center">
            {services.map((service) => (
              <Col
                key={service.id}
                lg={3}
                md={4}
                sm={12}
                className="services_content"
              >
                <div>
                  <i className={`bx ${service.icon} service_icon`}></i>
                  <h3 className="services_title">{service.title}</h3>
                </div>
                <Button
                  variant="outline"
                  onClick={() => toggleTab(service.id)}
                  className="services_button"
                >
                  View More
                  <i className="bx bx-chevron-right services_button-icon"></i>
                </Button>

                <Modal
                  show={toggleState === service.id}
                  onHide={() => toggleTab(0)}
                  size="lg"
                  aria-labelledby={`contained-modal-title-vcenter-${service.id}`}
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title
                      id={`contained-modal-title-vcenter-${service.id}`}
                    >
                      {service.title}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                      Service with more than 3 years of experience. Providing
                      quality work to clients and companies.
                    </p>

                    <ListGroup
                      variant="flush"
                      className="services_modal-services"
                    >
                      <ListGroup.Item className="services_modal-service">
                        <i className="bx bx-check-circle services_modal-icon"></i>
                        <span className="services_modal-info">
                          I develop the user interface.
                        </span>
                      </ListGroup.Item>
                      <ListGroup.Item className="services_modal-service">
                        <i className="bx bx-check-circle services_modal-icon"></i>
                        <span className="services_modal-info">
                          Web page development.
                        </span>
                      </ListGroup.Item>
                      <ListGroup.Item className="services_modal-service">
                        <i className="bx bx-check-circle services_modal-icon"></i>
                        <span className="services_modal-info">
                          I create UX element interactions.
                        </span>
                      </ListGroup.Item>
                      <ListGroup.Item className="services_modal-service">
                        <i className="bx bx-check-circle services_modal-icon"></i>
                        <span className="services_modal-info">
                          I position your company brand.
                        </span>
                      </ListGroup.Item>
                      <ListGroup.Item className="services_modal-service">
                        <i className="bx bx-check-circle services_modal-icon"></i>
                        <span className="services_modal-info">
                          Design and mockups of products for companies.
                        </span>
                      </ListGroup.Item>
                    </ListGroup>
                  </Modal.Body>
                </Modal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;
