import React, { Component } from "react";
import PokeTable from "./components/pokeTable";
import PokePage from "./components/pokePage";
import NavBar from "./components/common/navBar";

class App extends Component {
  state = {
    pokemons: [
      {
        id: 25,
        name: "Pikachu",
        type: "Electrik",
        likesCount: 26
      },
      {
        id: 4,
        name: "Charmander",
        type: "Fire",
        likesCount: 11
      },
      {
        id: 7,
        name: "Squirtle",
        type: "Water",
        likesCount: 12
      },
      {
        id: 1,
        name: "Bulbasaur",
        type: "Grass",
        likesCount: 2
      }
    ],
    selectedPokemonId: 4
  };

  handleDisplay = pokemonId => {
    this.setState({ selectedPokemonId: pokemonId });
  };

  findPokemonToDisplay = () => {
    return {
      ...this.state.pokemons.filter(
        pokemon => pokemon.id === this.state.selectedPokemonId
      )[0]
    };
  };

  render() {
    const pokemons = this.state.pokemons;
    const navBarText = `${pokemons.length} Pokemon in the Pokedex left!`;

    return (
      <div>
        <NavBar text={navBarText} />
        <div className="container">
          <div className="row">
            <div className="col">
              <PokeTable pokemons={pokemons} onDisplay={this.handleDisplay} />
            </div>
            <div className="col">
              <PokePage pokemon={this.findPokemonToDisplay()} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
