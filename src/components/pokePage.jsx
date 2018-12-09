import React from "react";

const PokePage = ({ pokemon, onDelete, onLike }) => {
  if (pokemon) {
    return (
      <div
        className="card border-light text-center"
        style={{
          alignItems: "center"
        }}
      >
        <img
          className="card-img-top"
          src={pokemon.image.uri}
          alt="Pokemon caption"
          style={{
            width: 200,
            height: 200
          }}
        />
        <div className="card-body">
          <h5 className="card-title">
            #{pokemon.id}: {pokemon.name} ({pokemon.types})
          </h5>
          <p className="card-text">{pokemon.description}</p>
          <button className="btn btn-danger m-2" onClick={onDelete}>
            Delete
          </button>
          <button className="btn btn-info" onClick={onLike}>
            Like
          </button>
        </div>
      </div>
    );
  } else return false;
};

export default PokePage;
