<script setup>
import NewsItem from './NewsItem.vue'

const news = [
    {
        title: 'Текст заголовка 1',
        description: '<p>Текст описания 1</p>',
        image: {
        x1: '/images/news/news_1.png',
        x2: '/images//news/news_1@2x.png'
        }
    },
    {
        title: 'Текст заголовка 2',
        description: '<p>Текст описания 2</p>',
        image: {
        x1: '/images/news/news_2.png',
        x2: '/images/news/news_2@2x.png'
        }
    }
]
</script>

<template>
    <div class="news-list">
        <NewsItem
            v-for="(item, index) in news"
            :key="index"
            :title="item.title"
            :description="item.description"
            :image="item.image"
        />
    </div>
</template>

<style scoped lang="scss">
.news-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    overflow: auto;

    margin: 0 auto;
    padding: 0 24px; 
}
</style>