class Monster {
  constructor(id, img, name, hp, atk, speed) {
    this.id = id;
    this.img = img;
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.speed = speed;
  }
  attack(hero) {
    hero.hp -= this.atk;
  }
}

export default Monster;
