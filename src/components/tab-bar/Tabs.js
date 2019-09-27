import React, { useState } from 'react';
import {buttonShapes, buttonTypes, Button} from '../button/Button';
import "./Tabs.css";

export function TabBar({children})  {
  const [activeIndex, setActive] = useState(0);
  const handleClick = (index) => setActive(index);

  const tabControls = children[0];
  const tabPanelList = children[1];
  return (
    <div className="tab-bar">
      <TabControls
        activeIndex={activeIndex}
        onClick={handleClick}
        forwardLink={tabControls.props.forwardLink}
        children={tabControls.props.children}
      />
      <TabPanelList 
        activeIndex={activeIndex}
        children={tabPanelList.props.children}
      />
    </div>
  )
}



export function TabControls({activeIndex, onClick, forwardLink, children}) {

  const tabs = React.Children.map(children, (tab, index) => {
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
  const childrenArray = React.Children.toArray(children);
  const tabPanel = childrenArray[activeIndex];
  return tabPanel;
}

export function TabPanel({children}) {
  return (
    <div className="tab-bar__panel">
      {children}
    </div>
  )
}