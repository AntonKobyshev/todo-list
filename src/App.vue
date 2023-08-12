<script setup>
import { RouterView } from "vue-router";
import TodoHeader from "./components/Header.vue";
</script>

<template>
  <TodoHeader />
  <RouterView />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");

* {
  font-family: "Ubuntu", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1040px;
  margin: 0 auto;
}
</style>
