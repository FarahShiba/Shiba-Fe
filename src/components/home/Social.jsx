import React from "react";
import { Container } from "react-bootstrap";
import {
  UilInstagram,
  UilLinkedin,
  UilGithubAlt,
} from "@iconscout/react-unicons";

function Social() {
  return (
    <div>
      <Container className="home-social">
        <a
          href="https://www.instagram.com/farahshiba_/"
          className="home-social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <UilInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/farah-shiba-tambunan-42885a185/"
          className="home-social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <UilLinkedin />
        </a>
        <a
          href="https://github.com/FarahShiba?tab=repositories"
          className="home-social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <UilGithubAlt />
        </a>
      </Container>
    </div>
  );
}

export default Social;
