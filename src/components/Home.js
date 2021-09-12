import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import {HomeButtonContainer} from"./Button";




export default class Home extends Component {
    render() {
        return (
            <div className="home">
        
      


    <Link to="/shop">
<HomeButtonContainer className="homebtn" > Shop Now  </HomeButtonContainer>
</Link>
  

    
        
               
            </div>
        )
    }
}
