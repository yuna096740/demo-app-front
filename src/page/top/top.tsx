import React from "react";
import Debug from "../../components/ping/Debug.tsx";
import TopImg from "../../assets/images/topDemo.jpg";

import "./topStyle.css";

const Top = () => {
  return (
    <div className="top">
      <header className="App-header">
        <div className="test">
          <h2>Deploy Test in Vercel</h2>
        </div>
        <img src={TopImg} className="top-image" alt="Top Demo Img" />

        <Debug />

      </header>
    </div>
  );
};

export default Top;
