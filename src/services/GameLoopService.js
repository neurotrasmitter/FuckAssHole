import { randomValue } from "@/services/UtilityService";
import Monster from "@/classes/Monster";
import { Hero, winnerState, loosingState } from "@/classes/Hero";

class GameLoop {
  constructor() {
    this.queue = [];
    this.currentActorIndex = 0;
  }

  createLoop(monsters, heroes) {
    this.heroes = heroes;
    this.monsters = monsters;
    this.queue = this.monsters.concat(this.heroes);
    this.queue.sort(function (a, b) {
      return b.speed - a.speed;
    });
  }

  nextMove() {
    if (this.queue.every((el) => el instanceof Monster)) {
      return loosingState;
    }
    if (this.queue.every((el) => el instanceof Hero)) {
      return winnerState;
    }
    let currentActor = this.queue[this.currentActorIndex];
    if (currentActor instanceof Monster) {
      let randomIndex = randomValue(0, this.heroes.length - 1);
      currentActor.attack(this.heroes[randomIndex]);
      if (this.heroes[randomIndex].hp <= 0) {
        this.heroes.splice(randomIndex, 1);
      }
      this._popAllDead();
      this._setCurrentActorPositions(currentActor);
      this._nextPosition();
      this.nextMove();
    }
    this._popAllDead();
    this._setCurrentActorPositions(currentActor);
    this._nextPosition();
    return currentActor;
  }

  _popAllDead() {
    let currentArray = [];
    for (let el of this.queue) {
      if (el.hp > 0) {
        currentArray.push(el);
      }
    }
    this.queue = currentArray;
  }

  _setCurrentActorPositions(currentActor) {
    if (currentActor instanceof Monster) {
      this.currentActorIndex = this._searchMonsterPosition(currentActor);
    } else if (currentActor instanceof Hero) {
      this.currentActorIndex = this._searchHeroPosition(currentActor);
    } else {
      throw new Error(`${currentActor} is not a queue`);
    }
  }

  _searchHeroPosition(hero) {
    for (let i in this.queue) {
      if (this.queue[i] instanceof Hero && hero.id === this.queue[i].id) {
        return i;
      }
    }
    throw new Error(`Not hero with id:${hero.id}`);
  }
  _searchMonsterPosition(monster) {
    for (let i in this.queue) {
      if (this.queue[i] instanceof Monster && monster.id === this.queue[i].id) {
        return i;
      }
    }
    throw new Error(`Not monster with id:${monster.id}`);
  }

  _nextPosition() {
    if (this.currentActorIndex >= this.queue.length - 1) {
      this.currentActorIndex = 0;
    } else {
      this.currentActorIndex++;
    }
  }

  setHeroes(heroesList) {
    this.heroes = heroesList;
  }

  setMonsters(monstersList) {
    this.monsters = monstersList;
  }
}
const gl = new GameLoop();
export { gl };
