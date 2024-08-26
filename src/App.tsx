import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
