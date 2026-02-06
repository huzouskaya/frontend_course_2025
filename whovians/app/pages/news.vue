<script setup>
import Breadcrumbs from '../../components/Breadcrumbs.vue'
import { ref, computed } from 'vue'
import NewsItem from '../../components/NewsItem.vue'
import Pagination from '../../components/Pagination.vue'
import { newsData } from '../../data/news.js'

const itemsPerPage = 12
const currentPage = ref(1)

const paginatedNews = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage
    return newsData.slice(start, start + itemsPerPage)
})

const onPageChange = (page) => {
    currentPage.value = page
    if (process.client) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
}

const breadcrumbs = [
    { text: 'Главная', to: '/' },
    { text: 'Новости', to: '/news', active: true }
]
</script>

<template>
    <main class="news-page">
        <Breadcrumbs :items="breadcrumbs" />
        <h1 class="page-title">Новости</h1>
        <div class="news-list">
        <NewsItem
            v-for="item in paginatedNews"
            :key="item.id"
            :title="item.title"
            :description="item.description"
            :date="item.date"
            :image="item.image"
        />
        </div>
        <Pagination
        :total="newsData.length"
        :items-per-page="itemsPerPage"
        :current-page="currentPage"
        @update:page="onPageChange"
        />
    </main>
</template>

<style scoped lang="scss">
@use '../../assets/scss/mixins' as m;

.news-page {
    padding: 2rem 0 0;
}

.page-title {
    width: 90%;
    max-width: 1264px;
    margin: 0 auto 2rem;
    @include m.text-style(var(--font-prim), 32px, 700, 1.2, var(--text-color-prim));
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
</style>