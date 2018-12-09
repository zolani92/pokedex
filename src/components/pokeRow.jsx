import React, { Component } from "react";

class PokeRaw extends Component {
  render() {
    const { id, name, types, likesCount } = this.props.pokemon;

    return (
      <tr>
        <td>{id}</td>
        <td>{name.toUpperCase()}</td>
        <td>{types.join(", ")}</td>
        <td>{likesCount || 0}</td>
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
