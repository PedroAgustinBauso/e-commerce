import Navbar from "./components/Navbar";
import React, { useEffect } from "react";
import Login from "./pages/Login";
import SingleProductView from "./components/SingleProduct";
import { Routes, Route } from "react-router-dom";
import Grid from "./components/Grid";
import Cart from "./pages/Cart";
import CartItem from "./components/CartItem";
import Register from "./pages/Register";
import AdminUsers from "./components/AdminUsers";

function App() {
  useEffect(() => {
    
  }, [])
  
  const categoriesList = [
    "Vinos",
    "Cervezas",
    "Espumantes",
    "Licores",
    "Gin",
    "Vodka",
    "Ron",
    "Aperitivos",
    "Whisky",
    "Otros",
  ];

  function getCategoryRoutes() {
    let categoryRoutes = categoriesList.map((categoryListItem, index) => (
      <Route
        key={index}
        path={`/${categoryListItem.toLocaleLowerCase()}`}
        element={<Grid category={categoryListItem} />}
      ></Route>
    ));
    return categoryRoutes;
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Grid category="none" />} />
        {getCategoryRoutes()}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<SingleProductView />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin/users" element={<AdminUsers/>} />
      </Routes>
    </div>
  );
}

export default App;
