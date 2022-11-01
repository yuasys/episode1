import './App.css';
import { useState } from "react";

function App() {
  const [textColor, setTextColor] = useState("black");


  return (
  <div className="App">
    <button onClick={() => {setTextColor(textColor === "black" ? "red": "black")}}>表示する／隠す</button>
    <h1 style={{color: textColor}}>やあ、私の名前は信彦です。</h1>
  </div>
  );
}

export default App;
