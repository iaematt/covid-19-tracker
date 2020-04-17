import React from "react";
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

import { Container, Icons } from "./styles";

function Footer() {
  return (
    <Container>
      <Icons>
        <a
          href="http://github.com/iaematt"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub size="20px" />
        </a>
        <span></span>
        <a
          href="http://instagram.com/iaematt_"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaInstagram size="20px" />
        </a>
        <span></span>
        <a
          href="http://fb.me/iaematt"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaFacebook size="20px" />
        </a>
      </Icons>

      <p>
        Copyright © 2020 [{" "}
        <a
          href="https://devbsb.com.br"
          rel="noopener noreferrer"
          target="_blank"
        >
          devbsb
        </a>{" "}
        ] — Todos os direitos reservados
      </p>
    </Container>
  );
}

export { Footer };
