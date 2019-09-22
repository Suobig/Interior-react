import React from 'react';
import Header from '../header/Header';
import {Slider, sliderTypes} from '../slider/Slider';
import {Button, buttonTypes} from '../button/Button';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider 
        type={sliderTypes.highlightTrending}
        name="Fishnet Chair"
        details="Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black"
        link="/products/fishnet-chair.html"
      />
      <Button 
        type={buttonTypes.buttonShadow}
        text=""
        link="./"
      />
    </div>
  );
}

export default App;
