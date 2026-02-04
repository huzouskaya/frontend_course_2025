<script setup>
import { Icon } from '@iconify/vue'
import {
    DialogRoot,
    DialogPortal,
    DialogOverlay,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogClose
} from 'radix-vue'
import Form from '../../components/Form.vue'

const props = defineProps({
    open: Boolean,
    title: {
        type: String,
        default: 'Модальное окно'
    },
    description: {
        type: String,
        default: 'Описание'
    }
})

const emit = defineEmits(['update:open'])

function onFormSubmit(data) {
    console.log('Форма отправлена:', data)
    emit('update:open', false)
}
</script>

<template>
    <DialogRoot :open="open" @update:open="emit('update:open', $event)">
        <DialogPortal>
        <DialogOverlay class="overlay" />
        <DialogContent class="content">
            <div class="header">
            <DialogTitle class="title">{{ title }}</DialogTitle>
            <DialogClose class="close-btn">×</DialogClose>
            </div>

            <Form @submit="onFormSubmit" />
            
            <DialogDescription class="description">{{ description }}</DialogDescription>
        </DialogContent>
        </DialogPortal>
    </DialogRoot>
</template>

<style scoped lang="scss">
@use '../assets/scss/mixins' as m;

.overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
    z-index: 100;
    animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.content {
    background-color: var(--bg-color-light);
    border-radius: 20px;
    box-shadow: 0 10px 38px -10px rgba(22, 23, 24, 0.35), 0 10px 20px -15px rgba(22, 23, 24, 0.2);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    max-width: 450px;
    max-height: 85vh;
    padding: 32px;
    z-index: 101;
    animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.title {
    font-family: var(--font-sec);
    font-weight: 700;
    font-size: 24px;
    color: #000000;
    margin: 0;
}

.close-btn {
    @include m.button-style(rgba(2, 159, 89, 0.2), var(--main-color), 32px, 32px, 6px);
    padding: 0;
    font-size: 28px;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.description {
    font-family: var(--font-sec);
    font-size: 16px;
    color: var(--text-color-sec);
    margin-bottom: 24px;
    line-height: 1.5;
}

.placeholder {
    height: 100px;
    background: var(--bg-color-light);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color-sec);
    font-family: var(--font-sec);
}

@keyframes overlayShow {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes contentShow {
    from {
        opacity: 0;
        transform: translate(-50%, -48%) scale(0.96);
    }
    to {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
}
</style>