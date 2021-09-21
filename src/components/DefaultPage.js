import React, { Component } from 'react'

export default class DefaultPage extends Component {
    render() {
        return (
            <div className="row ">
                <div className="col-12 text-center p-5 mt-5">
              
                    
                <h1 className="display-4"> We're sorry the url: </h1>
                <h1 className="text-danger display-4">{this.props.location.pathname} </h1>
                <h1 className="display-4"> was not found </h1>

           
            

                </div>
            </div>
        )
    }
}
