import React, { Component } from "react";
import HornedBeats from "./HornedBeats";
import hornedAnimalArr from "./hornedbeats.json";
import { Row } from 'react-bootstrap' ;



class Main extends Component {
  render() {
    return (
      <Row>
        {hornedAnimalArr.map((animal, i) => {
          return (
            <div>
              <HornedBeats
                key={i}
                clicks={0}
                title={animal.title}
                imgUrl={animal.image_url}
                description={animal.description}
                showModal={this.props.selectedbeats}
              />
            </div>
          );
        })}
      </Row>
    );
  }
}

export default Main;
