import React, { Component } from "react";
import PokeRaw from "./pokeRaw";

class PokeTable extends Component {
  render() {
    let pokemonRows = this.props.pokemons.map(pokemon => (
      <PokeRaw key={pokemon.name} pokemon={pokemon} />
    ));

    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Likes</th>
            <th scope="col">Display</th>
          </tr>
        </thead>
        <tbody>{pokemonRows}</tbody>
      </table>
    );
  }
}

export default PokeTable;
