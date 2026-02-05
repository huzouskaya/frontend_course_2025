<template>
  <header class="header">
    <input 
      type="checkbox" 
      id="drawer-toggle" 
      class="drawer-checkbox" 
      v-model="drawerOpen"
      @change="toggleDrawer"
    />

    <nav class="nav">
      <div class="logo">
        <img src="/images/logo.svg" alt="zagdom" width="160" height="39" loading="lazy" />
      </div>

      <div class="nav-right">
        <div class="desktop-only">
          <ul class="nav-menu">
            <li><NuxtLink to="/">Реализованные проекты</NuxtLink></li>
            <li><NuxtLink to="/news">Новости</NuxtLink></li>
            <li><NuxtLink to="/contacts">Контакты</NuxtLink></li>
          </ul>
        </div>
        <div class="header-contacts">
          <div class="phone">
            <img src="/images/phone.svg" alt="phone" width="16" height="16" loading="lazy" />
            +7 (900) 900-90-90
          </div>
          <button class="cta-button" @click="isDialogOpen = true">Оставить заявку</button>
          <Dialog v-model:open="isDialogOpen" />
        </div>

        <label for="drawer-toggle" class="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </nav>

    <label for="drawer-toggle" class="drawer-backdrop"></label>

    <div class="drawer">
      <label for="drawer-toggle" class="drawer-close">×</label>
      <div class="drawer-navlinks-wrapper">
        <NavLinks />
      </div>
      <div class="drawer-contacts-wrapper">
        <ContactItems variant="white"/>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'
import Dialog from './Dialog.vue'
import NavLinks from './NavLinks.vue'
import ContactItems from './ContactItems.vue'

const drawerOpen = ref(false)

watch(drawerOpen, (newVal) => {
  document.body.classList.toggle('no-scroll', newVal)
})

onUnmounted(() => {
  document.body.classList.remove('no-scroll')
})

const isDialogOpen = ref(false)
</script>

<style scoped lang="scss">
@use '../assets/scss/mixins' as m;

* { box-sizing: border-box; }

.header {
  width: 100%;
  background: white;
  position: relative;
  z-index: 100;
}

.nav {
  max-width: 1264px;
  margin: 0 auto;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 16px;
}

.nav-right {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 24px;
}

.logo img {
  height: 39px;
  width: auto;
  display: block;
}

.menu-toggle {
  @include m.button-style(var(--main-color), white, 59px, 49px, 10px);
  @include m.burger-icon(24px, 3px, 5px);
  padding: 0;
}

.drawer-checkbox { display: none; }

.drawer-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.drawer-checkbox:checked ~ .drawer-backdrop {
  opacity: 1;
  visibility: visible;
}

.drawer {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 80%;
  max-width: 320px;
  background: var(--main-color);
  color: white;
  padding: 64px 24px 24px;
  overflow-y: auto;
  z-index: 1000;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
}

.drawer-contacts-wrapper {
  margin-top: auto;
  padding-top: 40px;
  margin-bottom: 20px;
}

.drawer-navlinks-wrapper {
  margin-top: 20px;
}

.drawer :deep(.icon) {
  filter: brightness(0) invert(1);
}

.drawer-close {
  position: absolute;
  top: 20px;
  right: 24px;
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: white;
  cursor: pointer;
  border: none;
  padding: 0;
}

.drawer-checkbox:checked ~ .drawer {
  transform: translateX(0);
}

.cta-button {
  display: block;
  @include m.button-style(var(--main-color), white, 204px, 49px);
}

@include m.media-breakpoint(xs) {
  .desktop-only {
    display: none;
  }

  .nav-menu,
  .cta-button {
    display: none;
  }
}

@include m.media-breakpoint(xs) {
  .desktop-only {
    display: none;
  }
}

@include m.media-breakpoint(sm) {
  .nav {
    padding: 0 20px;
  }

  .desktop-only {
    margin-right: 50px;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .nav-menu,
  .cta-button {
    display: none;
  }

  .header-contacts {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .phone {
    display: flex;
    align-items: center;
    @include m.text-style(var(--font-prim), 14px, 400, 1.2, #254741);
    gap: 6px;
  }
}

@include m.media-breakpoint(md) {
  .nav {
    padding: 0 24px;
  }

  .nav-menu {
    display: none;
  }
  
  .header-contacts {
    gap: 16px;
  }

  .cta-button {
    display: block;
  }
}

@include m.media-breakpoint(lg) {
  .nav {
    padding: 0 32px;
  }

  .menu-toggle {
    display: none;
  }

  .drawer,
  .drawer-backdrop {
    display: none !important;
  }

  .desktop-only {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;
  }

  .nav-menu {
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: right;
    width: auto;
  }

  .nav-menu li {
    display: inline;
    margin-right: 24px; 
  }

  .nav-menu li:nth-child(1) {
    display: block;     
    margin-right: 0;
  }

  .nav-menu a {
    @include m.text-style(var(--font-sec), 16px, 400, 1.2, var(--description-text-color));
    text-decoration: none;

    &:hover {
      color: var(--main-color);
    }

    &.router-link-active {
      color: var(--main-color);
    }
  }

  .header-contacts {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .cta-button {
    display: block;
  }
}

@include m.media-breakpoint(xl) {
  .desktop-only {
    flex-direction: row;
    gap: 80px;
  }

  .nav-menu {
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: center;
    height: 100%;
  }

  .nav-menu li {
    display: flex;
    height: 100%;
    margin: 0;
  }

  .nav-menu a {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .header-contacts {
    gap: 24px;
  }
}
</style>