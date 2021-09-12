import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

// created context object.
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct,
  }
handleDetail=()=>{
    console.log('filler text handle detail function')
}
addToCart=()=>{
    console.log('filler text add to cart function')
}
  render() {
    return (
      <ProductContext.Provider value={{...this.state,handleDetail:this.handleDetail,addToCart:this.addToCart}


      }>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
