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

                   <div className="container py-5">
                       {/* title */}
                       <div className="row">

                        <div className="col-10 mx-auto text-center  my-3">
                        <h1 className="fw-bold">{title}</h1>
                        </div>

                       </div>

                       {/* Productinfo */}
                       <div className="row">
                        <div className="col-xs-12 col-md-6 mx-auto my-3">
                            <img src={img} alt="shoe pic"/>
                        </div>
                        <div className="col-xs-12 col-md-6 mx-auto my-3">
                            <p>{info}</p>
                            <div><Link to="/shop">
                               <ButtonContainer> Back To Products Page</ButtonContainer>     
                               </Link> </div>
                               <div>   
                               <ButtonContainer> Add to Cart</ButtonContainer>      
                               </div>
                               
                        </div>
                       </div>
                       <div className="row align-items-center mb-0">
                           <div className="col-md-2  ">
                               <h3 className="fst-italic">Price : ${price}</h3></div>
                              
                               
                          

                       </div>



                   </div>
                  );
                }}

            </ProductConsumer>
        )
    }
}
