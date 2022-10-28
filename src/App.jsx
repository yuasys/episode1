import './App.css';

function App() {
  return (
    <div className="App">
      <User name="nob" age={72} email="nob@nob.com" />
      <User name="maria" age={55} email="maria@maria.com" />
      <User name="tiger" age={5} email="tiger@tiger.com" />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
}

export default App;
