import React, { Component } from "react";
import PokeTable from "./components/pokeTable";

class App extends Component {
  state = {
    pokemons: [
      {
        name: "Pikachu",
        type: "Electrik",
        likesCount: 26
      },
      {
        name: "Charmander",
        type: "Fire",
        likesCount: 11
      },
      {
        name: "Squirtle",
        type: "Water",
        likesCount: 12
      },
      {
        name: "Bulbasaur",
        type: "Grass",
        likesCount: 2
      }
    ]
  };
  render() {
    return <PokeTable pokemons={this.state.pokemons} />;
  }
}

export default App;
