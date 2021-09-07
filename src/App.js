import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import NavBar from "./components/NavBar";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Contactus from "./components/Contactus";
import DefaultPage from "./components/DefaultPage";


function App() {
  return (
    <React.Fragment>
      
      {/* Added routes NavBar displays on all pages except the default 404 page and the homepage. For the homepage I want a simple banner image  */}

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route
          path="/shop"
          render={() => (
            <React.Fragment>
              <NavBar />
              <ProductList />
            </React.Fragment>
          )}
        />
        <Route
          path="/productdetails"
          render={() => (
            <React.Fragment>
              <NavBar />
              <ProductDetails />
            </React.Fragment>
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <React.Fragment>
              <NavBar />
              <Cart />
            </React.Fragment>
          )}
        />
         <Route
          exact path="/contactus"
          render={() => (
            <React.Fragment>
              <Contactus/>
              
            </React.Fragment>
          )}
        />

        <Route component={DefaultPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
