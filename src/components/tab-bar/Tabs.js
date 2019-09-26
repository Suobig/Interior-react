import React from 'react';
import {buttonShapes, buttonTypes, Button} from '../button/Button';
import "./Tabs.css";

export function TabBar({children})  {
  
  return (
    <div className="tab-bar">
      {children}
    </div>
  )
}

export function TabControls({activeIndex, onClick, forwardLink, children}) {
  const tabs = children.map((tab, index) => {
    const tabClick = () => onClick(index);
    return (
      <Tab
        key={index}
        isActive={index === activeIndex}
        onClick={tabClick}
      >{tab.props.children}</Tab>
    )
  });
  return (
    <div className="tab-bar__controls">
      <ul className="tab-bar__tabs">
        {tabs}
      </ul>
      <Button 
        type={buttonTypes.buttonWhite}
        shape={buttonShapes.buttonLong}
        text="Explore all"
        link={forwardLink}
      />
    </div>
  )
}

export function Tab({isActive, onClick, children}) {
  const tabClasses = `tab-bar__tab ${isActive ? "tab-bar__tab-active" : ""}`;
  return <li className={tabClasses} onClick={onClick}>{children}</li>
}

export function TabPanelList({activeIndex, children}) {
  const tabPanel = children[activeIndex];
  return tabPanel;
}

export function TabPanel({children}) {
  return (
    <div className="tab-bar__panel">
      {children}
    </div>
  )
}