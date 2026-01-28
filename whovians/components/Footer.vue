<template>
    <footer>
        <p>Ссылки для связи, информация об авторе</p>
    </footer>
</template>

<style scoped lang="scss">
@use '../src/styles/mixins' as *;

footer {
    @include block-style(#126673, #052024, 1rem, 0.5rem 1rem);
    min-height: max-content;
    font-family: var(--font-prim);
}
</style>