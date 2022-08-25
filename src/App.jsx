import Navbar from "./components/Navbar";
import React from "react";
import Login from "./views/Login";
import SingleProductView from "./components/SingleProduct";
import { Routes, Route } from "react-router-dom";
// import Signup from "./views/Signup";
import Grid from "./components/Grid";
import Cart from "./views/Cart";
import CartItem from "./components/CartItem";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
{/*         <Route path="/" element={<Grid />} />
        <Route path="/vinos" element={<Grid category="vinos" />} />
        <Route path="/cervezas" element={<Grid category="cervezas" />} />
        <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={<SingleProductView />} />  */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
