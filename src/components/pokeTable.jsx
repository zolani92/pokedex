import React, { Component } from "react";
import PokeRaw from "./pokeRow";

class PokeTable extends Component {
  render() {
    let pokemonRows = this.props.pokemons.map(pokemon => (
      <PokeRaw
        key={pokemon.id}
        pokemon={pokemon}
        onDisplay={() => this.props.onDisplay(pokemon.id)}
      />
    ));

    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Types</th>
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
