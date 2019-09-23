import React from 'react';
import Header from '../header/Header';
import {Slider, sliderTypes} from '../slider/Slider';
import {Button, buttonTypes, buttonShapes} from '../button/Button';
import {Item, itemTypes} from '../item/Item';

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
        shape={buttonShapes.buttonRound}
        text=""
        link="./"
      />
      <Item 
        type={itemTypes.itemSmall}
        image={'/img/products/product-1.jpg'}
        title="Fishnet Chair"
        text="Seat and back with upholstery made of cold cure foam."
        link="./"
      />
      <Item 
        type={itemTypes.itemSmall}
        image={'/img/products/product-2.jpg'}
        title="Fishnet Chair2"
        text="Seat and back with upholstery made of cold cure foam2."
        link="./"
      />
    </div>
  );
}

export default App;
