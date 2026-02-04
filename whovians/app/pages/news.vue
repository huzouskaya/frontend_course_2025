<script setup>
import NewsItem from '../components/NewsItem.vue'
import { newsData } from '../../data/news.js'

const breadcrumbs = [
    { text: 'Главная', to: '/' },
    { text: 'Новости', to: '/news', active: true }
]
</script>

<template>
    <main class="news-page">
        <div class="breadcrumbs">
            <NuxtLink v-for="(crumb, i) in breadcrumbs" :key="i" :to="crumb.to" class="breadcrumb-link">
                {{ crumb.text }}
                <span v-if="i < breadcrumbs.length - 1" class="separator">/</span>
            </NuxtLink>
        </div>
        <h1 class="page-title">Новости</h1>
        <div class="news-list">
        <NewsItem
            v-for="item in newsData"
            :key="item.id"
            :title="item.title"
            :description="item.description"
            :date="item.date"
            :image="item.image"
        />
        </div>
        <div class="pagination">
            <div class="pagination-mobile">
                <a href="#" class="page prev">←</a>
                <span class="page active">1</span>
                <span class="page ellipsis">...</span>
                <a href="#" class="page">10</a>
                <a href="#" class="page next">→</a>
            </div>

            <div class="pagination-desktop">
                <a href="#" class="page prev"><</a>
                <span class="page active">1</span>
                <a href="#" class="page">2</a>
                <span class="page ellipsis">...</span>
                <a href="#" class="page">8</a>
                <a href="#" class="page">10</a>
                <a href="#" class="page next">></a>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
@use '../../assets/scss/mixins' as m;

.news-page {
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
    width: 90%;
    max-width: 1264px;
    margin: 0 auto 2rem;
    font-family: var(--font-prim);
    font-size: 32px;
    font-weight: 700;
    color: var(--text-color-prim);
}

.news-list {
    width: 90%;
    max-width: 1264px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
}

@include m.media-breakpoint(sm) {
    .news-list {
        grid-template-columns: repeat(2, 1fr);
    }
}

@include m.media-breakpoint(md) {
    .news-list {
        grid-template-columns: repeat(3, 1fr);
    }
    .page-title {
        font-size: 46px;
    }
}

@include m.media-breakpoint(lg) {
    .news-list {
        grid-template-columns: repeat(4, 1fr);
    }
}

.pagination {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 40px;
    font-family: var(--font-sec);

    .pagination-desktop { display: none; }
    .pagination-mobile { display: flex; gap: 8px; }

    @include m.media-breakpoint(md) {
        .pagination-desktop { display: flex; gap: 8px; }
        .pagination-mobile { display: none; }
    }

    .page {
        @include m.pagination-button(white, var(--text-color-prim), true);

        &.prev,
        &.next {
            @include m.pagination-button(var(--main-color), white, false);
        }

        &.active {
            @include m.pagination-button(var(--dark-main-color), white, false);
        }

        &.ellipsis {
            @include m.pagination-button(transparent, var(--text-color-sec), false);
            cursor: default;
        }

        &:not(.active):not(.prev):not(.next):not(.ellipsis):hover {
            background: #f9f9f9;
            border-color: var(--main-color);
            color: var(--main-color);
        }
    }
}
</style>