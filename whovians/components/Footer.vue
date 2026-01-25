<script setup>
const phone = '+7 (900) 900-90-90'
const email = 'info@gmail.com'
</script>

<template>
    <footer class="footer">
        <div class="footer-grid">
            <div class="logo">
                <img src="/images/logo_white.svg" alt="zagdom" class="logo-icon" />
            </div>

            <ul class="nav-links">
                <li><a href="#">Реализованные проекты</a></li>
                <li><a href="#">Новости</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>

            <div class="footer-contacts">
                <div class="contact-item">
                    <img src="/images/phone.svg" alt="Телефон" class="icon" />
                    <a :href="`tel:${phone}`">{{ phone }}</a>
                </div>
                <div class="contact-item">
                    <img src="/images/email.svg" alt="Email" class="icon" />
                    <a :href="`mailto:${email}`">{{ email }}</a>
                </div>
                <div class="contact-item">
                    <img src="/images/place.svg" alt="Адрес" class="icon" />
                    <span>г. Владивосток<br />ул. Выселковая 49, стр. 3</span>
                </div>
            </div>

            <button class="cta-button">Оставить заявку</button>
        </div>

        <div class="footer-bottom">
            <p class="copyright">© Загдом, 2021</p>
            <p class="policy">Политика конфиденциальности</p>
            <p class="agreement">Пользовательское соглашение</p>
        </div>
    </footer>
</template>

<style scoped lang="scss">
@use '../assets/scss/mixins' as m;

* { box-sizing: border-box; }
a { text-decoration: none; color: inherit; }

.footer {
    background: #254741;
    color: white;
    padding: 40px 88px 32px;
    width: 100%;
}

.footer-grid,
.footer-bottom {
    display: grid;
    grid-template-columns: 160px 1fr 1fr 204px;
    gap: 80px;
    max-width: 1264px;
    margin: 0 auto;
}

.footer-grid {
    align-items: flex-start;
}

.nav-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.nav-links a {
    @include m.text-style(var(--font-sec), 16px, 400, 1.2, rgba(255, 255, 255, 0.6));
}

.footer-contacts {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.contact-item {
    @include m.flex-center;
    gap: 8px;
    @include m.text-style(var(--font-prim), 14px, 400, 1.2, #ffffff);
}

.icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
}

.logo .logo-icon {
    width: 160px;
    height: 39px;
}

.cta-button {
    @include m.button-style(#029f59, #ffffff, 204px, 49px);
    border-radius: 10px;
    padding: 16px 40px;
    justify-self: start;
}

.footer-bottom {
    margin-top: 40px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    line-height: 1.2;
    font-family: var(--font-sec);
}

.copyright,
.policy,
.agreement {
    margin: 0;
}

@media (max-width: 1080px) {
    .footer-grid,
    .footer-bottom {
        grid-template-columns: 1fr;
        gap: 32px;
        text-align: left;
    }

    .footer-bottom {
        margin-top: 24px;
    }
}
</style>