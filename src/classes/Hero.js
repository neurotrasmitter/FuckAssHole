class Hero {
  constructor(id, img, name, str, dex, con) {
    (this.id = id), (this.img = img);
    this.name = name;
    this.str = str;
    this.dex = dex;
    this.con = con;
    this.atk = Math.floor(this.str / 2);
    this.hp = Math.floor(this.con / 2);
    this.speed = Math.floor(this.dex / 2);
  }

  attack(monster) {
    monster.hp -= this.atk;
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
