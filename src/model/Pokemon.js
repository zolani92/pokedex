export default class Pokemon {
  constructor(pokemon, pokemonDetails) {
    const { id, name, sprites, types } = pokemon.data;

    const description = pokemonDetails.data.flavor_text_entries
      .filter(
        description =>
          description.language.name === "en" &&
          description.version.url === "https://pokeapi.co/api/v2/version/1/"
      )
      .map(description => description.flavor_text);

    this.id = id;
    this.name = name;
    this.image = { uri: sprites.front_default };
    this.types = types.map(type => type.type.name);
    this.description = description;
    this.weight = data.weight;
    this.height = data.height;
    this.likesCount = 0;
  }
}
