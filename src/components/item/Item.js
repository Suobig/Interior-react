import React from 'react';

const itemTypes = {
  itemSmall: "item-small",
  itemLarge: "item-large"
}

const overlayItemMapping = {
  "item-small": "overlay-small",
  "item-large": "overlay-large"
}

function Item({type, image, title, text, link}) {
  const overlayType = overlayItemMapping[type];

  return (
    <div className={"item " + type}>
    <img src="img/products/product-1.jpg" alt="Product 1" />
    <div className={"focus " + overlayType}>
      <a href="products/fishnet-chair.html" className="overlay-go shadow-button">
        <img src="img/arrow-med.jpg" alt="Arrow right" />
      </a>
      <h3 class="overlay-title">Fishnet Chair</h3>
      <p class="overlay-text">
        Seat and back with upholstery made of cold cure foam.
      </p>
    </div>
  </div>
  )
}

export {Item, itemTypes};