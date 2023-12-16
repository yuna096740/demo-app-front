import React from "react";
// import axios from "axios";
import "./App.css";

function App() {
  // const [data, setData] = React.useState();
  // const url = "http://127.0.0.1:8000/ping";

  // const GetData = () => {
  //   axios.get(url).then((res) => {
  //     setData(res.data);
  //   });
  // };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div className="test">
            <h2>Deploy Test in Vercel</h2>
          </div>
          <p>Produced by yuna9674</p>
        </div>

        {/* {data ? (
        <div>{data.data}</div>
        ) : (
          <button onClick={GetData}>データを取得</button>
        )} */}
      </header>
    </div>
  );
}

export default App;
