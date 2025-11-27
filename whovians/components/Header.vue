<template>
    <header class="header">
        <nav class="nav">
        <div class="logo-nav">
            <div class="logo"><img src="/images/logo.png" alt="zagdom" width="160" height="39" loading="lazy"></div>
            <ul class="nav-menu">
                <li><a href="#">Реализованные проекты</a></li>
                <li><a href="#">Новости</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
        </div>
        <div class="header-contacts">
            <div class="phone">
                <img src="/images/phone.png" alt="phone" width="16" height="16" loading="lazy">
                +7 (900) 900-90-90
            </div>
            <button class="cta-button">Оставить заявку</button>
        </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">
@use '../assets/scss/mixins' as m;

.header {
    width: 1440px;
    height: 97px;
    padding: 24px 88px;
    background: white;
    @include m.flex-center;
    justify-content: center;
    margin: 0 auto;
}

.nav {
    width: 1264px;
    height: 49px;
    display: flex;
    margin: 10px 0;
    @include m.flex-center;
    justify-content: space-between;
}

.logo-nav {
    @include m.flex-center;
    padding: 5px 0;
    gap: 80px;
    width: 624px;
    height: 39px;
    justify-content: center;
}

.nav-menu {
    @include m.flex-center;
    list-style: none;
    gap: 24px;
    margin: 0;
    padding: 0;
    width: 384px;
    height: 19px;
}

.nav-menu a {
    @include m.text-style(var(--font-sec), 16px, 400, 1.2, #666666);
    text-decoration: none;
}

.header-contacts {
    @include m.flex-center;
    gap: 32px;
    width: 386px;
    height: 49px;
    gap: 24px;
    margin: 0;
}

.phone {
    @include m.flex-center;
    @include m.text-style(var(--font-prim), 14px, 400, 1.2, #254741);
    gap: 8px;
}

.cta-button {
    @include m.button-style(#029F59, #FFFFFF, 204px, 49px);
}
</style>