import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Faqs } from './components/Faq';
import { Cupcakes } from './components/Cupcake';
import { Cart } from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/faq" element={<Faqs/>}></Route>
          <Route path="/cupcake" element={<Cupcakes/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
