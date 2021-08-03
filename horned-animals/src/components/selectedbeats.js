import React, { Component } from 'react'
import { Card , Modal , Button }   from 'react-bootstrap';

export class selectedbeats extends Component {
    render() {
        return (
            <>
                

      <Modal show={this.props.showData}>
        <Modal.Header >
          <Modal.Title>{this.props.modalData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <Card style={{ width: "18rem" }}>
          <Card.Img
            
            variant="top"
            src={this.props.modalData.img_url}
            alt={this.props.title}
          />
          <Card.Body>
            <Card.Title>{this.props.modalData.title}</Card.Title>
            <Card.Text>{this.props.modalData.description}</Card.Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleExit}>
            Close
          </Button>
         
            </>
        )
    }
};

export default selectedbeats
