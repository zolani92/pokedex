import React, { Component } from "react";

class PokePage extends Component {
  render() {
    const { name, description, image } = this.props.pokemon;

    return (
      <div
        className="card border-light text-center"
        style={{
          alignItems: "center"
        }}
      >
        <img
          className="card-img-top"
          src={image}
          alt="Pokemon caption"
          style={{
            width: 200,
            height: 200
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    );
  }
}

export default PokePage;
