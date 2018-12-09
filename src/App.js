import React, { Component } from "react";
import PokeTable from "./components/pokeTable";
import PokePage from "./components/pokePage";

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
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <PokeTable pokemons={this.state.pokemons} />
          </div>
          <div className="col">
            <PokePage pokemon={this.state.pokemons[1]} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
