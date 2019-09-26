import React, { useState, useEffect, useRef } from  'react';
import "./Promo.css";

import {Button, buttonTypes, buttonShapes} from '../button/Button';

const promoTypes = {
  highlightTrending: "promo__highlight-trending",
  highlightHot: "promo__highlight-hot",
  highlightExclusive: "promo__highlight-exclusive",
}

function Promo({type, name, details, link, children}) {
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
  })

  console.log({buttons, imagesCount});

  const carouselButtons = 
      <div className="promo__buttons">
        { imagesCount > 1 ? buttons : null }
      </div>

  console.log(carouselButtons);

  const activeImage = images[currentIndex];

  return (
    <div className="promo">
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

function PromoImage({src, alt}) {
  return (
    <img className="promo__image" src={src} alt={alt} />
  )
}

export {promoTypes, Promo, PromoImage};
