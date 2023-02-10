import Monster from "@/classes/Monster";

const forestMonster = [
  {
    img: require("@/assets/monster/goblin_with_sword.png"),
    name: "sworded goblin",
    hp: 8,
    atk: 3,
    speed: 3,
  },
  {
    img: require("@/assets/monster/goblin_with_axe.png"),
    name: "axed goblin",
    hp: 8,
    atk: 4,
    speed: 2,
  },
  {
    img: require("@/assets/monster/goblin_with_hammer.png"),
    name: "smashing goblins",
    hp: 8,
    atk: 5,
    speed: 1,
  },
  {
    img: require("@/assets/monster/goblin_with_staff.png"),
    name: "mage goblin",
    hp: 3,
    atk: 5,
    speed: 3,
  },
];
let id = 0;
function getForestMonster(numberOfMonsters) {
  let result = [];
  for (let i = 0; i < numberOfMonsters; i++) {
    let mobStat =
      forestMonster[Math.floor(Math.random() * forestMonster.length)];
    result.push(
      new Monster(
        id++,
        mobStat.img,
        mobStat.name,
        mobStat.hp,
        mobStat.atk,
        mobStat.speed
      )
    );
  }
  return result;
}

export default getForestMonster;
