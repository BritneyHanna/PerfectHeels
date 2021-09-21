import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className=" col-10 mx-auto col-lg-2">
        <img
          className="img-fluid"
          src={img}
          style={{ width: "8rem", height: "8rem" }}
          alt="shoe"
        />
      </div>
      <div className=" col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Product:</span>
        {title}
      </div>
      <div className=" col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price:</span>
        ${price}
      </div>
      <div className=" col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Quantity:</span>
        <span className="btn btn-decrease mx-1" onClick={() => decrement(id)}>
          -
        </span>

        <span className="btn btn-decrease mx-1" onClick={() => increment(id)}>
          +
        </span>
        <span className="btn btn-decrease mx-1">{count}</span>
      </div>
      <div className=" col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div d-flex justify-content-center>
          <div>
            <div className="cart-icon " onClick={() => removeItem(id)}>
              <i className=" fas fa-trash" />
            </div>
          </div>
        </div>
      </div>

      <div className=" col-10 mx-auto col-lg-2">
        <strong>Item total : $ {total}</strong>
      </div>
    </div>
  );
}
