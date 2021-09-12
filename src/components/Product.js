import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductConsumer } from "../context";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className="col-9 mx-auto col-md-6 col-lg-4 my-3 styleproduct">
        <div className="card">
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
            <p>
              <h5>{title}</h5>
            </p>
            <p>
              <h5>
                <span className="ms-5">$</span>
                {price}
              </h5>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

// const ProductStyled = styled.div``;
