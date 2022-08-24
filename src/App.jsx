import Navbar from "./components/Navbar";
import React from "react";
import Login from "./views/Login";
import SingleProductView from "./components/SingleProduct";

function App() {
  return (
    <div>
      <Navbar />
      <Login />
      <SingleProductView />
    </div>
  );
}

export default App;
