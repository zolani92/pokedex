export default class Pokemon {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.image = { uri: data.sprites.front_default };
    this.types = data.types.map(type => type.type.name);
    this.weight = data.weight;
    this.height = data.height;
    this.description = data.description;
    this.likesCount = 0;
  }
}
