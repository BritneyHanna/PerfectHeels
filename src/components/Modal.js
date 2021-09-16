import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import{Link}from "react-router-dom";

export default class Modal extends Component {
    render() {
        return (
   
            <ProductConsumer>
                {(value)=>{
                const {modalOpen,closeModal}=value;
                const{img,title,price}=value.modalProduct;

                if(!modalOpen){
                    return null;
                }
                    else{
                      return(  <ModalStyled>
                            <div className="container">
                            <div className="row">
                                <div id="modal" className="col-sm-8 col-md-6 col-lg-4 mx-auto text-center p-3">
                                    <h5> Item added to the cart</h5>
                                    <img id="modalimg"src={img} className="img-fluid " alt="shoe"/>
                                    <h5 className='text-muted'>{title} $ {price}</h5>
                                    <Link to="/shop">
                                 <ButtonContainer onClick={()=>closeModal()}>
                                     Keep Shopping
                                 </ButtonContainer>
                                 </Link>
                                 <Link to="/cart">
                                 <ButtonContainer onClick={()=>closeModal()}>
                                   Go to Cart
                                 </ButtonContainer>
                                 
                                 </Link>
                             
                                </div>

                                 </div>
                               

                            </div>
                        </ModalStyled>);
                    }
                }}


            </ProductConsumer>
            
        )
    }
}

const ModalStyled= styled.div` position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background: rgba(0,0,0,.3);
display:flex;
align-items:center;
justify-content-center;


#modal{
    background-color:white;
    border-radius:2.5%

    
    
}
#modalimg{
    border-radius:2.5%  
}

`