import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
export default class ProductDetails extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, title, img, price, info, inCart } = value.detailProduct;
          return (
            <React.Fragment>
              <div className="col-lg-6 my-5 mx-auto d-flex justify-content-center ">
                <div className="card h-200 detailcard ">
                  <div>
                    <img src={img} class="card-img-top" alt="shoepic" />
                  </div>
                  <div className="card-body">
                    <h2 className="card-title text-center ">{title}</h2>
                    <p className="card-text ">{info}</p>

                    <div className="card-text text-end fst-italic fw-bold">
                      {" "}
                      <h3> Price: ${price}</h3>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col text-center">
                  <Link to="shop">
                    <ButtonContainer> Back to Products</ButtonContainer>
                  </Link>

                  <ButtonContainer
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {" "}
                    {inCart ? "In Cart" : "Add to Cart"}{" "}
                  </ButtonContainer>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </ProductConsumer>
    );
  }
}
