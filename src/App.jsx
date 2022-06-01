import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PromoBanner from './components/PromoBanner';
import Home from "./pages/Home";
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"

const App = () => {
  return (
    <Router>
      <div>
        <PromoBanner />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
  
export default App;