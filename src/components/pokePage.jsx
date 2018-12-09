import React, { Component } from "react";

class PokePage extends Component {
  render() {
    const { id, name, type, description, image } = this.props.pokemon;

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
          <h5 className="card-title">
            #{id}: {name} ({type})
          </h5>
          <p className="card-text">{description}</p>
          <button className="btn btn-danger m-2" onClick={this.props.onDelete}>
            Delete
          </button>
          <button className="btn btn-info" onClick={this.props.onLike}>
            Like
          </button>
        </div>
      </div>
    );
  }
}

export default PokePage;
