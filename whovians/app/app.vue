<template>
  <div>
    <Header />
    <main class="main-layout">
      <Sidebar />
      <MainContent />
      <Gallery />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import MainContent from '../components/MainContent.vue'
import Gallery from '../components/Gallery.vue'
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

body {
  font-family: var(--font-sec);
  line-height: 1.6;
  background-color: #f4f4f4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-layout {
  display: flex;
  align-items: stretch;
  flex: 1;
}
</style>