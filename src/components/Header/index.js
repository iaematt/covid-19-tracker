import React from "react";
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

import { Nav, Container, Logo, Menu, Social } from "./styles";

import logo from "../../assets/logo.png";

function Header() {
  return (
    <Nav>
      <Container>
        <Logo src={logo} />

        <Menu>
          <Social>
            <a
              href="http://github.com/iaematt"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub size="18px" />
            </a>
            <a
              href="http://instagram.com/iaematt_"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram size="18px" />
            </a>
            <a
              href="http://facebook.com/iaematt"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebook size="18px" />
            </a>
          </Social>
        </Menu>
      </Container>
    </Nav>
  );
}

export { Header };
