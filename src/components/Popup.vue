<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import {defineEmits} from 'vue';
import emailjs from '@emailjs/browser';

defineProps<{
  title?: string,
  color?: string,
}>()

const emit = defineEmits<{
  (e: 'submit', formData: FormData): void

}>()

import { useForm } from '@vorms/core'

export type FormData = {
  name: string
  phone: string
  email: string
}

const { register, errors, handleSubmit } = useForm({
  initialValues: {
    name: '',
    phone: '',
    email: '',
  },
  onSubmit(values) {
    emailjs
        .sendForm('service_qccjpc8', 'template_3qg729n',"#contact-form", {
          publicKey: 'aspYG19W6TN6E9kl9',
        })
        .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
        );
  },
})

const { value: name, attrs: accountAttrs } = register('name', {
  validate(value) {
    if (!value)
      return 'Как к Вам обращаться?'
  },
})
const { value: phone, attrs: phoneAttrs } = register('phone', {
  validate(value) {
    if (!value)
      return 'Как с Вами связаться?'
  },
})
const { value: email, attrs: emailAttrs } = register('email', {
  validate(value) {
    if (!value)
      return 'Как направить Вам информацию?'
  },
})


</script>

<template>
  <VueFinalModal
      class="confirm-modal"
      :content-class="color === 'black' ? 'confirm-modal-content background-white'  : 'confirm-modal-content background-black'"
      overlay-transition="vfm-fade"
      content-transition="vfm-fade"
  >
    <h1 class="text-2xl mb-4">Заполните форму и мы свяжемся с Вами</h1>
    <form @submit="handleSubmit" id="contact-form">
      <div class="field">
        <input
            v-model="name"
            class="field__input"
            type="text"
            placeholder="Ваше имя"
            v-bind="accountAttrs"
        >
        <div v-show="'name' in errors" class="field__error">
          {{ errors.name }}
        </div>
      </div>
      <div class="field">
        <input
            v-model="phone"
            class="field__input"
            type="text"
            placeholder="Номер телефона"
            v-bind="phoneAttrs"
        >
        <div v-show="'phone' in errors" class="field__error">
          {{ errors.phone }}
        </div>
      </div>

      <div class="field">
        <input
            v-model="email"
            class="field__input"
            type="text"
            placeholder="Электронная почта"
            v-bind="emailAttrs"
        >
        <div v-show="'email' in errors" class="field__error">
          {{ errors.email }}
        </div>
      </div>

      <div class="field">
        <input type="submit" value="Отправить заявку">
      </div>
    </form>
  </VueFinalModal>
</template>

<style>
.confirm-modal {
  display: flex;
  justify-content: center;
  align-items: center;
}
.confirm-modal-content {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.5rem;
}
.background-white {
  background: #a3cbd7;
  color: black;
}
.background-black {
  background: #0a1f4a;
  color: white;
}
.confirm-modal-content > * + *{
  margin: 0.5rem 0;
}
.confirm-modal-content h1 {
  font-size: 1.375rem;
}
.confirm-modal-content button {
  margin: 0.25rem 0 0 auto;
  padding: 0 8px;
  border: 1px solid;
  border-radius: 0.5rem;
}
.dark .confirm-modal-content {
  background: #000;
}
.field + .field {
  margin-top: 15px;
}

.field__input,
input[type='submit'] {
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 4px 16px 4px 4px;
}

.field__error {
  color: red;
  margin-top: 2px;
}

.checkbox {
  display: flex;
  align-items: center;
}

.field__checkbox {
  accent-color: #41b883;
}

.field__checkbox + label {
  margin-left: 4px;
}

input[type='submit'] {
  background: #00ffce;
  border: 1px solid #41b883;
  cursor: pointer;
}
</style>
