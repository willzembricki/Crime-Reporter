import React, { Component } from "react";
import USAMap from "react-usa-map";

class Map extends Component {
  /* mandatory */
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };
  statesCustomConfig = () => {
    return {
      OR: {
        fill: "navy",
        clickHandler: (event) => {
          this.props.stateClicker(1);
          this.props.toggle();
        },
      },
      AR: {
        fill: "navy",
        clickHandler: (event) => {
          this.props.stateClicker(2);
          this.props.toggle();
        },
      },
      CO: {
        fill: "navy",
        clickHandler: (event) => {
          this.props.stateClicker(5);
          this.props.toggle();
        },
      },
    };
  };
  render() {
    return (
      <div className="App">
        <USAMap
          customize={this.statesCustomConfig()}
          width="650"
          height="420"
          onClick={this.mapHandler}
        />
      </div>
    );
  }
}

export default Map;
