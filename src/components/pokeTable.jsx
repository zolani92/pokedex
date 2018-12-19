import React from "react";
import PokeRow from "./pokeRow";

const PokeTable = ({ pokemons }) => {
  let pokemonRows = pokemons.map(pokemon => (
    <PokeRow key={pokemon.id} pokemon={pokemon} />
  ));

  return (
    <table className="table table-hover fixed_header table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Types</th>
          <th scope="col">Likes</th>
          <th scope="col">Display</th>
        </tr>
      </thead>
      <tbody>{pokemonRows}</tbody>
    </table>
  );
};

export default PokeTable;
