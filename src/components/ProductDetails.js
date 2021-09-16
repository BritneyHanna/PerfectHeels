import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import {Link} from 'react-router-dom';
import{ButtonContainer}from "./Button";
export default class ProductDetails extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{

                  const {id,title,img,price,company,info,inCart} = value.detailProduct;
                  return(
                        <React.Fragment>

<div className="col-lg-6 my-5 mx-auto d-flex justify-content-center text-center  ">
<div className="card h-200 detailcard " >
    <div>
  <img src={img} class="card-img-top" alt="shoepic"/>
  </div>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{info}</p>
    <span>
    <Link to="shop">
    <ButtonContainer> Back to Products</ButtonContainer>  
    </Link>    
    <ButtonContainer> Add to Cart </ButtonContainer>  
    </span>
  </div>
</div>
</div>



                        </React.Fragment>  
  
                  );
                }}

            </ProductConsumer>
        )
    }
}