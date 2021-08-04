import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import MyModal from "./Selectedbeat";

class HornedBeats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: this.props.clicks,
      // show : false;
    };
  }

  newClicks = () => {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  };



  // closeModal = () => {
  //   this.setState  ({
  //     show: false 
  //   });
  // }

  

  veiwBeats =() => {
    let data = {
      title: this.props.title,
      img_url: this.props.img_Url,
      description: this.props.description

    }

    // this.props.showModal(data)
  }

  render() {
    return (
      <>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            onClick={this.newClicks}
            variant="top"
            src={this.props.imgUrl}
            alt={this.props.title}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>{this.state.clicks}</Card.Text>
            <Button variant="primary">
              <img
                onClick={this.newClicks}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYosBicVMF7B-w1lQeHj7Q5GYmVvmwGC5Xbg&usqp=CAU"
                alt="heart"
                width="20px"
                height="25px"
              />
            </Button>
            <Button   onClick ={()=>  {this.props.showModal(this.props.data)} }>click me</Button>
          </Card.Body>
        </Card>
      </Col>

         

    {/* <myModal showModal = {this.state.show}   closeData = {this.closeModal}  animal /> */}
</>
    );
  }
}

export default HornedBeats;
