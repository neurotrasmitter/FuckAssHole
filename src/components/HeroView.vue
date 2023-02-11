<template>
  <div class="border">
    <img :src="hero.img" width="100" height="150" :style="grayScale" />
    <p style="font-weight: bold">{{ hero.name }}</p>
    <p style="color: red">{{ hero.hp }} / {{ hero.maxHp }}</p>
    <p>{{ hero.atk }}</p>
    <p>{{ hero.stamina }} / {{ hero.maxStamina }}</p>
  </div>
</template>

<script>
export default {
  name: "HeroView",
  props: ["hero"],
  computed: {
    grayScale() {
      if (this.hero.hp <= 0) {
        return "filter: grayscale(1)";
      } else {
        return `filter: grayscale(${1 - this.hero.hp / this.hero.maxHp})`;
      }
    },
  },
};
</script>

<style scoped>
.border {
  border: solid black;
}
</style>
