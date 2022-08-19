import React from "react";
import "./landingPage.css";
import { SimpleButton } from "../../components/button/Button";

export function LandingPage() {
  return (
    <div className="container">
      <p id="text">Olá!</p>
      <p id="sub-text">O que gostaria de fazer?</p>
      <div className="button-container">
        <SimpleButton title="Ver Produtos" to="/productmanagement" />
        <SimpleButton title="Adicionar Produtos" to="/productinput" />
      </div>
      <a
        href="https://www.linkedin.com/in/meneluca/"
        rel="noreferrer"
        target="_blank"
        className="footer"
      >
        Powered by Lucas Menezes
      </a>
    </div>
  );
}
