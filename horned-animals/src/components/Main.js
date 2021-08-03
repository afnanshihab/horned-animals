import React, { Component } from "react";
import HornedBeats from "./HornedBeats";
import hornedAnimalArr from "./hornedbeats.json";



class Main extends Component {
  render() {
    return (
      <div>
        {hornedAnimalArr.map((animal, i) => {
          return (
            <div>
              <HornedBeats
                key={i}
                clicks={0}
                title={animal.title}
                imgUrl={animal.image_url}
                description={animal.description}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Main;
