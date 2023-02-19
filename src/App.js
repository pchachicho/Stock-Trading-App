import NavBar from './components/NavBar/NavBar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} /> */}
      </Routes>
    </Router>
    
     
  );
}

export default App;
