<template>
  <header>
    <nav class="container">
      <div class="branding">
        <RouterLink to="/"> <img src="../assets/img/Logo.png" alt="" /></RouterLink>
        <h1>Your Todo App</h1>
      </div>
      <ul class="nav-routes">
        <RouterLink to="/">Main</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
@import '../assets/styles/index.scss';
header {
  background-color: $secondary;
  nav {
    display: flex;
    align-items: center;
    padding: 25px 16px;

    .branding {
      display: flex;
      align-items: center;
      gap: 8px;
      img {
        max-width: 50px;
      }

      h1 {
        font-size: 24px;
      }
    }

    .nav-routes {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 12px;
      list-style: none;
      font-weight: 700;

      a {
        text-decoration: none;
        color: inherit;
        &:hover {
          color: $accent;
          transition: $animation;
        }
      }
    }
  }
}
</style>
