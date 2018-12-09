import React, { Component } from "react";
import PokeTable from "./components/pokeTable";
import PokePage from "./components/pokePage";
import Loading from "./components/common/loading";
import NavBar from "./components/common/navBar";
import Pokemon from "./model/Pokemon";
import { pokemon_list } from "./assets/pokeList";
import axios from "axios";

class App extends Component {
  state = {
    pokemons: pokemon_list,
    selectedPokemon: undefined,
    loading: false
  };

  handleDisplay = async pokemonId => {
    try {
      this.setState({ loading: true });
      const [pokemon, pokemonDetails] = await Promise.all([
        axios(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`),
        axios(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`)
      ]);
      this.setState({ selectedPokemon: new Pokemon(pokemon, pokemonDetails) });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleDelete = () => {
    const pokemons = this.state.pokemons.filter(
      pokemon => pokemon.id !== this.state.selectedPokemon.id
    );
    this.setState({ pokemons });
    this.setState({ selectedPokemon: undefined });
  };

  handleLike = () => {
    const pokemons = [
      ...this.state.pokemons.filter(
        pokemon => pokemon.id !== this.state.selectedPokemon.id
      )
    ];
    const pokemonToLike = {
      ...this.state.pokemons.filter(
        pokemon => pokemon.id === this.state.selectedPokemon.id
      )[0]
    };
    pokemonToLike.likesCount = (pokemonToLike.likesCount || 0) + 1;
    pokemons.push(pokemonToLike);
    this.sortByLikesCountDesc(pokemons);
    this.setState({ pokemons });
  };

  sortByLikesCountDesc(pokemons) {
    pokemons.sort(
      (pokemon1, pokemon2) =>
        (pokemon2.likesCount || 0) - (pokemon1.likesCount || 0)
    );
  }

  render() {
    const navBarText = `${
      this.state.pokemons.length
    } Pokemon in the Pokedex left!`;

    return (
      <div>
        <NavBar text={navBarText} />
        <div className="container">
          <div className="row">
            <div className="col">
              <PokeTable
                pokemons={this.state.pokemons}
                onDisplay={this.handleDisplay}
              />
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
