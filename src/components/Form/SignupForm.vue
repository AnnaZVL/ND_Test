<script setup>
import ButtonBase from '@/components/UI/Buttons/ButtonBase.vue';
import InputBase from './InputBase.vue';

import emailValidation from '@/validation/emailValidation';

import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/userStore';
import { useNotesStore } from '@/store/notesStore';

const emits = defineEmits(['update:modelValue', 'changeForm']);

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const closeModal = inject('toggle-modal');
const router = useRouter();

const userStore = useUserStore();
const notesStore = useNotesStore()

const handleSubmit = async () => {
    errorMessage.value = ''
    if (!emailValidation(email.value)) {        
        errorMessage.value = 'Введите правильную почту' 
        return       
    }

    if (password.value.length < 4 || password.value.length > 15) {
        errorMessage.value = 'Пароль должен содержать от 4 до 15 символов'
        return
    }

    await userStore.getSign({
        email: email.value,
        password: password.value
    })

    if (userStore.errorMessage) {
        errorMessage.value = userStore.errorMessage;
        return;
    }
    
    notesStore.getNotes()
    closeModal()
    router.push({name: 'Страница заметок'})
};
</script>

<template>
    <div class="form__inner">
        <h2 class="title">Вход в ваш аккаунт</h2>
        <form class="form" @submit.prevent="handleSubmit" autocomplete="off" novalidate>
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
            </div>
            <div class="bottom">
                <div class="actions">
                    <span class="text"
                        >У вас нет аккаунта?
                        <button class="btn-reg text" type="button" @click="$emit('changeForm')">
                            Зарегистрируйтесь
                        </button></span
                    >
                    <ButtonBase text="Войти" type="submit" />
                </div>
                <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
            </div>
        </form>
    </div>
</template>

<style lang="scss"></style>
