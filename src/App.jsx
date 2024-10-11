import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbarr from './Navbar';
import Footer from './Footer';
import ReactDOM from "react-dom/client";
import {Route,Routes} from "react-router-dom";
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Pizza from './Pages/Pizza';
import Register from './Pages/Register';
import NotFound from './Pages/NotFound';
import Navegacion from './Navegacion';
import Profile from './Pages/Profile';
import NoEncontrada from './Pages/NoEncontrada';
import CartProvider from './Context/CartContext';


//import Cart from './Cart';

//import Register from './Register';
//import Login from './Login';

function App() {

  return (
    <>
      <div>
        <CartProvider>
        <Navegacion />
       {/* <Navbarr />*/} 
        {/*<Home />*/} 
        <Cart />
        {/*<Register />*/}
        {/*<Login />*/}
        {/*<Pizza />*/}
        
        <Routes>
        <Route 
            path="/register"
            element={<Register/>}
          />
          <Route 
            path="/login"
            element={<Login/>}
          />
          <Route 
            path="/cart"
            element={<Cart/>}
          />
          <Route 
            path="/pizza/p001"
            element={<Cart/>}
          />
          <Route 
            path="/profile"
            element={<Profile/>}
          />
        <Route 
            path="404"
            element={<NotFound/>}
          />

        </Routes>


        <Footer />       
        </CartProvider>
      </div>  
      
    </>
  )
}

export default App
