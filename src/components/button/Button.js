import React from 'react';

import './Button.css';

const buttonTypes = {
  buttonShadow: "button-shadow",
  buttonWhite: "button-white",
}

function Button({type, text, link}) {
  return (
    <a className={"button " + type} href={link}>
      {text}<img src={process.env.PUBLIC_URL + "/img/arrow-small.png"} alt="Arrow right" />
    </a>
  )
}

export {Button, buttonTypes};