import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer ">
            <div className="container-fluid">
                <div className="row">             
                    <div className="col-4 text-center ">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                        <li><Link to='/shop'>Products</Link></li>
                            <li><Link to='/cart'>Cart</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contactus'>Contact</Link></li>
                        </ul>
                    </div>
                
                    <div className=" col-8  text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                 
                   
                    
                </div>
                <div className=" row text-center">
                    <div className=" col-xs-12 col-md-4 text-center"> 
                    <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> highheels@yahoo.com</a>
</div>
<div className="col-md-8 text-center"> 
                    <a role="button" className="btn btn-link" href="tel:+55555555"><i className="fa fa-phone" /> 555-555-5555</a><br />
</div>
                    </div>
              
            </div>
        </footer>
    );
}

export default Footer;