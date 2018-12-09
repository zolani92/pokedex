import React, { Component } from "react";

class PokeTable extends Component {
  render() {
    return this.props.pokemons.map(pokemon => (
      <p key={pokemon.name}>
        {pokemon.name} - {pokemon.type}
      </p>
    ));
  }
}

export default PokeTable;
