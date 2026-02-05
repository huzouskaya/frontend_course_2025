<script setup>
import { ref } from 'vue'
import { useForm, defineField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { vMaska } from 'maska/vue'

const emit = defineEmits(['submit'])

// Схема валидации с Zod (как в презентации)
const validationSchema = toTypedSchema(
  z.object({
    name: z
      .string()
      .min(1, 'Обязательное поле')
      .min(2, 'Имя должно быть от 2 букв'),
    phone: z
      .string()
      .min(1, 'Обязательное поле')
      .refine(
        (value) => {
          const digits = value.replace(/\D/g, '')
          return digits.length === 11
        },
        { message: 'Введите телефон полностью' }
      ),
    comment: z.string().optional()
  })
)

// Инициализация формы (ошибки показываются только при сабмите)
const { errors, handleSubmit, meta } = useForm({
  validationSchema,
  initialValues: {
    name: '',
    phone: '',
    comment: ''
  },
  // Важно: ошибки не показываются сразу
  validateOnMount: false,
  validateOnBlur: false,
  validateOnChange: false
})

// Определяем поля с помощью defineField (как в презентации)
const [name, nameAttrs] = defineField('name')
const [phone, phoneAttrs] = defineField('phone')
const [comment, commentAttrs] = defineField('comment')

// Функция отправки формы
const onSubmit = handleSubmit((values) => {
  // Очищаем телефон от маски
  const cleanedData = {
    ...values,
    phone: values.phone.replace(/\D/g, '')
  }
  
  emit('submit', cleanedData)
  
  // Сброс формы после отправки (опционально)
  // resetForm()
})
</script>

<template>
  <form @submit.prevent="onSubmit" class="app-form" novalidate>
    <div class="title">Оставить заявку</div>

    <div class="field">
      <input
        v-model="name"
        v-bind="nameAttrs"
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
        v-model="phone"
        v-bind="phoneAttrs"
        type="tel"
        :class="{ error: errors.phone }"
        placeholder="+7 (___) ___-__-__"
      />
      <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
    </div>

    <div class="field">
      <textarea
        v-model="comment"
        v-bind="commentAttrs"
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
        display: block;
        min-height: 16px;
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