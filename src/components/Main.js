import React, { Component } from "react";
import HornedBeats from "./HornedBeats";
import hornedAnimalArr from "./hornedbeats.json";
import { Row , Container} from 'react-bootstrap' ;




class Main extends Component {
  render() {
    return (
      <Container>
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
                showModal={this.props.showDataList}
                data = { animal }
              />
            </div>
          );
        })}
      </Row>
      </Container>
    );
  }
}

export default Main;
