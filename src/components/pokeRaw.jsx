import React, { Component } from "react";

class PokeRaw extends Component {
  render() {
    const { name, likesCount } = this.props.pokemon;

    return (
      <tr>
        <td>{name}</td>
        <td>{likesCount}</td>
        <td>
          <button className="btn btn-primary" onClick={this.props.onDisplay}>
            Display
          </button>
        </td>
      </tr>
    );
  }
}

export default PokeRaw;
