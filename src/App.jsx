import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredicteAge] = useState(null);
  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredicteAge(res.data);
    })
  };

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div className="App">
      <input
        placeholder="例. Pedro"
        onChange={(event) => {
          setName(event.target.value);
        }}
        />
      <button onClick={fetchData}>Predict Age</button>
      <h1>名前:{predictedAge?.name}</h1>
      <h1>占い年齢:{predictedAge?.age}</h1>
      <h1>カウント:{predictedAge?.count}</h1>
      
    </div>
  );
}

export default App;
