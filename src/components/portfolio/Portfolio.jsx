import { useState, useEffect } from "react";
import { Tab, Tabs, Card, Row, Col } from "react-bootstrap";

// image imports from assets
import Work1 from "../../assets/marketing.jpg";
import Work2 from "../../assets/Screenshot 2024-12-02 at 7.19.18 pm.png";
// import Work3 from "../../assets/Logo Restaurant.png";
import Work5 from "../../assets/Screenshot 2024-12-02 at 7.27.11 pm.png";
import Work6 from "../../assets/work6.png";
import Work7 from "../../assets/work7.png";
import Work8 from "../../assets/work8.png";

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
      // linkType: "github",
      livePreviewUrl: "https://music-app-pi-self.vercel.app/",
    },

    // {
    //   id: 3,
    //   image: Work3,
    //   title: "Create logo",
    //   category: "Design",
    //   linkType: "adobe",
    //   livePreviewUrl: "https://example-branding-live.com",
    // },

    {
      id: 4,
      image: Work8,
      title: "Ui/Ux",
      category: "design",
      linkType: "figma",
      livePreviewUrl:
        "https://www.figma.com/proto/S7IZ2nIWbt6cke02yF5xh9/avvaitamilpalli?node-id=1001-8976&starting-point-node-id=1001%3A8976",
    },

    {
      id: 5,
      image: Work5,
      title: "Web Design",
      category: "Web",
      livePreviewUrl: "https://restaurantfood-1.onrender.com",
    },

    {
      id: 6,
      image: Work6,
      title: "Web Design",
      category: "Web",
      livePreviewUrl: "https://fashionbrand-1.onrender.com",
    },

    {
      id: 7,
      image: Work7,
      title: "Web Design (wordpress)",
      category: "Web",
      livePreviewUrl: "https://avvaitamilpalli.com/",
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
        return "https://www.figma.com/design/S7IZ2nIWbt6cke02yF5xh9/avvaitamilpalli?node-id=22-4&node-type=canvas&t=wxPw62l5UzfGSEqg-0";
      case "adobe":
        return "https://www.adobe.com/products/illustrator.html";
      default:
        return "";
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
        return "";
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
                          {project.title !== "Branding" &&
                            project.livePreviewUrl && (
                              <Card.Link
                                target="_blank"
                                href={project.livePreviewUrl}
                                className="btn_ btn-live"
                              >
                                Live Preview
                              </Card.Link>
                            )}
                          {project.linkType !== "github" &&
                            project.linkType && (
                              <Card.Link
                                target="_blank"
                                href={getLinkURL(project.linkType)}
                                className={`btn_ btn-all btn-${project.linkType}`}
                              >
                                {getButtonText(project.linkType)}
                              </Card.Link>
                            )}
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
