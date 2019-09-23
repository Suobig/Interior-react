import React from 'react';

import './Button.css';

const buttonTypes = {
  buttonShadow: "button-shadow",
  buttonWhite: "button-white",
}

const buttonShapes = {
  buttonLong: "button",
  buttonRound: "button-round"
}

function Button({type, shape, text, link}) {
  const textType = shape + "-text";
  const arrowType = shape + "-arrow";

  return (
    <a className={`button ${shape} ${type}`} href={link}>
      <span className={textType + "  button-text"}>{text}</span><span className={arrowType + " button-arrow-right"}></span>
    </a>
  )
}

export {Button, buttonTypes, buttonShapes};