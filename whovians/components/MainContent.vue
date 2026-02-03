<template>
    <section class="main-content">
        <div class="main-content__inner">
            <h1>Заголовок основного блока</h1>
            <div class="greeting-block">
                <p>{{ greeting }}</p>
            </div>
            <button @click="changeGreeting" class="greeting-block">
                <p>Поменять приветствие!</p>
            </button>
        </div>
    </section>
</template>

<script setup>
const greeting = ref('Hello, FEFU!')

const changeGreeting = () => {
    if (greeting.value === 'Hello, World!') {
        greeting.value = 'Hello, FEFU!'
    } else {
        greeting.value = 'Hello, World!'
    }
}
</script>

<style scoped lang="scss">
@use '../src/styles/mixins' as *;

.main-content {
    @include block-style(rgb(206, 167, 28), #a2820f, 1rem, 0.5rem 0rem);
    justify-content: space-between;
    flex-direction: column;
    flex: 2;
    display: flex;
    padding: 1rem;
}

.main-content__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    flex: 1;
    padding: 2rem;
}

.greeting-block {
    display: flex;
    flex-direction: column;
    align-self: center;
}

button {
    @include button-style(#dae3eb, #e1f1dc, #000, 0.5rem 1rem);
    width: fit-content;
}

h1 {
    @include heading-style(60px);
}
</style>