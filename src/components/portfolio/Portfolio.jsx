import { useState, useEffect } from "react";
import { Tab, Tabs, Card, Row, Col } from "react-bootstrap";

// image imports from assets
import Work1 from "../../assets/marketing.jpg";
import Work2 from "../../assets/webdes.png";
import Work3 from "../../assets/Logo Restaurant.png";
import Work4 from "../../assets/ui.png";

import style from "./Portfolio.module.scss";
import useTheme from "../../hooks/useTheme";

const Portfolio = () => {
  const [key, setKey] = useState("all");
  const [projects, setProjects] = useState([]);
  const { theme } = useTheme();

  const projectData = [
    {
      id: 1,
      image: Work1,
      title: "Branding",
      category: "Marketing",
      linkType: "gdrive",
      livePreviewUrl: "https://example-branding-live.com",
    },

    {
      id: 2,
      image: Work2,
      title: "Web Design",
      category: "Web",
      linkType: "github",
      livePreviewUrl: "https://example-branding-live.com",
    },

    {
      id: 3,
      image: Work3,
      title: "Create logo",
      category: "Design",
      linkType: "adobe",
      livePreviewUrl: "https://example-branding-live.com",
    },

    {
      id: 4,
      image: Work4,
      title: "Ui/Ux",
      category: "design",
      linkType: "figma",
      livePreviewUrl: "https://example-branding-live.com",
    },
  ];

  useEffect(() => {
    setProjects(
      key === "all"
        ? projectData
        : projectData.filter(
            (project) => project.category.toLowerCase() === key
          )
    );
  }, [key]);

  const getLinkURL = (type) => {
    switch (type) {
      case "gdrive":
        return "https://drive.google.com/drive/u/0/folders/1qvnXliHUiITWPOypRqt02ROwSoBxrWwo";
      case "figma":
        return "https://www.figma.com/file/I47WhrUvVYJIupgUjsmiun/Untitled?type=design&node-id=0-1&mode=design&t=zehvcqvNlNYW7L2h-0";
      case "adobe":
        return "https://www.adobe.com/products/illustrator.html";
      default:
        return "https://github.com/FarahShiba?tab=repositories";
    }
  };

  const getButtonText = (type) => {
    switch (type) {
      case "gdrive":
        return "Checkout GDrive";
      case "figma":
        return "Checkout Figma";
      case "adobe":
        return "Checkout Adobe";
      default:
        return "Checkout GitHub";
    }
  };

  const projectNav = ["all", "web", "design", "marketing"];

  return (
    <div className={`${style[theme]}`}>
      <section className={`work-section ${style.portfolio}`} id="portfolio">
        <h2 className={`section---title ${style.darkText}`}>Portfolio</h2>
        <span className={`section---subtitle ${style.darkText} `}>
          Recent Work
        </span>

        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-4 portfolio_filters"
        >
          {projectNav.map((item, index) => (
            <Tab
              eventKey={item}
              title={item[0].toUpperCase() + item.slice(1)}
              key={index}
            >
              <Row md={3} className="g-4 portfolio_container">
                {projects.map((project) => (
                  <Col xs={12} key={project.id}>
                    <Card className="portfolio_card">
                      <Card.Img
                        variant="top"
                        src={project.image}
                        className="portfolio_img"
                      />
                      <Card.Body>
                        <Card.Title className="portfolio_title">
                          {project.title}
                        </Card.Title>
                        <div className="card_actions">
                          <Card.Link
                            target="_blank"
                            href={project.livePreviewUrl}
                            className="btn_ btn-live"
                          >
                            Live Preview
                          </Card.Link>
                          <Card.Link
                            target="_blank"
                            href={getLinkURL(project.linkType)}
                            className={"btn_ btn-all btn${project.linkType}"}
                          >
                            {getButtonText(project.linkType)}
                          </Card.Link>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>
          ))}
        </Tabs>
      </section>
    </div>
  );
};

export default Portfolio;
