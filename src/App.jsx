import './App.css';

function App() {
  const name = <h2>Nob</h2>;
  const age = <h3>72</h3>;
  const email = <h3>nob@nob.om</h3>;
  const user = (
    <>
      {name}
      {age}
      {email}
    </>
  )
  return (
    <div className="App">
      {user}
      {user}
      {user}
    </div>
  )
}

export default App;
