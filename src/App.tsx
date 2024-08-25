import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
