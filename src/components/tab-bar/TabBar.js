import React from 'react';
import {buttonShapes, buttonTypes, Button} from '../button/Button';
import "./TabBar.css";

function TabBar({tabs, forwardLink})  {
  const tabHeads = tabs.map((tab, index) => {
    const tabClasses = "tab-bar--tab " + index === 0 ? "tab-bar--tab-active" : "";
    return <a className={tabClasses} href="./">{tab.name}</a>
  })
  const controls = 
    <div className="tab-bar--controls">
      <div class="tab-bar--tabs">
        {tabHeads}
      </div>
      <Button 
        type={buttonTypes.buttonWhite}
        shape={buttonShapes.buttonLong}
        text="Explore all"
        link="./"
      />
    </div>

  
}