<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p class="error-message">Sorry, the requested page does not exist.</p>
    <router-link to="/" class="return-link">Return to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/index.scss';

.not-found {
  text-align: center;
  margin-top: 100px;
}

.error-message {
  color: $error;
}

.return-link {
  color: $text;
  text-decoration: none;
  transition: $animation;
  &:hover{
    color: $accent;
  }
}
</style>


