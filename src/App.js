import React, { Component } from "react";
import PokeTable from "./components/pokeTable";
import PokePage from "./components/pokePage";
import { pokemon_list } from "./assets/pokeList";

class App extends Component {
  state = {
    pokemons: pokemon_list,
    selectedPokemon: {
      id: 25,
      name: "pikachu",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      types: ["electric"],
      description:
        "When several of these POKéMON gather, their electricity could build and cause lightning storms.",
      weight: 4,
      height: 60
    },
    loading: false
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <PokePage pokemon={this.state.selectedPokemon} />
            </div>
            <div className="col">
              <PokeTable
                pokemons={this.state.pokemons}
                selectedPokemon={this.state.selectedPokemon}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
