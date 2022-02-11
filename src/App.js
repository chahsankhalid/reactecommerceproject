import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import MainCart from './components/MainCart';
import Checkout from './components/Checkout';

function App() {
  
  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetail />} /> 
        <Route path='/cart' element={<MainCart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />      
      </Routes> 
    </div>
  );
}

export default App;
