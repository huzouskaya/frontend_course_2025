<script setup>
import NavLinks from './NavLinks.vue'
import ContactItems from './ContactItems.vue'
import logoSvg from '../public/images/logo.svg?raw'
import { computed } from 'vue'

const logoSrc = computed(() => {
    const whiteSvg = logoSvg.replace(/#254741/g, '#FFFFFF')
    return `data:image/svg+xml;base64,${btoa(whiteSvg)}`
})

import { ref } from 'vue'
import Dialog from './Dialog.vue'

const isDialogOpen = ref(false)
</script>

<template>
    <footer class="footer">
        <div class="footer-grid">
            <div class="logo">
                <img :src="logoSrc" alt="загдом" class="logo-icon" />
            </div>
            <NavLinks class="nav-links" />
            <ContactItems class="footer-contacts" />
            <button class="cta-button" @click="isDialogOpen = true">Оставить заявку</button>
        </div>

        <div class="footer-bottom">
            <div class="footer-items">
                <p class="copyright">© Загдом, 2021</p>
                <p class="policy">Политика конфиденциальности</p>
                <p class="agreement">Пользовательское соглашение</p>            
            </div>
        </div>

        <Dialog v-model:open="isDialogOpen" />
    </footer>
</template>

<style scoped lang="scss">
@use '../assets/scss/mixins' as m;

* { box-sizing: border-box; }
a { text-decoration: none; color: inherit; }

.footer {
    background: #254741;
    color: white;
    padding: 40px 24px 32px;
    width: 100%;
}

.footer-bottom {
    margin: 0 auto;
    @include m.media-breakpoint(lg) {
        width: 95%;
    }
}

.footer-grid,
.footer-items {
    max-width: 1264px;
    margin: 0 auto;
}

.footer-items {
    margin-top: 24px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    line-height: 1.2;
    font-family: var(--font-sec);
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.footer-grid {
    display: grid;
    gap: 32px;
    align-items: start;
    grid-template-areas:
        "logo"
        "nav"
        "contacts"
        "cta";
}

.logo { grid-area: logo; }
.nav-links { grid-area: nav; }
.footer-contacts { grid-area: contacts; }
.cta-button { grid-area: cta; }

.cta-button {
    @include m.button-style(var(--main-color), #ffffff, 204px, 49px);
    padding: 16px 40px;
}

.nav-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.footer-contacts {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.nav-links :deep(a) {
    @include m.text-style(var(--font-sec), 16px, 400, 1.2, #ffffff);
}

.footer-contacts :deep(.contact-item) {
    @include m.flex-center;
    gap: 8px;
    @include m.text-style(var(--font-prim), 14px, 400, 1.2, #ffffff);
}

.footer-contacts :deep(.icon) {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
}

.logo-icon {
    width: 160px;
    height: 39px;
    display: block;
}

@include m.media-breakpoint(sm) {
    .footer-grid {
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
        "logo cta"
        "nav contacts";
    }
}

@include m.media-breakpoint(md) {
    .footer-items {
        margin-top: 40px;
        flex-direction: row;
        margin-left: 0;
        width: 90%;
        justify-content: space-between;
    }
}

@include m.media-breakpoint(lg) {
    .footer-grid {
        grid-template-columns: 160px 1fr 1fr 204px;
        grid-template-areas: "logo nav contacts cta";
        gap: 80px;
    }

    .footer-items {
        width: 66%;
    }

    .logo,
    .nav-links,
    .footer-contacts,
    .cta-button {
        width: auto;
    }
}

.copyright,
.policy,
.agreement {
    margin: 0;
}
</style>