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
        description: "This is a description for Pikachu",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        likesCount: 26
      },
      {
        id: 4,
        name: "Charmander",
        type: "Fire",
        description: "This is a description for Charmander",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        likesCount: 11
      },
      {
        id: 7,
        name: "Squirtle",
        type: "Water",
        description: "This is a description for Squirtle",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        likesCount: 12
      },
      {
        id: 1,
        name: "Bulbasaur",
        type: "Grass",
        description: "This is a description for Bulbasaur",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        likesCount: 2
      }
    ],
    selectedPokemonId: 4
  };

  handleDisplay = pokemonId => {
    this.setState({ selectedPokemonId: pokemonId });
  };

  handleDelete = () => {
    const pokemons = this.state.pokemons.filter(
      pokemon => pokemon.id !== this.state.selectedPokemonId
    );
    this.setState({ pokemons });
  };

  handleLike = () => {
    console.log("Like pokemon" + this.state.selectedPokemonId);
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
              <PokePage
                pokemon={this.findPokemonToDisplay()}
                onDelete={this.handleDelete}
                onLike={this.handleLike}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
