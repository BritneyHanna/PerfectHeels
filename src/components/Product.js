import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ProductConsumer } from "../context";


export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className="col-9 mx-auto col-md-6 col-lg-4 my-3 ">
        <div className="card productcard">
          <div
            className="img-container p-0   "
            onClick={() => {
              console.log("filler method for clicking image");
            }}
          >
            <Link to="/productdetails">
              <img src={img} alt="shoe" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                console.log("filler method for clicking button");
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0 disabled">In Cart</p>
              ) : (
                <i className="fas fa-cart-arrow-down" />
              )}
            </button>
          </div>
          <div className="card-footer d-flex justify-content-between ">
            <h5 className=" mb-0 me-5">
        {title } 
            </h5>
            
              <h5 mb-0 className="ml-5 mx-auto ">
                <span className="me-1">$</span>
               
               {price}
              </h5>
            
          </div>
        </div>
      </div>
    );
  }
}




