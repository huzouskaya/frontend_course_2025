<script setup>
    import { useForm } from 'vee-validate'
    import { toTypedSchema } from '@vee-validate/zod'
    import * as zod from 'zod'

    const emit = defineEmits(['submit'])

    const schema = toTypedSchema(
    zod.object({
        name: zod.string().min(2, 'Имя должно быть от 2 букв').nonempty('Обязательное поле'),
        phone: zod.string().regex(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Неверный формат телефона').nonempty('Обязательное поле'),
        comment: zod.string().optional()
    })
    )

    const { handleSubmit, values, errors } = useForm({
    validationSchema: schema,
    initialValues: {
        name: '',
        phone: '',
        comment: ''
    }
    })

    const onSubmit = handleSubmit((data) => {
    emit('submit', data)
    })
</script>

<template>
    <form @submit.prevent="onSubmit" class="app-form">
        <div class="title">Оставить заявку</div>
        <div class="field">
            <input
                v-model="values.name"
                type="text"
                :class="{ error: errors.name }"
                placeholder="Имя"
            />
            <span v-if="errors.name" class="error">{{ errors.name }}</span>
        </div>

        <div class="field">
            <input
                v-maska
                data-maska="+7 (###) ###-##-##"
                v-model="values.phone"
                type="tel"
                :class="{ error: errors.phone }"
                placeholder="Телефон"
            />
            <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
        </div>

        <div class="field">
            <textarea
                v-model="values.comment"
                placeholder="Сообщение"
                rows="4"
            ></textarea>
        </div>

        <button type="submit" class="btn-submit">Оставить заявку</button>

        <p class="agreement-text">
        Нажимая на кнопку «Отправить заявку», вы принимаете
        <a href="#" class="link">пользовательское соглашение</a>
        и
        <a href="#" class="link">политику конфиденциальности</a>
        </p>
    </form>
</template>

<style scoped lang="scss">
@use '../assets/scss/mixins' as m;

.app-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.title {
    font-family: var(--font-sec);
    font-weight: 700;
    font-size: 24px;
    color: #000000;
    margin: 0;
}

.field {
    position: relative;

    input,
    textarea {
        width: 100%;
        padding: 16px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        font-family: var(--font-sec);
        font-size: 16px;
        transition: border-color 0.2s;

        &:focus {
        outline: none;
        border-color: var(--main-color);
        }

        &.error {
        border-color: #ff0000;
        }
    }

    textarea {
        min-height: 100px;
        resize: vertical;
        line-height: 1.5;
    }

    .error {
        color: #ff0000;
        font-size: 12px;
        font-family: var(--font-sec);
        margin-top: 4px;
    }
}

.btn-submit {
    @include m.button-style(var(--main-color), white, 204px, 49px);
    margin: 0 auto;
    &:hover {
        opacity: 0.9;
    }
}

.agreement-text {
    font-size: 14px;
    color: var(--text-color-sec);
    line-height: 1.5;
    text-align: center;

    .link {
        color: var(--main-color);
        text-decoration: none;
        font-weight: 600;

        &:hover {
        text-decoration: underline;
        }
    }
}
</style>