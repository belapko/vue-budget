<script setup lang="ts">
import { Authentication } from '@/features/auth'
import { onMounted } from 'vue'

onMounted(() => {
  document.body.classList.value = 'dark'
})
</script>

<template>
  <div class="container">
    <picture class="picture">
      <img class="image" src="/welcome-page.png" />
      <div class="pictureText">
        <span><span class="accentText">Легко</span> считать,</span>
        <span><span class="accentText">Разумно</span> тратить...</span>
      </div>
    </picture>
    <div class="authCard">
      <div class="header">
        <h1 class="title"><span class="accentText">Budget</span> Tracker</h1>
      </div>
      <Authentication trial />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100vh;
  display: flex;
  color: var(--light-color);
  background-color: var(--dark-color);
}

.picture {
  position: relative;
  flex: 1 1 0px;

  .image {
    margin: 0 auto;
    height: 100%;
    background-color: var(--light-color);
    object-fit: cover;
  }

  .pictureText {
    position: absolute;
    left: 25%;
    top: 25%;
    display: flex;
    flex-direction: column;
    color: var(--dark-color);
    font-weight: var(--font-semibold);
    font-size: 32px;
  }
}

.authCard {
  flex: 1 1 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  .header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .title {
      text-align: center;
      font-size: 3rem;
      font-weight: var(--font-bold);
    }
  }
}
.accentText {
  color: var(--accent-color-green);
}

@media screen and (min-width: 1440px) {
  .container {
    padding: 96px 128px;
  }
}

@media screen and (max-width: 960px) {
  .picture {
    display: none;
  }
}
</style>
