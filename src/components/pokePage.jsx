import React from "react";
import Description from "./common/description";

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
    const image = {
      src: pokemon.image.uri,
      alt: pokemon.name,
      width: 200,
      height: 200
    };

    return (
      <Description
        image={image}
        title={formatTitleInfo(pokemon)}
        subtitle={formatSubTitleInfo(pokemon)}
        text={pokemon.description}
      >
        <button className="btn btn-danger m-2" onClick={onDelete}>
          Delete
        </button>
        <button className="btn btn-primary" onClick={onLike}>
          Like
        </button>
      </Description>
    );
  } else return false;
};

export default PokePage;
