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

<style scoped>
.header {
    width: 1440px;
    height: 97px;
    padding: 24px 88px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav {
    width: 1264px;
    height: 49px;
    display: flex;
    margin: 10px 0;
    align-items: center;
    justify-content: space-between;
}

.logo-nav {
    display: flex;
    align-items: center;
    padding: 5px 0;
    gap: 80px;
    width: 624px;
    height: 39px;
    justify-content: center;
}

/* .logo {
    font-family: var(--font-prim);
    font-size: 24px;
    font-weight: 700;
    color: #333;
} */

.nav-menu {
    display: flex;
    list-style: none;
    gap: 24px;
    margin: 0;
    padding: 0;
    width: 384px;
    height: 19px;
}

.nav-menu a {
    font-family: var(--font-sec);
    font-size: 16px;
    font-weight: 400;
    color: #666666;
    text-decoration: none;
    line-height: 1.2;
}

.header-contacts {
    display: flex;
    align-items: center;
    gap: 32px;
    width: 386px;
    height: 49px;
    gap: 24px;
    margin: 0;
}

.phone {
    font-family: var(--font-prim);
    font-size: 14px;
    font-weight: 400;
    color: #254741;
    line-height: 1.2;
    gap: 8px;
}

.cta-button {
    background: #029F59;
    border: none;
    border-radius: 10px;
    padding: 16px 40px;
    font-family: var(--font-prim);
    font-size: 14px;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 14px;
    letter-spacing: 0.15px;
    cursor: pointer;
    width: 204px;
    height: 49px;
}
</style>