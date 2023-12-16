import React from "react";
import "./App.css";

import Debug from "./components/ping/Debug.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div className="test">
            <h2>Deploy Test in Vercel</h2>
          </div>
          <p>Produced by yuna9674</p>
        </div>

        <Debug />
      </header>
    </div>
  );
}

export default App;
