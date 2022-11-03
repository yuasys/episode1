import "./App.css";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home';
import {Menu} from './pages/Menu';
import {Contact} from './pages/Contact';
import {Navbar} from './pages/Navbar';
import {Profile} from './pages/Profile';

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
