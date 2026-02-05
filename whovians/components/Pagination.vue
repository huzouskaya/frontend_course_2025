<script setup>
const props = defineProps({
    total: { type: Number, required: true },
    itemsPerPage: { type: Number, required: true },
    currentPage: { type: Number, required: true }
})

const emit = defineEmits(['update:page'])

const totalPages = Math.ceil(props.total / props.itemsPerPage)

const pages = computed(() => {
    const result = []
    const maxVisible = 5

    let start = Math.max(1, props.currentPage - 2)
    let end = Math.min(totalPages, props.currentPage + 2)

    if (end - start < maxVisible - 1) {
        if (start === 1) {
        end = Math.min(totalPages, start + maxVisible - 1)
        } else {
        start = Math.max(1, end - maxVisible + 1)
        }
    }

    for (let i = start; i <= end; i++) {
        result.push(i)
    }

    return result
})

function changePage(page) {
    if (page >= 1 && page <= totalPages) {
        emit('update:page', page)
    }
}
</script>

<template>
    <div class="pagination">
        <div class="pagination-mobile">
        <button class="page prev" :disabled="currentPage === 1" @click="changePage(currentPage - 1)">&lt;</button>
        <span class="page active">{{ currentPage }}</span>
        <span class="page ellipsis" v-if="totalPages > currentPage">...</span>
        <button v-if="totalPages > currentPage" class="page" @click="changePage(totalPages)">{{ totalPages }}</button>
        <button class="page next" :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">&gt;</button>
        </div>

        <div class="pagination-desktop">
            <button class="page prev" :disabled="currentPage === 1" @click="changePage(currentPage - 1)">&lt;</button>

            <button v-for="page in pages" :key="page" :class="{ 'active': page === currentPage }" class="page" @click="changePage(page)">{{ page }}</button>

            <span v-if="pages[pages.length - 1] < totalPages" class="page ellipsis">...</span>
            <button v-if="pages[pages.length - 1] < totalPages" class="page" @click="changePage(totalPages)">{{ totalPages }}</button>

            <button class="page next" :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">&gt;</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/mixins' as m;

.pagination {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    font-family: var(--font-sec);

    .pagination-desktop { display: none; }
    .pagination-mobile { display: flex; gap: 8px; }

    @include m.media-breakpoint(md) {
        .pagination-desktop { display: flex; gap: 8px; }
        .pagination-mobile { display: none; }
    }

    .page {
        @include m.pagination-button(white, var(--text-color-prim), true);
        cursor: pointer;

        &.prev,
        &.next {
        @include m.pagination-button(var(--main-color), white, false);
        }

        &.active {
        @include m.pagination-button(var(--dark-main-color), white, false);
        }

        &.ellipsis {
        @include m.pagination-button(transparent, var(--text-color-sec), false);
        cursor: default;
        }

        &:not(.active):not(.prev):not(.next):not(.ellipsis):hover {
        background: #f9f9f9;
        border-color: var(--main-color);
        color: var(--main-color);
        }

        &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        }
    }
}
</style>