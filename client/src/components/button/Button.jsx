import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

export function SimpleButton(props) {
  return (
    <Link className="simple_button_container" to={props.to}>
      <p id="simple_button">{props.title}</p>
    </Link>
  );
}

export function BackButton(props) {
  return (
    <Link className="simple_back_button_container" to={props.to}>
      <p id="simple_back_button">{props.title}</p>
    </Link>
  );
}
