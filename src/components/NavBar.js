import React, { Component } from "react";

import {Link} from "react-router-dom";
import logo3 from "../logo3.png"
export default class NavBar extends Component {
    render() {
        return (
           <nav className=" navbar navbar-expand-sm bg-success navbar-dark px-sm-5">

               <Link to ="/">
                   <img src={logo3} alt="logo" className="navbar-brand"></img> </Link>
           
              <ul className=" navbar-nav align-items-center">
                <li className="nav-item navlinks  ">
                    <Link to="/shop" className="nav-link">
                    See Our Heels
                    </Link>
                    </li>

                    <li className="nav-item navlinks ">
                    <Link to="/contactus" className="nav-link">
                    Contact Us
                    </Link>
                </li>
              </ul>
              <Link to="/cart" className="cart"> <button> <i className=" fas fa-cart-plus">
                  </i> Cart</button> </Link>
           </nav>
        );
    }
}
