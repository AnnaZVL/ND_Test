<script setup>
import ButtonBase from '@/components/UI/Buttons/ButtonBase.vue';
import InputBase from './InputBase.vue';

import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';

const emits = defineEmits(['update:modelValue', 'changeForm']);
const isError = ref(false);
const email = ref('');
const password = ref('');
const re_password = ref('');
const errorMessage = ref('');

const closeModal = inject('sign')
const router = useRouter()

const handleSubmit = () => {
    console.log('OK', email.value, password.value);
    closeModal()
    router.push({name: 'Страница заметок'})
};
</script>

<template>
    <div class="form__inner">
        <h2 class="title">Регистрация</h2>
        <form class="form" @submit.prevent="handleSubmit" autocomplete="off">
            <div class="inputs">
                <InputBase
                    v-model="email"
                    name="email"
                    type="text"
                    title="Email"
                    placeholder="Введите Email"
                    :isIcon="false"
                />
                <InputBase
                    name="password"
                    type="password"
                    title="Пароль"
                    placeholder="Введите пароль"
                    :isIcon="true"
                    v-model="password"
                />
                <InputBase
                    name="re_password"
                    type="password"
                    title="Пароль еще раз"
                    placeholder="Введите пароль"
                    :isIcon="true"
                    v-model="re_password"
                />
            </div>
            <div class="bottom">
                <div class="actions">
                    <span class="text"
                        >У вас есть аккаунт?

                        <button class="btn-reg text" type="button" @click="$emit('changeForm')">
                            Войдите
                        </button></span
                    >
                    <ButtonBase text="Зарегистрироваться" type="submit" />
                </div>
                <p class="error" v-if="isError">{{ errorMessage }}</p>
            </div>
        </form>
    </div>
</template>

<style lang="scss">
</style>
