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
  date: {
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
  <div class="news-item">
    <picture>
      <source :srcset="image.x2" media="(min-width: 768px)" />
      <img :src="image.x1" :alt="title" loading="lazy" />
    </picture>
    <div class="news-item__meta">
      <time class="news-item__date">{{ date }}</time>
      <h4 v-html="title"></h4>
    </div>
    <div v-html="description" class="news-item__desc"></div>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/mixins' as m;

.news-item {
  background: white;
  border-radius: 12px;
  overflow: hidden;

  picture,
  img {
    width: 100%;
    display: block;
    aspect-ratio: 4 / 3;
    object-fit: cover;
  }

  // Мобильные стили (по умолчанию)
  .news-item__meta {
    padding: 0 12px;
    margin-top: 12px;
  }

  .news-item__date {
    font-size: 12px;
    color: var(--text-color-sec);
    margin-bottom: 4px;
    display: block;
  }

  h4 {
    font-size: 16px;
    margin: 0 0 10px;
    color: var(--text-color-prim);
  }

  .news-item__desc {
    padding: 0 12px 12px;
    font-size: 13px;
    line-height: 1.5;
    color: var(--text-color-sec);
  }

  // Десктоп (md+)
  @include m.media-breakpoint(md) {
    .news-item__meta {
      padding: 0 16px;
      margin-top: 16px;
    }

    .news-item__date {
      font-size: 13px;
      margin-bottom: 6px;
    }

    h4 {
      font-size: 18px;
      margin: 0 0 12px;
    }

    .news-item__desc {
      padding: 0 16px 16px;
      font-size: 14px;
    }
  }
}
</style>