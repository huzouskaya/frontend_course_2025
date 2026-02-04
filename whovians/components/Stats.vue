<template>
  <div class="stats-block">
    <div class="stats-container">
      <div class="stats-text">
        <h2 class="stats-title">Каждый проект для нас — важный</h2>
        <p class="stats-description">
          Мы строительная компания полного цикла. <br><br>
          Вникаем во все детали, разрабатываем планировку будущего дома,
          продумываем конструктивные решения и общую архитектурную концепцию.
        </p>
      </div>

      <div class="stats-items">
        <div class="stat-item">
          <div class="stat-icon">
            <img :src="houseIcon" alt="Дом" />
          </div>
          <div class="stat-text">
            <p>57 домов</p>
            <p>спроектировали и построили "под ключ"</p>
          </div>
        </div>

        <div class="stat-item">
          <div class="stat-icon">
            <img :src="calendarIcon" alt="Календарь" />
          </div>
          <div class="stat-text">
            <p>14 лет</p>
            <p>мы на рынке загородного строительства</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const houseIcon = ref('/images/house.svg')
const calendarIcon = ref('/images/calendar.svg')
</script>

<style scoped lang="scss">
@use '../assets/scss/mixins' as m;

.stats-block {
    background: white;
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;

    @include m.media-breakpoint(md) {
        width: 85%;
    }
}

.stats-container {
    max-width: 1264px;
    margin: 0 auto;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @include m.media-breakpoint(md) {
        flex-direction: row;
        gap: 12px;
        align-items: flex-end;
    }
}

.stats-text {
    flex: 0 0 50%;

    @include m.media-breakpoint(md) {
        max-width: 600px;
    }
}

.stats-title {
    @include m.text-style(var(--font-prim), 38px, 700, 1.2);
    margin: 0 0 24px 0;
}

.stats-description {
    @include m.text-style(var(--font-sec), 20px, 400, 1.35, var(--description-text-color));
    margin: 0;
    opacity: 0.9;
}

.stats-items {
    flex: 0 0 50%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;

    @include m.media-breakpoint(md) {
        max-width: 600px;
    }
}

.stat-item {
    background: #F5F7F3;
    border-radius: 16px;
    padding: 20px;
    display: flex;
    flex-direction: column;
}

.stat-icon {
    width: 24px;
    height: 24px;
    margin-bottom: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.stat-text {
    p {
        margin: 0;

        &:first-child {
        @include m.text-style(var(--font-prim), 24px, 400, 1.2, #000000);
        margin-bottom: 4px;
        }

        &:last-child {
        @include m.text-style(var(--font-sec), 20px, 400, 1.35, var(--description-text-color));
        }
    }
}
</style>