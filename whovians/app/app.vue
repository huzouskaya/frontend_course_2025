<template>
  <div class="page-wrapper">
    <Header />
    <main class="main-content">
      <div class="container">
        <h1>Whovians place</h1>
        <p>В ожидании новостей по вселенной Доктора Кто</p><br>
        <img src="/images/doctorwho.jpg" alt="13 докторов" loading="lazy" width="750px">
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<style>
:root {
  --font-prim: 'Montserrat', sans-serif;
  --font-sec: 'Open Sans', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  font-family: var(--font-sec);
  line-height: 1.6;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
}

.page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>