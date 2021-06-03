import React, { Component } from "react";
export default class StateCard extends Component {
  render() {
    return (
      <div className="modal">
        <div classNAme="modal_content">
          <span className="close" onClick={this.props.toggle}>
            &times;
          </span>
          <h3>{this.props.displayState.name}</h3>
          <h3>{this.props.displayState.abbreviation}</h3>
          <h3>Population: {this.props.displayState.population}</h3>
        </div>
      </div>
    );
  }
}
