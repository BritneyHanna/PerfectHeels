import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ProductList from "./components/ProductList";
import NavBar from "./components/NavBar";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home";

import DefaultPage from "./components/DefaultPage";
import Modal from "./components/Modal";
import Footer from "./components/Footer";



class App extends Component {
  render()
 {return (
    <React.Fragment>
      
      {/* Added routes NavBar displays on all pages except the default 404 page and the homepage. For the homepage I want a simple banner image  */}
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route
           exact path="/shop"
          render={() => (
            <React.Fragment>
              <NavBar />
            
              <ProductList />
              <Footer/>
            </React.Fragment>
          )}
        />
        <Route
          path="/productdetails"
          render={() => (
            <React.Fragment>
              <NavBar />
              
              <ProductDetails />
              <Footer/>
              
            </React.Fragment>
          )}
        />
        <Route
          exact path="/cart"
          render={() => (
            <React.Fragment>
              <NavBar />
              <Cart />
              <Footer/>
            </React.Fragment>
          )}
        />
       

        <Route component={DefaultPage} />
      </Switch>

    
      <Modal/>
    </React.Fragment>
     


  );
}
}
export default App;
