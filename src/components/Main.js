import React, { Component } from "react";
import HornedBeats from "./HornedBeats";
import hornedAnimalArr from "./hornedbeats.json";
import { Row, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      horns: 0,
    };
  }

  hornHandler = (e) => {
    this.setState({
      horns: e.target.value,
    });
  };
  render() {
    return (
      <Container>
        <Row>
          <div>
            <Form.Select onChange={(e) => this.hornHandler(e)}>
              <option>select the number of horns </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Form.Select>
          </div>
          <div>
            {this.props.data.map((animal) => {
              return (
                (Number(this.state.horns) === animal.horns && (
                  <HornedBeats
                    
                    clicks={0}
                    title={animal.title}
                    imgUrl={animal.image_url}
                    description={animal.description}
                    showModal={this.props.showDataList}
                    data={animal}
                  />
                )) ||
                (Number(this.state.horns) === 0 && (
                  <HornedBeats
                   
                    clicks={0}
                    title={animal.title}
                    imgUrl={animal.image_url}
                    description={animal.description}
                    showModal={this.props.showDataList}
                    data={animal}
                  />
                ))
              );
            })}
          </div>
        </Row>
      </Container>
    );
  }
}

export default Main;
