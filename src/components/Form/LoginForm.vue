<script setup>
import ButtonBase from '@/components/UI/Buttons/ButtonBase.vue';
import InputBase from './InputBase.vue';

import emailValidation from '@/validation/emailValidation';

import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/userStore';

const emits = defineEmits(['update:modelValue', 'changeForm']);

const email = ref('');
const password = ref('');
const confirm_password = ref('');
const errorMessage = ref('');

const closeModal = inject('toggle-modal');

const router = useRouter();
const userStore = useUserStore();

const handleSubmit = async () => {
    const data = {
        email: email.value,
        password: password.value,
        confirm_password: confirm_password.value,
    };

    errorMessage.value = '';
    if (!emailValidation(email.value)) {
        errorMessage.value = 'Введите правильную почту';
        return;
    }

    if (password.value.length < 4 || password.value.length > 15) {
        errorMessage.value = 'Пароль должен содержать от 4 до 15 символов';
        return;
    }

    if (password.value !== confirm_password.value) {
        errorMessage.value = 'Пароли не совпадают';
        return;
    }

    await userStore.registerUser(data);

    if (userStore.errorMessage) {
        errorMessage.value = userStore.errorMessage;
        return;
    }

    closeModal();
    router.push({ name: 'Страница заметок' });
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
                    v-model="password"
                    name="password"
                    type="password"
                    title="Пароль"
                    placeholder="Введите пароль"
                    :isIcon="true"
                />
                <InputBase
                    v-model="confirm_password"
                    name="confirm_password"
                    type="password"
                    title="Пароль еще раз"
                    placeholder="Введите пароль"
                    :isIcon="true"
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
                <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
            </div>
        </form>
    </div>
</template>

<style lang="scss"></style>
