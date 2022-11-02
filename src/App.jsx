import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [generatedExcuse, setGneratedExcuse] = useState("");
  
  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((res) => {
      setGneratedExcuse(res.data[0].excuse);
    })
  };

  return (
    <div className="App">
      <h1>言い訳の作成</h1>
      <button onClick={() => fetchExcuse("party")}> パーディ欠席</button>
      <button onClick={() => fetchExcuse("family")}> 家族に言い訳</button>
      <button onClick={() => fetchExcuse("office")}> 勤務をサボる</button>

      <p> {generatedExcuse} </p>
    </div>
  );
}

export default App;
