class Actor {
  hp = 0;
  maxHp = 0;
  atk = 0;
  speed = 0;
  stamina = 1;
  maxStamina = 1;

  constructor(id, img, name) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.state = {
      burned: 0,
      poisoned: 0,
      regenerate: 0,
      stunned: false,
    };
  }

  workOutTheState() {
    if (this.state.burned > 0) {
      this.hp -= 3;
      this.state.burned--;
    }
    if (this.state.poisoned > 0) {
      this.hp -= this.state.poisoned;
      this.state.poisoned--;
    }
    if (this.state.regenerate > 0) {
      this.hp += this.state.regenerate;
      if (this.hp > this.maxHp) {
        this.hp = this.maxHp;
      }
      this.state.regenerate--;
    }
    if (this.state.stunned) {
      this.stamina = 0;
    } else {
      this.stamina = this.maxStamina;
    }
  }
}

export default Actor;
