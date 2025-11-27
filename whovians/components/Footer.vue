<script setup>
// import PhoneIcon from '../assets/icons/phone.svg'
// import EmailIcon from '../assets/icons/phone.svg' 
// import PlaceIcon from '../assets/icons/place.svg'
// import WLogoIcon from '../assets/icons/logo_white.svg'
const phone = '+7 (900) 900-90-90'
const email = 'info@gmail.com'
</script>

<template>
    <footer class="footer">
        <div class="logo">
            <!-- <WLogoIcon class="logo-icon" preserveColors/> -->
            <img src="/images/logo_white.svg" alt="zagdom">
        </div>
        
        <div class="footer-nav">
            <ul class="nav-links">
                <li><a href="#">Реализованные проекты</a></li>
                <li><a href="#">Новости</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
        </div>
        
        <div class="footer-contacts">
            <div class="contact-item">
                <img src="/images/phone.svg" alt="phone" class="icon">
                <!-- <PhoneIcon class="icon" preserveColors/> -->
                <a :href="`tel:${phone}`">{{ phone }}</a>
            </div>
            <div class="contact-item">
                <img src="/images/phone.svg" alt="phone" class="icon">
                <!-- <EmailIcon class="icon" preserveColors/> -->
                <a :href="`mailto:${email}`">{{ email }}</a>
            </div>
            <div class="contact-item">
                <img src="/images/place.svg" alt="phone" class="icon">
                <!-- <PlaceIcon class="icon" preserveColors/> -->
                <span>г. Владивосток <br>ул. Выселковая 49, стр. 3</span>
            </div>
        </div>
        
        <button class="cta-button">Оставить заявку</button>
        
        <div class="footer-bottom">
            <p class="copyright">© Загдом, 2021</p>
            <p class="policy">Политика конфиденциальности</p>
            <p class="agreement">Пользовательское соглашение</p>
        </div>
    </footer>
</template>

<style scoped lang="scss">
@use '../assets/scss/mixins' as m;

.a {
    text-decoration: none;
}

.page-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.main-content {
    flex-grow: 1;
}

.footer {
    width: 1440px;
    height: 262px;
    background: #254741;
    margin: 0 auto;
    position: relative;
    flex-shrink: 0;
}

.logo {
    position: absolute;
    top: 37px;
    left: 88px;
    width: 160px;
    height: 39px;
}

.logo-icon {
    width: 160px;
    height: 39px;
}

.footer-nav {
    position: absolute;
    top: 49px;
    left: 402px;
    width: 195px;
    height: 105px;
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
    @include m.text-style(var(--font-sec), 16px, 400, 1.2, rgba(255,255,255,0.6));
    text-decoration: none;
}

.footer-contacts {
    position: absolute;
    top: 48px;
    left: 719px;
    width: 202px;
    height: 116px;
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
}

.cta-button {
    position: absolute;
    top: 31.5px;
    left: 1148.5px;
    @include m.button-style(#029F59, #FFFFFF, 204px, 49px);
    border-radius: 10px;
    padding: 16px 40px;
}

.footer-bottom {
    position: absolute;
    height: 17px;
    @include m.flex-center;
    justify-content: space-between;
    border-top: 1px solid rgba(255,255,255,0.2);
    padding-top: 16px;
}

.footer-contacts .contact-item a {
    color: #ffffff;
    text-decoration: none;
}

.copyright {
    position: absolute;
    width: 148px;
    height: 17px;
    top: 196px;
    left: 88px;
    @include m.text-style(var(--font-sec), 14px, 400, 16.94px, rgba(255,255,255,0.6));
}

.policy {
    position: absolute;
    width: 221px;
    height: 17px;
    top: 196px;
    left: 408px;
    @include m.text-style(var(--font-sec), 14px, 400, 1.2, rgba(255,255,255,0.6));
}

.agreement {
    position: absolute;
    width: 224px;
    height: 17px;
    top: 196px;
    left: 728px;
    @include m.text-style(var(--font-sec), 14px, 400, 1.2, rgba(255,255,255,0.6));
}

.footer-bottom {
    position: relative;
    width: 100%;
}

.footer-bottom p {
    margin: 0;
    opacity: 0.6;
}
</style>