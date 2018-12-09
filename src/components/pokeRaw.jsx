import React, { Component } from "react";

class PokeRaw extends Component {
  render() {
    const { name, type, likesCount } = this.props.pokemon;

    return (
      <tr>
        <td>{name}</td>
        <td>{type}</td>
        <td>{likesCount}</td>
        <td>Display</td>
      </tr>
    );
  }
}

export default PokeRaw;
