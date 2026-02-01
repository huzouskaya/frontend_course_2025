<template>
  <div class="page-wrapper">
    <Header />
    <main class="main-content">
      <Slider />
      <Stats />
      <Projects />
      <News />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Slider from '../components/Slider.vue'
import Stats from '../components/Stats.vue'
import Projects from '../components/Projects.vue'
import News from '../components/News.vue'
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
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
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

.no-scroll {
  overflow: hidden;
}
</style>