import React, { Component } from 'react'

 class HornedBeats extends Component {
    render() {
        return (
            <div>
                 <h2> {this.props.title} </h2>
                 <img  src = {this.props.imgUrl}  alt = {this.props.imgUrl}  />
                 <p> {this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeats
