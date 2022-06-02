import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PromoBanner from './components/PromoBanner';
import Home from "./pages/Home";
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Login from './pages/Login';
import Register from './pages/Register';
import WIP from './pages/WIP';

const App = () => {
  return (
    <Router>
      <div>
        <PromoBanner />
        <Navbar />
          <ScrollToTop>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/not-found' element={<WIP />} />
            </Routes>
          </ScrollToTop>
        <Footer />
      </div>
    </Router>
  )
}
  
export default App;