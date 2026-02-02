<template>
    <div class="slider">
        <div class="slider-wrapper">
            <Carousel 
                ref="carouselRef"
                v-model="currentSlide"
                :wrap-around="true"
                :mouse-drag="true"
                :touch-drag="true"
                :transition="500"
            >
                <Slide v-for="slide in slides" :key="slide.id">
                <div class="slide">
                    <picture>
                    <source
                        :srcset="`${slide.image_landscape.x2} 2x, ${slide.image_landscape.x1}`"
                        :media="`${mediaBreakpoints.md}`"
                    >
                    <img 
                        :src="slide.image_portrait.x1" 
                        :srcset="`${slide.image_portrait.x2} 2x`"
                        :alt="slide.title"
                        class="slide-image"
                    />
                    </picture>
                    
                    <div class="slide-content">
                    <h3 class="slide-title">{{ slide.title }}</h3>
                    <p class="slide-text">{{ slide.text }}</p>
                    </div>
                </div>
                </Slide>
                
                <template #addons>
                    <button @click="goPrev" class="control-btn prev">&lt</button>
                    <button @click="goNext" class="control-btn next">&gt</button>
                    
                    <div class="pagination">
                        <button 
                            v-for="index in slides.length" 
                            :key="index"
                            class="pagination-dot"
                            :class="{ active: currentSlide === index - 1 }"
                            @click="goTo(index - 1)"
                        >
                        </button>
                    </div>
                </template>
            </Carousel>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { slides } from '../data/slides.js'

const carouselRef = ref()
const currentSlide = ref(0)

const mediaBreakpoints = {
    md: '(min-width: 768px)'
}

function goPrev() {
    carouselRef.value?.prev()
}

function goNext() {
    carouselRef.value?.next()
}

function goTo(index) {
    carouselRef.value?.slideTo(index)
}
</script>

<style scoped lang="scss">
@use '../assets/scss/mixins' as m;

.slider {
    padding: 0 16px;
    width: 90%;
    margin: 0 auto;
    margin-top: 0;
    padding-top: 0;
}

.slider-wrapper {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
}

.slide {
    position: relative;
    width: 100%;
    background: #254741;
    overflow: hidden;
    @include m.media-breakpoint(md) {
        height: 700px;
    }
}

.slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.slide-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 144px;
    color: white;
    max-width: 1264px;
    margin: 0 auto;
}

.slide-title {
    font-family: var(--font-prim);
    font-size: 36px;
    font-weight: 700;
    line-height: 1.2;
    margin: 0 0 16px 0;
    max-width: 460px;
}

.slide-text {
    font-family: var(--font-sec);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
    max-width: 460px;
    opacity: 0.9;
}

.control-btn {
    @include m.button-style(#029F59, white, 48px, 48px, 16px);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    
    &:hover {
        opacity: 0.9;
    }
    
    &.prev {
        left: 32px;
    }
    
    &.next {
        right: 32px;
    }

    @include m.media-breakpoint(xs) {
        display: none;
    }
}

.pagination {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 12px;
    pointer-events: auto;
    height: 12px;
    align-items: center;
}

.pagination-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ffffff;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: all 0.3s ease;
    
    &:hover {
        background: #029F59;
    }
    
    &.active {
        background: #029F59;
        transform: scale(1.2);
    }
}

@include m.media-breakpoint(md) {
    .control-btn {
        display: flex;
    }

    .slider {
        width: 80%;
    }
}
</style>