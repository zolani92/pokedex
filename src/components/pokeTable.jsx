import React, { Component } from "react";
import PokeRow from "./pokeRow";

class PokeTable extends Component {
  render() {
    let pokemonRows = this.props.pokemons.map(pokemon => (
      <PokeRow
        key={pokemon.id}
        pokemon={pokemon}
        onDisplay={() => this.props.onDisplay(pokemon.id)}
        isDisabled={
          this.props.selectedPokemon
            ? this.props.selectedPokemon.id === pokemon.id
            : false
        }
      />
    ));

    return (
      <table className="table table-hover fixed_header">
        <thead className="thead-light">
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
