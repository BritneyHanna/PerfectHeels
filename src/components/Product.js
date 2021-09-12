import React, { Component } from "react";
import{Link} from "react-router-dom";
import styled from "styled-components";
import { ProductConsumer } from '../context';


export default class Product extends Component {
    render() {
        const {id,title,img,price,InCart}= this.props.product
        return (
            <ProductStyled className="col-9 mx-auto col-md-6 col-lg-4 my-3">
                <div className="card">

                <div className="img-container p-.5  " onClick={()=>{console.log("filler method for clicking image")}}> 

                <Link to="/productdetails">
                    <img src={img} alt="shoe" className="card-img-top"/>
                </Link>
                </div>

                </div>
            </ProductStyled>
        )
    }
}

const ProductStyled=styled.div``