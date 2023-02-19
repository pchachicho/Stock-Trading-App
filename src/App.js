import NavBar from './components/NavBar/NavBar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Auth} from "./components/auth.js"
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
function App() {
  return (
    <div>

    <Router>
      <NavBar />
      <Routes>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/about" component={About} />
        <Route path="/Portfolio" component={Portfolio} />
      </Routes>
    </Router>
    <Auth />
      </div>
     
  );
}

export default App;
