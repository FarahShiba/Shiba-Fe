import { useState } from "react";
import { Container, Button, Modal, ListGroup, Row, Col } from "react-bootstrap";
import style from "./Services.module.scss";
import useTheme from "../../hooks/useTheme";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const { theme } = useTheme();

  const services = [
    {
      id: 1,
      title: "Front-End & Back-End Developer",
      icon: "bx-laptop",
      description:
        "Delivering impactful web development solutions through hands-on academic projects and volunteer experience, focusing on responsive designs, user engagement, and effective accessibility improvements.",
      details: [
        "Designed and implemented responsive web layouts to enhance navigation and user experience.",
        "Built dynamic web applications with interactive and user-friendly interfaces.",
        "Improved accessibility and usability by aligning designs with web standards and best practices.",
        "Developed prototypes and mockups using Figma to streamline design and development processes.",
        "Integrated branding and design principles into web projects to meet user-centric objectives.",
      ],
    },
    {
      id: 2,
      title: "UI/UX",
      icon: "bx-paint",
      description:
        "Specialized in creating user-centered designs that enhance user experience.",
      details: [
        "Conducted user research to understand user needs and preferences.",
        "Designed wireframes, prototypes, and high-fidelity mockups using Figma.",
        "Improved usability through user testing and iterative design processes.",
        "Created visually appealing and functional user interfaces.",
        "Collaborated with developers to ensure design implementation fidelity.",
      ],
    },
    {
      id: 3,
      title: "Branding",
      icon: "bx-image",
      description:
        "Crafting cohesive branding strategies to establish strong visual identities.",
      details: [
        "Developed brand guidelines for consistent visual and messaging elements.",
        "Designed logos, typography, and color schemes for brand identity.",
        "Created marketing materials, including brochures and social media graphics.",
      ],
    },
  ];

  const toggleTab = (index) => {
    setToggleState(toggleState === index ? 0 : index);
  };

  return (
    <div className={`${style[theme]}`}>
      <section className={`services section ${style.services}`} id="services">
        <Container>
          <h2 className={`section__title ${style.darkText}`}>
            Skills and Expertise
          </h2>
          <span className={`section__subtitle ${style.darkText}`}>
            What I Bring to the Table
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
                    <p>{service.description}</p>
                  </Modal.Body>

                  <ListGroup
                    variant="flush"
                    className="services_modal-services"
                  >
                    {service.details.map((detail, index) => (
                      <ListGroup.Item
                        key={index}
                        className="services_modal-service"
                      >
                        <i className="bx bx-check-circle services_modal-icon"></i>
                        <span className="services_modal-info">{detail}</span>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
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
