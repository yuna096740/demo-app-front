import React, { useState } from "react";
import axios from "axios";

import { endpoint } from "../../settings/endpoints.tsx";
import "./DebugStyle.css";

function Debug() {
  const [data, setData] = useState<any>();
  const apiUrl = endpoint("ping");

  const GetData = () => {
    axios.get(apiUrl).then((res) => {
      setData(res.data);
    });
  };

  return (
    <div>
      {data ? (
        <div>{data.data}</div>
      ) : (
        <button onClick={GetData}>データ取得Test</button>
      )}
    </div>
  );
}

export default Debug;
