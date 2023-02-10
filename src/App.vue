<template>
  <div id="app">
    <battle-view></battle-view>
    <button type="button" @click="initiate">Initial</button>
  </div>
</template>

<script>
import BattleView from "@/components/BattleView";
import { randomValueTest } from "@/services/UtilityService";

export default {
  name: "App",
  components: {
    BattleView,
  },
  data() {
    return {};
  },
  methods: {
    initiate() {
      console.log(randomValueTest(1, 2, 10000000));
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
