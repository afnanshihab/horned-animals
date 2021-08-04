import React, { Component } from 'react'
import { Card , Modal , Button }   from 'react-bootstrap';

export class selectedbeats extends Component {
    render() {
        return (
            <div>
                

                <Modal show={this.props.showModal} onHide={this.props.closeData}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.animal.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Card bg='light'>
                        <Card.Img className='carded' variant="top" src={this.props.animal.imageUrl} width={200} height={280} />
                        <Card.Body>
                            <Card.Text style={{ alignItems: 'center' }}>
                                {this.props.animal.description}
                            </Card.Text>
                        </Card.Body>
                    </Card></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closeData}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
         
            </div>
        )
    }
};

export default selectedbeats
