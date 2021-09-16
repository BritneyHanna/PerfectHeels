import React, { Component } from "react";

import {ButtonContainerCart} from"./Button";



import logo3 from "../logo3.png"


import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,  } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
               

               <Navbar light expand="md">
                <div className="container">
                        <NavbarBrand className="ms-auto" href="/"> <img src={logo3} alt="logo" className="navbar-brand"></img></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="ms-auto" navbar>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link" to="/">
                                         Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/shop">
                                        Shop
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                     Contact Us
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink className="nav-link "  to="/cart">
                                      
                                    <ButtonContainerCart> 
                                     
                                        <i className=" fas fa-cart-arrow-down">

                                        
                  </i> Cart</ButtonContainerCart> 

                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        </div>
                </Navbar>
            </React.Fragment>
        );
    }
}









// export default class NavBar extends Component {


 









//      render() {
//          return (
//             <React.Fragment>
//            <nav className=" navbar navbar-expand-md bg-success navbar-dark px-sm-5">

//               <Link to ="/">
//                     <img src={logo3} alt="logo" className="navbar-brand"></img> </Link>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//        <span class="navbar-toggler-icon"></span>
//     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                    <ul className=" navbar-nav align-items-center">
//                <li className="nav-item ms-5  ">
//                    <Link to="/shop" className="nav-link">
//                      See Our Heels
//                     </Link>
//                     </li>

//                     <li className="nav-item ms-5   ">
//                   <Link to="/contactus" className="nav-link">
//                     Contact Us
//                      </Link>
//                 </li>
//               </ul>
//               <Link to="/cart" className="ms-auto"> <button> <i className=" fas fa-cart-plus">
//                   </i> Cart</button> </Link>
//                     </div>
              
//             </nav>
//            </React.Fragment>
//         );
//      }
// }



  