<script setup>
import NavLinks from './NavLinks.vue'
import ContactItems from './ContactItems.vue'
import logoSvg from '../public/images/logo.svg?raw'
import { computed, ref } from 'vue'
import Dialog from './Dialog.vue'

const logoSrc = computed(() => {
    const whiteSvg = logoSvg.replace(/#254741/g, '#FFFFFF')
    return `data:image/svg+xml;base64,${btoa(whiteSvg)}`
})

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

        <div class="copyright">© Загдом, 2021</div>
        <div class="policy">Политика конфиденциальности</div>
        <div class="agreement">Пользовательское соглашение</div>
        </div>

        <Dialog v-model:open="isDialogOpen" />
    </footer>
</template>

<style scoped lang="scss">
@use '../assets/scss/mixins' as m;

* { box-sizing: border-box; }
a { text-decoration: none; color: inherit; }

.footer {
    background: var(--dark-main-color);
    color: white;
    padding: 40px 24px 32px;
    width: 100%;
}

.footer-grid {
    display: grid;
    gap: 32px;
    max-width: 1264px;
    margin: 0 auto;

    grid-template-areas:
        "logo"
        "cta"
        "nav"
        "contacts"
        "copyright"
        "policy"
        "agreement";

    @include m.media-breakpoint(sm) {
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
        "logo cta"
        "nav contacts"
        "copyright copyright"
        "policy agreement";
    }

    @include m.media-breakpoint(lg) {
        grid-template-columns: 160px 1fr 1fr 204px;
        grid-template-areas:
        "logo nav contacts cta"
        "copyright policy agreement .";
        gap: 80px;
    }
}

.logo { grid-area: logo; }
.cta-button { grid-area: cta; }
.nav-links { grid-area: nav; }
.footer-contacts { grid-area: contacts; }
.copyright { grid-area: copyright; }
.policy { grid-area: policy; }
.agreement { grid-area: agreement; }

.logo-icon {
    width: 160px;
    height: 39px;
    display: block;
}

.cta-button {
    @include m.button-style(var(--main-color), #ffffff, 204px, 49px);
    padding: 16px 40px;
    width: 100%;
    @include m.media-breakpoint(lg) {
        width: auto;
    }
}

.nav-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.nav-links :deep(a) {
    @include m.text-style(var(--font-sec), 16px, 400, 1.2, #ffffff);
}

.footer-contacts {
    display: flex;
    flex-direction: column;
    gap: 24px;
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

.copyright,
.policy,
.agreement {
    margin: 0;
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    font-family: var(--font-sec);
    line-height: 1.2;
}
</style>