<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <main>
    <div class="about">
      <div class="info">
        <h2>Created by Anton Kobyshev</h2>
      </div>
      <div class="links">
        <a href="https://github.com/AntonKobyshev" target="_blank">
          <Icon icon="mdi:github" />
          GitHub
        </a>
        <a href="https://antonkobyshev.github.io/Portfolio-Anton-Kobyshev/" target="_blank">
          <Icon icon="zondicons:portfolio" />
          Portfolio
        </a>
        <a href="https://t.me/Dweep23" target="_blank">
          <Icon icon="ic:baseline-telegram" />
          Telegram
        </a>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '../assets/styles/index.scss';
  .about {
    padding-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .info {
    max-width: 1040px;
    text-align: center;
    margin-bottom: 24px;
  }

  .links {
    display: flex;
    align-items: center;
  }

  .links a {
    display: inline-flex; /* Use inline-flex to align icon and text */
    align-items: center; /* Vertically center icon and text */
    margin: 10px;
    padding: 10px 20px;
    background-color: $secondary;
    color: $text;
    text-decoration: none;
    border-radius: 4px;
    transition: $animation;
  }

  .links a:hover {
    background-color: $accent;
    color: $white;
  }

  /* Styles for the Iconify icons */
  .iconify {
    font-size: 1.2rem; /* Adjust the size of the icons */
    margin-right: 8px; /* Add some spacing between icon and text */
  }
</style>
