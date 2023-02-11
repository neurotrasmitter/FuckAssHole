import Actor from "@/classes/Actor";

class Monster extends Actor {
  constructor(id, img, name, hp, atk, speed) {
    super(id, img, name);
    super.hp = hp;
    super.maxHp = this.hp;
    super.atk = atk;
    super.speed = speed;
  }
  attack(hero) {
    console.log("отработало");
    if (this.stamina > 0) {
      this.stamina--;
      hero.hp -= this.atk;
    }
  }
}

export default Monster;
