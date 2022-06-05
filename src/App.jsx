import React, { useState, useEffect } from 'react';

//Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

//Componentes
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PromoBanner from './components/PromoBanner';

//Páginas
import Home from "./pages/Home";
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Login from './pages/Login';
import Register from './pages/Register';
import SingleProduct from "./pages/SingleProduct"
import WIP from './pages/WIP';

//Commerce.js
import { commerce } from './lib/commerce';

const App = () => {

  //Fetch de todos los productos 
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  //Creación de un carro vacío
  const [cart, setCart] = useState({});

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  //Uso de ambos hooks anteriores
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  //Función que actualiza el carro creado con los items añadidos
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  }  

  console.log(cart)

  //Función que elimina todos los items del carro
  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  return (
    <Router>
      <div>
        <PromoBanner />
        <Navbar totalItems={cart.total_items} />
          <ScrollToTop>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/shop' element={<Shop products={products}/>} />
              <Route path='/cart' element={<Cart cart={cart} onEmptyCart={handleEmptyCart} />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/not-found' element={<WIP />} />
              <Route path='/single-product/:id' element={<SingleProduct  onAddToCart={handleAddToCart} />} />
            </Routes>
          </ScrollToTop>
        <Footer />
      </div>
    </Router>
  )
}
  
export default App;