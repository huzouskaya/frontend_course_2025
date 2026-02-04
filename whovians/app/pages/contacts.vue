<script setup>
import ContactItems from '../../components/ContactItems.vue'
import YandexMap from '../../components/YandexMap.vue'

const breadcrumbs = [
    { text: 'Главная', to: '/' },
    { text: 'Контакты', to: '/contacts', active: true }
]
</script>

<template>
    <main class="main-content">
        <div class="breadcrumbs">
            <NuxtLink v-for="(crumb, i) in breadcrumbs" :key="i" :to="crumb.to" class="breadcrumb-link">
                {{ crumb.text }}
                <span v-if="i < breadcrumbs.length - 1" class="separator">/</span>
            </NuxtLink>
        </div>
        
        <div class="contacts-and-map">
            <div class="contacts-section">
                <h1 class="page-title">Контакты</h1>
                <div class="contacts-list">
                    <ContactItems/>
                </div>
            </div>

            <div class="map-section">
                <YandexMap :coords="[43.115539, 131.886261]" :zoom="15" />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/mixins' as m;
.main-content {
    padding: 2rem 0;
}

.breadcrumbs {
    width: 90%;
    max-width: 1264px;
    margin: 0 auto 2rem;
    display: flex;
    font-family: var(--font-sec);
    font-size: 20px;
    color: var(--text-color-sec);

    .breadcrumb-link {
        text-decoration: none;
        color: inherit;
        display: flex;
        align-items: center;
        transition: color 0.2s;

        &:hover {
        color: var(--main-color);
        }

        .separator {
        margin: 0 4px;
        color: var(--text-color-sec);
        }
    }
}

.page-title {
    font-family: var(--font-prim);
    color: var(--text-color-prim);
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 32px;
}

.contacts-and-map {
    width: 90%;
    max-width: 1264px;
    margin: 0 auto 3rem;

    display: flex;
    flex-direction: column;
    gap: 32px;
}

.contacts-section,
.map-section {
    width: 100%;
}

.contacts-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-family: var(--font-sec);
    font-size: 18px;
    color: var(--text-color-prim);

    :deep(.contact-item:first-child) {
        font-weight: 600;
    }
}

.contact-item a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
        color: var(--main-color);
    }
}

.map-section {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color-sec);
    background: #f5f5f5;
    border-radius: 8px;
    min-height: 300px;
    overflow: hidden;
}

@include m.media-breakpoint(md) {
    .page-title {
        font-size: 40px;
        margin-bottom: 40px;
    }

    .contacts-and-map {
        width: 90%;
        flex-direction: row;
        gap: 32px;
    }

    .contacts-section {
        flex: 0 0 35%;
    }

    .map-section {
        flex: 1;
        height: 500px;
        min-height: 400px;
    }
}

@include m.media-breakpoint(lg) {
    .contacts-and-map {
        width: 70%;
        gap: 48px;
    }
    .page-title {
        font-size: 46px;
        margin-bottom: 46px;
    }
}
</style>