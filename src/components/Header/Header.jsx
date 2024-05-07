import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import {
  UilEstate,
  UilUser,
  UilFileAlt,
  UilBriefcaseAlt,
  UilScenery,
  UilTimes,
  UilApps,
} from "@iconscout/react-unicons";
import ThemeToggler from "../common/ThemeToggler";
import useTheme from "../../hooks/useTheme";
import style from "./Header.module.scss";

const Header = () => {
  const [Toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  console.log(theme);
  const isDarkTheme = theme === "dark";

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`${style[theme]}`}>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant={theme}
        bg="light"
        fixed="top"
        className={`header ${scrolled ? "scroll-header" : ""} ${style.header} ${
          isDarkTheme ? style.dark : style.light
        }`}
      >
        <Container className={`${style.header}`}>
          <Navbar.Brand href="/" className="nav-logo">
            Farah
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="nav-toggle"
          >
            <UilApps onClick={() => setToggle((current) => !current)} />
          </Navbar.Toggle>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={`nav-menu ${Toggle ? "show-menu" : "hide-menu"}`}
          >
            <Nav className={`nav_list me-auto ${style.header}`}>
              <Nav.Link
                className={style.navLink}
                href="#home"
                onClick={() => setToggle(false)}
              >
                <UilEstate /> Home
              </Nav.Link>
              <Nav.Link
                className={style.navLink}
                href="#about"
                onClick={() => setToggle(false)}
              >
                <UilUser /> About
              </Nav.Link>
              <Nav.Link
                className={style.navLink}
                href="#portfolio"
                onClick={() => setToggle(false)}
              >
                <UilScenery /> Portfolio
              </Nav.Link>
              <Nav.Link
                className={style.navLink}
                href="#skills"
                onClick={() => setToggle(false)}
              >
                <UilFileAlt /> Skills
              </Nav.Link>
              <Nav.Link
                className={style.navLink}
                href="#services"
                onClick={() => setToggle(false)}
              >
                <UilBriefcaseAlt /> Services
              </Nav.Link>

              <Nav.Link
                className={style.navLink}
                href="#contact"
                onClick={() => setToggle(false)}
              >
                <UilScenery /> Contact
              </Nav.Link>
            </Nav>
            <UilTimes
              className="nav-close menu-toggle"
              onClick={(e) => {
                e.preventDefault();
                setToggle((current) => !current);
              }}
              style={{ display: Toggle ? "block" : "none" }}
            />
            <div>
              <ThemeToggler />
              {/* <SingleToggler /> */}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
