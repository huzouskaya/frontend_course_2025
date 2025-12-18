<template>
    <section class="sidebar">
        <p>Заголовок списка</p>
        <ul>
            <li>Опция 1</li>
            <li>Опция 2</li>
            <li>Опция 3</li>
        </ul>
    </section>
</template>

<style scoped lang="scss">
@use '../src/styles/mixins' as *;

.sidebar {
    @include block-style(rgb(67, 146, 88), #225b10, 1rem, 0.5rem 1rem);
    flex: 1;
}

li {
    margin: 0.5rem 2rem;
}
</style>