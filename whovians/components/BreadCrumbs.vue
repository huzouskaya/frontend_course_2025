<script setup>
const props = defineProps({
    items: {
        type: Array,
        required: true,
        default: () => []
    }
})
</script>

<template>
    <div class="breadcrumbs">
        <NuxtLink
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        class="breadcrumb-link"
        >
        {{ item.text }}
        <span v-if="i < items.length - 1" class="separator">/</span>
        </NuxtLink>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/mixins' as m;
.breadcrumbs {
    width: 90%;
    max-width: 1264px;
    margin: 0 auto 2rem;
    display: flex;

    @include m.text-style(var(--font-sec), 20px, 400, 1.35, var(--text-color-sec));

    .breadcrumb-link {
        text-decoration: none;
        color: inherit;
        display: flex;
        align-items: center;
        transition: color 0.2s;

        &:hover {
        color: var(--main-color);
        }

        .separator {
        margin: 0 4px;
        color: var(--text-color-sec);
        }
    }
}
</style>