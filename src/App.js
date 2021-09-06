import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import NavBar from "./components/NavBar";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Home from "./components/Home";
import DefaultPage from "./components/DefaultPage";

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Home></Home>
      <ProductList></ProductList>
      <ProductDetails></ProductDetails>
      <Cart></Cart>
      <DefaultPage></DefaultPage>



      </React.Fragment>

  );
}

export default App;
