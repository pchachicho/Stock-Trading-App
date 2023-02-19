import NavBar from './components/NavBar/NavBar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Auth} from "./components/auth.js"
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import LogIn from './components/LogIn/LogIn';
import Account from './components/Account/Account';
function App() {
  return (
    <div>

    <Router>
      <NavBar />
      <Routes>
        <Route path="/about" component={About} />
        <Route path="/login" component={LogIn} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Account" component={Account} />
      </Routes>
    </Router>
    <Auth />
      </div>
     
  );
}

export default App;
