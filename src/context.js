import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

// created context object.
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
  };

  componentDidMount(){
this.setProducts();

  }
  setProducts=()=>{
    let tempProducts=[];
    storeProducts.forEach(item=>{
      const singleItem={...item};
      tempProducts =[...tempProducts,singleItem];

    })
 this.setState(()=>{
   return{products:tempProducts}
 })
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
