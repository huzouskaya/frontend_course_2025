<template>
    <header class="header">
        <nav class="nav">
            <div class="logo-nav">
                <div class="logo">
                    <img src="/images/logo.png" alt="zagdom" width="160" height="39" loading="lazy" />
                </div>
                <ul class="nav-menu">
                    <li><a href="#">Реализованные проекты</a></li>
                    <li><a href="#">Новости</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </div>
            <div class="header-contacts">
                <div class="phone">
                    <img src="/images/phone.png" alt="phone" width="16" height="16" loading="lazy" />
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
    width: 100%; /* ← Исправлено: теперь на всю ширину */
    height: 97px;
    padding: 24px 88px;
    background: white;
    display: flex;
    justify-content: center;
    margin: 0 auto;
}

.nav {
    width: 100%;
    max-width: 1264px; /* Сохраняем ограничение по макету, но делаем гибким */
    height: 49px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo-nav {
    display: flex;
    align-items: center;
    gap: 80px;
    height: 100%; /* ← Занимает всю высоту .nav */
}

.logo {
    height: 100%; /* ← Важно: чтобы div обёртка соответствовала высоте строки */
    display: flex;
    align-items: center;
}

.logo img {
    display: block; /* Убирает подстрочный отступ под изображением */
    height: 100%;   /* ← Растягиваем по высоте, сохраняя пропорции (или можно оставить как есть, если размеры точные) */
    width: auto;    /* Сохраняем пропорции */
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
</style>