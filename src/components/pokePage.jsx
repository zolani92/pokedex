import React, { Component } from "react";

class PokePage extends Component {
  render() {
    return <p>Basic info about {this.props.pokemon.name}</p>;
  }
}

export default PokePage;
