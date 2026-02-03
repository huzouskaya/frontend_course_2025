<template>
    <section class="gallery">
        <img src="/images/doctorwho.jpg" alt="13 регенераций Доктора на тёмном фоне" loading="lazy">
        <img src="/images/doctorwho.jpg" alt="13 регенераций Доктора на тёмном фоне" loading="lazy">
        <img src="/images/doctorwho.jpg" alt="13 регенераций Доктора на тёмном фоне" loading="lazy">
        <p>Три замечательные картинки</p>
    </section>
</template>

<style scoped lang="scss">
@use '../src/styles/mixins' as *;

.gallery {
    @include block-style(rgb(67, 146, 88), #225b10, 1rem, 0.5rem 1rem);
    flex: 1;
}

img {
    max-width: 100%;
    height: auto;
}
</style>