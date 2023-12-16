import React, { useState } from "react";
import axios from "axios";

import "./Debug.css";

function Debug() {
  const [data, setData] = useState<any>();
  const url = "http://127.0.0.1:8000/ping";

  const GetData = () => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  };

  return (
    <div>
      {data ? (
        <div>{data.data}</div>
      ) : (
        <button onClick={GetData}>データを取得</button>
      )}
    </div>
  );
}

export default Debug;
