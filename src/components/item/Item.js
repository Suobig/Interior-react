import React from 'react';
import {Button, buttonTypes, buttonShapes} from '../button/Button';

import './Item.css'

const itemTypes = {
  itemSmall: "item-small",
  itemLarge: "item-large"
}

const overlayItemMapping = {
  "item-small": "item-overlay-small",
  "item-large": "item-overlay-large"
}

function Item({type, image, title, text, link}) {
  const overlayType = overlayItemMapping[type];

  return (
    <div className={"item " + type}>
    <img src={image} alt="Product 1" />
    <div className={"item-overlay " + overlayType}>
      <Button 
        type={buttonTypes.buttonShadow}
        shape={buttonShapes.buttonRound}
        text=""
        link={link}
      />
      <h3 className="item-overlay-title">{title}</h3>
      <p className="item-overlay-text">
        {text}
      </p>
    </div>
  </div>
  )
}

export {Item, itemTypes};