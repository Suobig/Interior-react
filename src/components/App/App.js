import React from 'react';
import Header from '../header/Header';
import {Promo, PromoImage, promoSizes, promoTypes} from '../promo/Promo';
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
  ];
  const trendingItems = [
    {
      id: 9,
      type: itemTypes.itemLarge,
      image: process.env.PUBLIC_URL + "/img/products/medium/product-3.jpg",
      title:"Fishnet Chair5",
      text: "Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black",
      link: "./",
    },
    {
      id: 10,
      type: itemTypes.itemLarge,
      image: process.env.PUBLIC_URL + "/img/products/medium/product-5.jpg",
      title:"Fishnet Chair6",
      text: "Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black",
      link: "./",
    },
    {
      id: 11,
      type: itemTypes.itemLarge,
      image: process.env.PUBLIC_URL + "/img/products/medium/product-6.jpg",
      title:"Fishnet Chair7",
      text: "Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black",
      link: "./",
    },
    {
      id: 12,
      type: itemTypes.itemLarge,
      image: process.env.PUBLIC_URL + "/img/products/medium/product-7.jpg",
      title:"Fishnet Chair8",
      text: "Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black",
      link: "./",
    },
    {
      id: 13,
      type: itemTypes.itemLarge,
      image: process.env.PUBLIC_URL + "/img/products/medium/product-8.jpg",
      title:"Fishnet Chair8",
      text: "Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black",
      link: "./",
    },
    {
      id: 14,
      type: itemTypes.itemLarge,
      image: process.env.PUBLIC_URL + "/img/products/medium/product-9.jpg",
      title:"Fishnet Chair8",
      text: "Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black",
      link: "./",
    },
  ];

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

  return (
    <div className="App">
      <Header />
      <Promo 
        type={promoTypes.highlightTrending}
        size={promoSizes.sizeLarge}
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
        <TabControls forwardLink={"./"}>
          <Tab>Feature</Tab>
          <Tab>New</Tab>
        </TabControls>
        <TabPanelList>
          <TabPanel>{listToItems(featureItems)}</TabPanel>
          <TabPanel>{listToItems(newItems)}</TabPanel>
        </TabPanelList>
      </TabBar>

      <div className="flex-container">
        <Promo 
          type={promoTypes.highlightExclusive}
          size={promoSizes.sizeSmall}
          name="Fishnet Chair"
          details="Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black"
          link="/products/fishnet-chair.html"
          styles={{minWidth: "50%", minHeight: "calc(1366px / 2)"}}
        >
          <PromoImage
            src={process.env.PUBLIC_URL + "/img/promo/promo-img-2.png"}
            alt="promo product 1"
          />
        </Promo>
        <Promo 
          type={promoTypes.highlightExclusive}
          size={promoSizes.sizeSmall}
          name="Fishnet Chair"
          details="Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black"
          link="/products/fishnet-chair.html"
          styles={{minWidth: "50%", minHeight: "calc(1366px / 2)"}}
        >
          <PromoImage
            src={process.env.PUBLIC_URL + "/img/promo/promo-img-1.png"}
            alt="promo product 1"
          />
        </Promo>
      </div>

      <TabBar>
        <TabControls forwardLink={"./"}>
          <Tab>Trending Products</Tab>
        </TabControls>
        <TabPanelList>
          <TabPanel>{listToItems(trendingItems)}</TabPanel>
        </TabPanelList>
      </TabBar>
      <Promo 
        type={promoTypes.highlightHot}
        size={promoSizes.sizeLarge}
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
      <div className="flex-container site-margin">
        <div className="flex-container">
        <Promo 
          type={promoTypes.highlightExclusive}
          size={promoSizes.sizeSmall}
          name="Fishnet Chair"
          details="Seat and back with upholstery made of cold cure foam. Steel frame, available in matt powder-coated black"
          link="/products/fishnet-chair.html"
          styles={{minWidth: "570px", minHeight: "570px"}}
        >
          <PromoImage
            src={process.env.PUBLIC_URL + "/img/promo/promo-img-3.png"}
            alt="promo product 3"
          />
        </Promo>
        </div>
        <div className="flex-container flex-wrap">
          {listToItems(featureItems)}
        </div>
      </div>
    </div>
  );
}

export default App;
