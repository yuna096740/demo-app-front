import React from "react";
import Debug from "../../components/ping/Debug.tsx";

const Top = () => {
  return (
    <div className="top">
      <header className="App-header">
        <div>
          <div className="test">
            <h2>Deploy Test in Vercel</h2>
          </div>
        </div>

        <Debug />
      </header>
    </div>
  );
};

export default Top;
