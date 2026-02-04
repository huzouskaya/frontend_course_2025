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
.breadcrumbs {
    width: 90%;
    max-width: 1264px;
    margin: 0 auto 2rem;
    display: flex;
    font-family: var(--font-sec);
    font-size: 20px;
    color: var(--text-color-sec);

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