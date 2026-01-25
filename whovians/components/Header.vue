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

        <div class="drawer-backdrop"></div>
        <div class="drawer">
        <label for="drawer-toggle" class="drawer-close">×</label>
        <ul class="drawer-menu">
            <li><a href="#">Реализованные проекты</a></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Контакты</a></li>
            <li class="drawer-contact">
            <img src="/images/phone.png" alt="phone" width="16" height="16" />
            +7 (900) 900-90-90
            </li>
            <li>
            <button class="cta-button">Оставить заявку</button>
            </li>
        </ul>
        </div>
    </header>
</template>

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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 20px;
    background: none;
    border: none;
    cursor: pointer;
    span {
        display: block;
        height: 2px;
        width: 100%;
        background: #666;
        transition: 0.3s;
    }
}

.drawer-checkbox {
    display: none;
}

.drawer-backdrop,
.drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    pointer-events: none;
}

.drawer-backdrop {
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.drawer {
    background: white;
    padding: 64px 24px 24px;
    overflow-y: auto;
    z-index: 1001;
    transform: translateX(100%);
    transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
}

.drawer-menu {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.drawer-menu a,
.drawer-contact {
    @include m.text-style(var(--font-sec), 18px, 400, 1.4, #666666);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
}

.drawer .cta-button {
    @include m.button-style(#029F59, #FFFFFF, 100%, 48px);
    max-width: 300px;
}

.drawer-close {
    position: absolute;
    top: 20px;
    right: 24px;
    font-size: 28px;
    color: #666;
    cursor: pointer;
}

.drawer-checkbox:checked ~ .drawer-backdrop {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
}

.drawer-checkbox:checked ~ .drawer {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
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