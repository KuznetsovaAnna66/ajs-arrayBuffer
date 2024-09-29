export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  set stoned(value) {
    this._stoned = value;
  }
  get stoned() {
    return this._stoned;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    let resultAttack = this._attack - (this.distance - 1) * 10;

    if (this.stoned) {
      resultAttack -= Math.log2(this.distance) * 5;
    }

    return Math.floor(resultAttack);
  }
}
