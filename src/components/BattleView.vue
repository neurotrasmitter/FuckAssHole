<template>
  <div>
    <div v-if="currentHero.name === 'DEAD'">
      <h1 style="color: red">YOU LOOSE</h1>
    </div>
    <div v-else-if="currentHero.name === 'WIN'">
      <h1 style="color: blue">YOU WIN</h1>
    </div>
    <div v-else>
      <ul class="mob-list">
        <li
          v-for="(mob, index) of monsters"
          :key="index"
          @click="currentHero.attack(mob)"
        >
          <monster-view :monster="mob" v-if="mob.hp > 0"></monster-view>
        </li>
      </ul>
      <ul style="display: flex">
        <li v-for="hero of heroes" :key="hero.name">
          <hero-view :hero="hero"></hero-view>
        </li>
      </ul>
      <button type="button" v-if="inBattle" @click="nextMove">Next Move</button>
      <button type="button" v-else @click="init">Start Battle</button>
    </div>
  </div>
</template>

<script>
import MonsterView from "@/components/MonsterView";
import GetMonsterService from "@/services/GetMonsterService";
import { gl } from "@/services/GameLoopService";
import { Hero, shadowState } from "@/classes/Hero";
import HeroView from "@/components/HeroView";
export default {
  name: "BattleView",
  components: { HeroView, MonsterView },
  data() {
    return {
      monsters: GetMonsterService(3),
      heroes: [
        new Hero(1, require("@/assets/heroes/Knight.png"), "Stan", 10, 10, 10),
        new Hero(2, require("@/assets/heroes/Rogue.png"), "Stiven", 5, 20, 5),
      ],
      inBattle: false,
      currentHero: shadowState,
    };
  },
  methods: {
    init() {
      gl.createLoop(this.monsters, this.heroes);
      this.inBattle = true;
      this.currentHero = gl.nextMove();
    },
    nextMove() {
      this.currentHero = gl.nextMove();
    },
  },
};
</script>

<style scoped>
.mob-list {
  display: flex;
}
</style>
