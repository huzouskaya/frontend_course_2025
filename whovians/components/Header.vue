<template>
    <header>
        <p>Текст для хедера</p>
    </header>
</template>

<style scoped lang="scss">
@use '../src/styles/mixins' as *;

header {
    @include block-style(#8bd5e2, #40b2c6, 2rem, 0.5rem 1rem);
    font-family: var(--font-prim);
}
</style>