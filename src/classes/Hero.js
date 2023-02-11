import Actor from "@/classes/Actor";

class Hero extends Actor {
  constructor(id, img, name, str, dex, con) {
    super(id, img, name);
    this.str = str;
    this.dex = dex;
    this.con = con;
    super.atk = Math.floor(this.str / 2);
    super.hp = Math.floor(this.con / 2);
    super.maxHp = this.hp;
    super.speed = Math.floor(this.dex / 2);
    super.stamina = Math.floor(this.dex / 4) ? Math.floor(this.dex / 4) : 1;
    super.maxStamina = this.stamina;
  }

  attack(monster) {
    if (this.stamina > 0) {
      this.stamina--;
      monster.hp -= this.atk;
    }
  }
}

const loosingState = new Hero(
  3,
  require("@/assets/heroes/dead_hero_fantasy.png"),
  "DEAD",
  0,
  0,
  0
);

const winnerState = new Hero(
  4,
  require("@/assets/heroes/Winner_fantasy_hero.png"),
  "WIN",
  0,
  0,
  0
);

const shadowState = new Hero(
  0,
  require("@/assets/heroes/shadow_hero_fantasy.png"),
  "shadow",
  0,
  0,
  0
);

export { Hero, winnerState, loosingState, shadowState };
