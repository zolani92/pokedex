export default class Pokemon {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.image = { uri: data.sprites.front_default };
    this.type = data.types[0].type.name;
    this.description = data.description;
    this.likesCount = 0;
  }
}
