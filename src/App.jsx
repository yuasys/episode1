import './App.css';

function App() {
  const age = 17;
  return (
    <div className="App">
      {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
    </div>
  );
}

export default App;
