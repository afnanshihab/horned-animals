import React, { Component } from 'react'

 class HornedBeats extends Component {
     constructor(props) {
         super(props);
         this.state ={ 
             clicks:this.props.clicks
            }
     }

     newClicks=()=>{
         this.setState(
             {
                 clicks:this.state.clicks+1
                })
     }


    render() {
        return (
            <div>
                 <h2> {this.props.title} </h2>
                 <img  src = {this.props.imgUrl}  alt = {this.props.title}  width="350px"  height="350px" />
                 <p> {this.props.description} </p>
                 <img onClick ={this.newClicks} src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYosBicVMF7B-w1lQeHj7Q5GYmVvmwGC5Xbg&usqp=CAU"  alt = "heart"  width = "20px" height='25px'/>
            <span>{this.state.clicks}</span>
            </div>
        )
    }
}

export default HornedBeats
