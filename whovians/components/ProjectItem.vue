<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: Object,
        required: true,
        default: () => ({ x1: '', x2: '' })
    }
})
</script>

<template>
    <div class="project-card">
        <div class="project-text">
            <h4 v-html="title"></h4>
            <div v-html="description" class="project-desc"></div>
        </div>
        <div class="project-img-wrapper">
            <picture>
                <source :srcset="image.x2" media="(min-width: 768px)" />
                <img :src="image.x1" :alt="title" loading="lazy" />
            </picture>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/mixins' as m;

.project-card {
    display: flex;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    flex-direction: row;
    min-width: 300px;
    flex-shrink: 0;
}

.project-text {
    width: 50%;
    padding: 24px 24px 24px 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4 {
        font-size: 18px;
        font-weight: 600;
        margin: 0 0 8px;
        line-height: 1.4;
        color: var(--text-color-prim);
    }

    .project-desc {
        font-size: 14px;
        line-height: 1.5;
        color: var(--text-color-sec);
        margin: 0;
    }
}

.project-img-wrapper {
    position: relative;
    height: 200px;

    picture,
    img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        aspect-ratio: 4 / 3;
    }
}

@include m.media-breakpoint(md) {
    .project-text,
    .project-img-wrapper {
        width: 100%;
    }

    .project-img-wrapper {
        height: 300px;
    }

    .project-text {
        padding: 24px;
    }
}
</style>