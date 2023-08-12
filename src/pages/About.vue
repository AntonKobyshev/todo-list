<template>
<main>
  <div class="about">
    <div class="info">
      <h2> Сreated by Anton Kobyshev.</h2>
    </div>
    <div class="links">
      <a href="https://github.com/your-username" target="_blank">GitHub</a>
      <a href="https://portfolio-link.com" target="_blank">Portfolio</a>
      <a href="https://t.me/your-telegram-username" target="_blank">Telegram</a>
    </div>
  </div>
  </main>
</template>

<style>
  .about {
    padding-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .info {
    max-width: 800px;
    text-align: center;
    margin-bottom: 20px;
  }

  .links {
    display: flex;
    align-items: center;
  }

  .links a {
    display: inline-block;
    margin: 10px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .links a:hover {
    background-color: #0056b3;
  }
</style>
