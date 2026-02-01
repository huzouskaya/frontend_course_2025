<script setup>
defineProps({
    title: String,
    description: String,
    image: {
        type: Object,
        required: true,
        default: () => ({ x1: '', x2: '' })
    }
})
</script>

<template>
    <div class="news-item">
        <picture>
        <source :srcset="image.x2" media="(min-width: 768px)" />
        <img :src="image.x1" :alt="title" loading="lazy" />
        </picture>
        <h4 v-html="title"></h4>
        <div v-html="description"></div>
    </div>
</template>

<style scoped lang="scss">
.news-item {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

    picture,
    img {
        width: 100%;
        display: block;
        aspect-ratio: 4 / 3;
        object-fit: cover;
    }

    h4 {
        font-size: 18px;
        margin: 16px 0 12px;
        padding: 0 16px;
    }

    div {
        padding: 0 16px 16px;
        font-size: 14px;
        line-height: 1.5;
    }
}
</style>