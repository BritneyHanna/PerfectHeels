import React from 'react';
import {Link} from 'react-router-dom';

export default function CartTotals({value}) {
 const {cartSubTotal,cartTax,cartTotal,clearCart}=value

    return (
        <React.Fragment>
            <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ms-sm-5 ms-md-auto col-sm-8 text-capitalize text-end"> 
                
                <Link to="/shop">
                    <button className=" btn btn-outline-danger text-uppercase mb-3  px-5" type="button" onClick={() => clearCart()}>
                    Clear Cart

                    </button>
                </Link>
                <h5   >
                    <strong>
                   Subtotal: $ {cartSubTotal}
                   </strong>
                </h5>
                <h5   >
                    <strong>
                   Tax: $ {cartTax}
                   </strong>
                </h5>
                <h4   >
                    <strong>
                   Total: $ {cartTotal}
                   </strong>
                </h4>

                 </div>
                
                 </div>
            </div>
            
        </React.Fragment>
    )
}

