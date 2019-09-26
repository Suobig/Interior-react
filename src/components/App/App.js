import React, { useState } from 'react';
import Header from '../header/Header';
import {Promo, PromoImage, promoTypes} from '../promo/Promo';
import {Item, itemTypes} from '../item/Item';
import {TabBar, Tab, TabControls, TabPanel, TabPanelList} from '../tab-bar/Tabs';

import './App.css';

function App() {
  const featureItems = [
    {
      id: 1,
      type: itemTypes.itemSmall,
      image: process.env.PUBLIC_URL + "/img/products/small/product-1.jpg",
      title:"Fishnet Chair1",
      text: "Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black",
      link: "./",
    },
    {
      id: 2,
      type: itemTypes.itemSmall,
      image: process.env.PUBLIC_URL + "/img/products/small/product-2.jpg",
      title:"Fishnet Chair2",
      text: "Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black",
      link: "./",
    },
    {
      id: 3,
      type: itemTypes.itemSmall,
      image: process.env.PUBLIC_URL + "/img/products/small/product-8.jpg",
      title:"Fishnet Chair3",
      text: "Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black",
      link: "./",
    },
    {
      id: 4,
      type: itemTypes.itemSmall,
      image: process.env.PUBLIC_URL + "/img/products/small/product-4.jpg",
      title:"Fishnet Chair4",
      text: "Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black",
      link: "./",
    },
  ];
  const newItems = [
    {
      id: 5,
      type: itemTypes.itemSmall,
      image: process.env.PUBLIC_URL + "/img/products/small/product-3.jpg",
      title:"Fishnet Chair5",
      text: "Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black",
      link: "./",
    },
    {
      id: 6,
      type: itemTypes.itemSmall,
      image: process.env.PUBLIC_URL + "/img/products/small/product-5.jpg",
      title:"Fishnet Chair6",
      text: "Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black",
      link: "./",
    },
    {
      id: 7,
      type: itemTypes.itemSmall,
      image: process.env.PUBLIC_URL + "/img/products/small/product-6.jpg",
      title:"Fishnet Chair7",
      text: "Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black",
      link: "./",
    },
    {
      id: 8,
      type: itemTypes.itemSmall,
      image: process.env.PUBLIC_URL + "/img/products/small/product-7.jpg",
      title:"Fishnet Chair8",
      text: "Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black",
      link: "./",
    },
  ]

  function listToItems(list) {
    return (
      list.map(item => 
        <Item 
          key={item.id}
          type={item.type}
          image={item.image}
          title={item.title}
          text={item.text}
          link={item.link}
        />
      )
    )
  }

  const [active, setActive] = useState(0);
  const handleClick = index => {
    console.log({index})
    setActive(index)
  };

  return (
    <div className="App">
      <Header />
      <Promo 
        type={promoTypes.highlightTrending}
        name="Fishnet Chair"
        details="Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black"
        link="/products/fishnet-chair.html"
      >
        <PromoImage 
          src={process.env.PUBLIC_URL + "/img/slider/slider-1.png"}
          alt="product 1"
        />
        <PromoImage 
          src={process.env.PUBLIC_URL + "/img/slider/slider-2.png"}
          alt="product 2"
        />
      </Promo>

      <TabBar>
        <TabControls 
          activeIndex={active}
          onClick={handleClick}
          forwardLink={"./"}
        >
          <Tab>Feature</Tab>
          <Tab>New</Tab>
        </TabControls>
        <TabPanelList activeIndex={active}>
          <TabPanel>{listToItems(featureItems)}</TabPanel>
          <TabPanel>{listToItems(newItems)}</TabPanel>
        </TabPanelList>
      </TabBar>
    </div>
  );
}

export default App;
