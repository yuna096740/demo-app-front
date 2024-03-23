import React from "react";
// import Debug from "../../components/ping/Debug.tsx";
import Test1 from "../../assets/images/star.jpg";
import Test2 from "../../assets/images/star.jpg";
import Test3 from "../../assets/images/star.jpg";

import "./topStyle.css";

const Top = () => {
  return (
    <div className="top">
      <header className="App-header">
        <div className="title">
          <p>PHOTOGRAPHER.</p>
          <p>RUMIKA.</p>
          <p>FIRST PORTFOLIO.</p>
        </div>
        {/* <img src={TopImg} className="top-image" alt="" /> */}

        {/* <Debug /> */}
      </header>

      <div className="container1">
        <div className="section1">
          <h2 className="section-title">Who is Rumika.?</h2>

          <ul className="section1-images">
            <li className="section1-image">
              <img src={Test1} className="test1" alt="" />
            </li>

            <li className="section1-image">
              <img src={Test2} className="test2" alt="" />
            </li>

            <li className="section1-image">
              <img src={Test3} className="test3" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Top;
