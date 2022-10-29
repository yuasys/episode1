import './App.css';
import {User} from './User';

function App() {
  const users = [
    {name: "Pedoro", age: 21},
    {name: "Jage", age: 25},
    {name: "Jessica", age: 45},
  ];
  return (
    <div className="App">
      {users.map((user,key) => {
        return <h1 key={key}><User name={user.name} age={user.age} /></h1>
      })}
    </div>
  );
}

export default App;
