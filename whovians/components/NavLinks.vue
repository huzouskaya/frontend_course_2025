<template>
    <ul class="nav-links">
        <li><NuxtLink to="/">Реализованные проекты</NuxtLink></li>
        <li><NuxtLink to="/news">Новости</NuxtLink></li>
        <li><NuxtLink to="/contacts">Контакты</NuxtLink></li>
    </ul>
</template>

<script setup>

</script>

<style scoped>
.nav-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.nav-links a {
    text-decoration: none;
    color: inherit;
}
</style>