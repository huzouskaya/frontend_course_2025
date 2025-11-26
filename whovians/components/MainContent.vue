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

<style scoped>
.main-content {
    background: rgb(206, 167, 28);
    border: 2px solid #a2820f;
    justify-content: space-between;
    flex-direction: column;
    margin: 0.5rem 0rem;
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
    background-color: #dae3eb;
    padding: 0.5rem 1rem;
    border: 1px solid #225b10;
    width: fit-content;
    cursor: pointer;
}

button:hover {
    background-color: #e1f1dc;
}

h1 {
    font-family: var(--font-prim);
    font-size: 60px;
}
</style>