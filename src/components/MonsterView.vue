<template>
  <div class="border">
    <img :src="monster.img" width="100" height="150" :style="grayScale" />
    <p style="font-weight: bold">{{ monster.name }}</p>
    <p style="color: red">{{ monster.hp }}</p>
    <p>{{ monster.atk }}</p>
  </div>
</template>

<script>
export default {
  name: "MonsterView",
  props: ["monster"],
  data() {
    return {
      maxHP: this.monster.hp,
    };
  },
  computed: {
    grayScale() {
      if (this.monster.hp <= 0) {
        return "filter: grayscale(1)";
      } else {
        return `filter: grayscale(${1 - this.monster.hp / this.maxHP})`;
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
