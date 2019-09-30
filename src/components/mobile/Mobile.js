import React from 'react';
import "./Mobile.css";

export default function Mobile() {
  return (
    <div className="mobile">
      <div className="mobile__content">
        <h2>Find. Follow. Favorite</h2>
        <p>
          Save your favorites and share your style.
        </p>
        <div className="mobile__buttons">
          <a className="mobile__app-store" href="./">
            <img src="/img/app-store.png" alt="App store logo"/>
          </a>
          <a className="mobile__google-play" href="./">
            <img src="/img/google-play.png" alt="Google play logo"/>
          </a>
        </div>
      </div>
    </div>
  )
}