import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

// created context object.
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    // cart:[],
    shoppingcart:storeProducts,
    modalOpen:false,
    modalProduct:detailProduct,
    cartSubTotal:0,
    cartTax:0,
    cartTotal:0,

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
 
  getItem=(id)=>{
    const product= this.state.products.find(item=> item.id===id);
    return product;
  }

handleDetail=(id)=>{
    const product= this.getItem(id);
    this.setState(()=>{
      return {detailProduct:product}
    })
}
addToCart=(id)=>{
  let tempProducts=[...this.state.products];
  const index= tempProducts.indexOf(this.getItem(id));
  const product= tempProducts[index]
  product.inCart=true;
  product.count=1;
  const price=product.price;
  product.total= price;
this.setState(()=>{
  return {products:tempProducts,shoppingcart:[...this.state.shoppingcart,product]};
},()=>{console.log(this.state)})



};

openModal=(id)=>{
  const product = this.getItem(id);
  this.setState(()=>{
    return{ modalProduct:product, modalOpen:true}
  })
}
closeModal = ()=>{
this.setState(()=>{
  return {modalOpen:false}
});

};

increment=(id)=>{
  console.log('filler text for increment method')
};

decrement=(id)=>{
  console.log('filler text for decrement method')
};

removeItem=(id)=>{
  console.log('filler text for remove item method')
};

clearCart=()=>{

  console.log('filler text for clear cart function')
}






  render() {
    return (
      <ProductContext.Provider value={{...this.state,handleDetail:this.handleDetail, 
        addToCart:this.addToCart,openModal:this.openModal,closeModal:this.closeModal, 
        cart:this.cart,increment:this.icrement, decrement:this.decrement,removeItem:this.removeItem,clearCart:this.clearCart }


      }>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
