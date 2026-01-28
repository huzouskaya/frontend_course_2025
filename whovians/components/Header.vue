<template>
  <header class="header">
    <input type="checkbox" id="drawer-toggle" class="drawer-checkbox" />

    <nav class="nav">
      <div class="logo">
        <img src="/images/logo.png" alt="zagdom" width="160" height="39" loading="lazy" />
      </div>

      <label for="drawer-toggle" class="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <div class="nav-content desktop-only">
        <ul class="nav-menu">
          <li><a href="#">Реализованные проекты</a></li>
          <li><a href="#">Новости</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
        <div class="header-contacts">
          <div class="phone">
            <img src="/images/phone.png" alt="phone" width="16" height="16" loading="lazy" />
            +7 (900) 900-90-90
          </div>
          <button class="cta-button">Оставить заявку</button>
        </div>
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
import NavLinks from './NavLinks.vue'
import ContactItems from './ContactItems.vue'
</script>

<style scoped lang="scss">
@use '../assets/scss/mixins' as m;

* { box-sizing: border-box; }

.header {
  width: 100%;
  background: white;
  padding: 0 16px;
  position: relative;
}

.nav {
  max-width: 1264px;
  margin: 0 auto;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo img {
  height: 39px;
  width: auto;
  display: block;
}

.desktop-only {
  display: none;
}

.menu-toggle {
  @include m.button-style(#029F59, white, 59px, 49px, 10px);
  @include m.burger-icon(24px, 3px, 5px);
  padding: 0;
}

.drawer-checkbox {
  display: none;
}

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
  background: #029F59;
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

@include m.media-breakpoint(lg) {
  .menu-toggle {
    display: none;
  }

  .desktop-only {
    display: flex;
    align-items: center;
    gap: 80px;
    height: 100%;
  }

  .nav-menu {
    display: flex;
    list-style: none;
    gap: 24px;
    margin: 0;
    padding: 0;
    align-items: center;
    height: 100%;
  }

  .nav-menu a {
    @include m.text-style(var(--font-sec), 16px, 400, 1.2, #666666);
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .header-contacts {
    display: flex;
    align-items: center;
    gap: 24px;
    height: 100%;
  }

  .phone {
    display: flex;
    align-items: center;
    @include m.text-style(var(--font-prim), 14px, 400, 1.2, #254741);
    gap: 8px;
  }

  .cta-button {
    @include m.button-style(#029F59, #FFFFFF, 204px, 49px);
  }

  .drawer,
  .drawer-backdrop {
    display: none;
  }
}
</style>