import React, { Component } from "react";
import PokeTable from "./components/pokeTable";
import PokePage from "./components/pokePage";
import Loading from "./components/common/loading";
import NavBar from "./components/common/navBar";
import Pokemon from "./model/Pokemon";
import { pokemon_list } from "./assets/pokeList";

class App extends Component {
  state = {
    pokemons: pokemon_list,
    selectedPokemon: undefined,
    loading: false
  };

  handleDisplay = pokemonId => {
    this.setState({ loading: true });
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(res => res.json())
      .then(data => {
        this.setState({ selectedPokemon: new Pokemon(data) });
      })
      .catch(err => console.log(err))
      .finally(() => this.setState({ loading: false }));
  };

  handleDelete = () => {
    const pokemons = this.state.pokemons.filter(
      pokemon => pokemon.id !== this.state.selectedPokemon.id
    );
    this.setState({ pokemons });
    this.setState({ selectedPokemon: undefined });
  };

  handleLike = () => {
    // TODO
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
              {this.state.loading ? (
                <Loading />
              ) : (
                <PokePage
                  pokemon={this.state.selectedPokemon}
                  onDelete={this.handleDelete}
                  onLike={this.handleLike}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
