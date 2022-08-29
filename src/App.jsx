import Navbar from "./components/Navbar";
import React from "react";
import Login from "./pages/Login";
import SingleProductView from "./components/SingleProduct";
import { Routes, Route } from "react-router-dom";
import Grid from "./components/Grid";
import Cart from "./pages/Cart";
import CartItem from "./components/CartItem";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Grid category="none" />} />
        <Route path="/vinos" element={<Grid category="Vinos" />} />
        <Route path="/cervezas" element={<Grid category="Cervezas" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<SingleProductView />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
