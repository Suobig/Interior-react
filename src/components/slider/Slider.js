import React from  'react';
import "./Slider.css";

import {Button, buttonTypes, buttonShapes} from '../button/Button';

const sliderTypes = {
  highlightTrending: "highlight-trending",
  highlightHot: "highlight-hot",
  highlightExclusive: "highlight-exclusive",
}

function Slider({ type, name, details, link}) {

  const carouselButtons = 
      <div className="slider-buttons">
        <a className="slider-button" href="./"><span className="hidden">First Image</span></a>
        <a className="slider-button slider-active" href="./"><span className="hidden">Second Image</span></a>
        <a className="slider-button" href="./"><span className="hidden">Third Image</span></a>
      </div>

  return (
    <div className="slider">
      <div className="slider-content">
        <h2 className={`slider-name ${type}`}>{name}</h2>
        <p className="slider-details">{details}</p>
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

export {sliderTypes, Slider};
