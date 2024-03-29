import React, { Component } from "react";
import USAMap from "react-usa-map";
var randomColor = require("randomcolor");
class Map extends Component {
  /* mandatory */
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };
  statesCustomConfig = () => {
    return {
      OR: {
        fill: randomColor(),
        clickHandler: (event) => {
          this.props.stateClicker(1);
          this.props.toggle();
        },
      },
      AR: {
        fill: randomColor(),
        clickHandler: (event) => {
          this.props.stateClicker(2);
          this.props.toggle();
        },
      },
      IA: {
        fill: randomColor(),
        clickHandler: (event) => {
          this.props.stateClicker(3);
          this.props.toggle();
        },
      },
      KS: {
        fill: randomColor(),
        clickHandler: (event) => {
          this.props.stateClicker(4);
          this.props.toggle();
        },
      },
      CO: {
        fill: randomColor(),
        clickHandler: (event) => {
          this.props.stateClicker(5);
          this.props.toggle();
        },
      },
      NJ: {
        fill: randomColor(),
        clickHandler: (event) => {
          this.props.stateClicker(6);
          this.props.toggle();
        },
      },
      NY: {
        fill: randomColor(),
        clickHandler: (event) => {
          this.props.stateClicker(7);
          this.props.toggle();
        },
      },
    };
  };
  render() {
    return (
      <div className="App">
        <h1>Crime Reporter</h1>
        <USAMap
          customize={this.statesCustomConfig()}
          width="650"
          height="420"
          onClick={this.mapHandler}
        />
        <p>
          Highlighted states have data availble for population as well as crime
          graphs. Please select a state and crime that you would like to plot.
          Manually clear selections after selecting get the graph.
        </p>
      </div>
    );
  }
}

export default Map;
