<template>
    <div class="contact-items" :class="variant">
        <div class="contact-item">
            <img src="/images/phone.svg" alt="Телефон" class="icon" />
            <a :href="`tel:${phone.value}`">{{ phone.label }}</a>
        </div>
        <div class="contact-item">
            <img src="/images/email.svg" alt="Email" class="icon" />
            <a :href="`mailto:${email}`">{{ email }}</a>
        </div>
        <div class="contact-item">
            <img src="/images/place.svg" alt="Адрес" class="icon" />
            <span>
                {{ address.city }}<br />
                {{ address.street }}
            </span>
        </div>
    </div>
</template>

<script setup>
import { mockContacts } from '../mock/contacts.js'

const props = defineProps({
    variant: {
        type: String,
        default: 'default'
    }
})

const { phone, email, address } = mockContacts
</script>

<style scoped>
.contact-items {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 8px;
}

.icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

.contact-items.default .icon {
    filter: brightness(0) saturate(100%) invert(37%) sepia(98%) saturate(459%) hue-rotate(115deg) brightness(95%) contrast(101%);
}

.contact-items.white .icon {
    filter: brightness(0) invert(1);
}
</style>