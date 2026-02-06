<script setup>
import NewsItem from './NewsItem.vue'

const news = [
    {
        title: 'Текст заголовка 1',
        description: '<p>Текст описания 1</p>',
        date: '24 марта 2025',
        image: {
        x1: '/images/news/news_1.png',
        x2: '/images/news/news_1@2x.png'
        }
    },
    {
        title: 'Текст заголовка 2',
        description: '<p>Текст описания 2</p>',
        date: '12 марта 2025',
        image: {
        x1: '/images/news/news_2.png',
        x2: '/images/news/news_2@2x.png'
        }
    },
    {
        title: 'Текст заголовка 3',
        description: '<p>Текст описания 3</p>',
        date: '10 марта 2025',
        image: {
        x1: '/images/news/news_1.png',
        x2: '/images/news/news_1@2x.png'
        }
    },
    {
        title: 'Текст заголовка 4',
        description: '<p>Текст описания 4</p>',
        date: '8 марта 2025',
        image: {
        x1: '/images/news/news_2.png',
        x2: '/images/news/news_2@2x.png'
        }
    }
]
</script>

<template>
    <div class="news">
        <div class="news-set">
            <h2>Новости</h2>
            <NuxtLink to="/news">
                <div class="news-button">Все новости</div>
            </NuxtLink>
        </div>
        <div class="news-list">
            <NewsItem
                v-for="(item, index) in news"
                :key="index"
                :title="item.title"
                :description="item.description"
                :date="item.date"
                :image="item.image"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/mixins' as m;
.news {
    width: 100%;
    padding: 2rem 0;
}

.news-button {
    @include m.button-style(white, var(--main-color), auto, auto, 10px, var(--main-color));
    text-decoration: none;
    display: inline-block;
}

.news-list {
    width: 90%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: minmax(200px, auto);
    gap: 32px;
    overflow: auto;
    margin: 0 auto; 
}

.news-set {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding: 0.5rem 0;
}

@include m.media-breakpoint(sm) {
    .news-list {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: minmax(200px, auto) 0px;
    }
}

@include m.media-breakpoint(md) {
    .news-list, .news-set {
        width: 85%;
    }
    .news-list {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: minmax(200px, auto) 0px 0px;
    }
}

@include m.media-breakpoint(lg) {
    .news-list {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: minmax(200px, auto) 0px 0px 0px;
    }
}
</style>