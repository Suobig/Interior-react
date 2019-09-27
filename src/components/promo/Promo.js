import React, { useState, useEffect, useRef } from  'react';
import "./Promo.css";

import {Button, buttonTypes, buttonShapes} from '../button/Button';

export const promoTypes = {
  highlightTrending: "promo__highlight-trending",
  highlightHot: "promo__highlight-hot",
  highlightExclusive: "promo__highlight-exclusive",
}

export const promoSizes = {
  sizeStandard: "promo",
  sizeSemi: "promo promo-semi"
}

export function Promo({type, size=promoSizes.sizeStandard, name, details, link, children}) {
  const [currentIndex, setIndex] = useState(0);
  
  const images = React.Children.toArray(children);
  const imagesCount = images.length;
  const getNextImageIndex = (currentIndex) => {
    const id = currentIndex + 1;
    return id < imagesCount ? id : 0;
  }

  let timerId = useRef(0);
  useEffect(() => {
    if (timerId.current !== 0) {
      clearTimeout(timerId.current);
    }
    timerId.current = setTimeout(() => {
      setIndex(getNextImageIndex(currentIndex));
    }, 3000)
  });

  const handleClick = (index) => setIndex(index);

  const buttons = images.map((_, index) => {
    const classes = "promo__button " + (index === currentIndex ? "promo__button-active" : "");
    const indexedHandleClick = () => handleClick(index);
    return <div key={index} className={classes} onClick={indexedHandleClick}><span className="hidden">Button</span></div>
  });

  const carouselButtons = 
      <div className="promo__buttons">
        { imagesCount > 1 ? buttons : null }
      </div>

  const activeImage = images[currentIndex];

  return (
    <div className={size}>
      {activeImage}
      <div className="promo__content">
        <h2 className={`promo__name ${type}`}>{name}</h2>
        <p className="promo__details">{details}</p>
        <Button
          type={buttonTypes.buttonShadow}
          shape={buttonShapes.buttonLong}
          text="Order Us"
          link={link}
        />
        { carouselButtons } 
      </div>
    </div>
  )
}

export function PromoImage({src, alt}) {
  return (
    <img className="promo__image" src={src} alt={alt} />
  )
}
