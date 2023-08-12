<template>
  <button>
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@import '../assets/styles/index.scss';
button {
  background: $secondary;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  transition: $animation;
  border-radius: 2px;
  &:hover {
    background: $accent;
    color: $white;
  }
}
</style>
