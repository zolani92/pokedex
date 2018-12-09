import React from "react";

const formatTitleInfo = pokemon =>
  `#${pokemon.id}: ${pokemon.name.toUpperCase()}`;

const formatSubTitleInfo = pokemon => {
  const { types, height, weight } = pokemon;
  const typeTitle = types.length > 1 ? "Types" : "Type";

  return `${typeTitle}: ${types.join(
    ", "
  )} - Height: ${height} - Weight: ${weight}`;
};

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
          <h5 className="card-title">{formatTitleInfo(pokemon)}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            {formatSubTitleInfo(pokemon)}
          </h6>
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
