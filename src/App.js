import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from './Component/Products';
import Product from './Component/Product';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
