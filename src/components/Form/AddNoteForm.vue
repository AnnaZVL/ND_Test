<script setup>
import ButtonBase from '@/components/UI/Buttons/ButtonBase.vue';
import InputBase from './InputBase.vue';
import TextareaBase from './TextareaBase.vue';
import { ref } from 'vue';

const emits = defineEmits(['update:modelValue']);

const titleNote = ref('');
const messageNote = ref('');

const handleSubmit = () => {
    console.log('OK', titleNote.value, messageNote.value);
};
</script>

<template>
    <div class="form__inner">
        <h2 class="title">Добавление заметки</h2>
        <form class="form" @submit.prevent="handleSubmit" autocomplete="off">
            <div class="inputs">
                <InputBase
                    v-model="titleNote"
                    name="titleNote"
                    type="text"
                    title="Название заметки"
                    placeholder="Введите название"
                    :isIcon="false"
                />
                <TextareaBase
                    name="messageNote"                    
                    title="Текст заметки"
                    placeholder="Введите текст"                   
                    v-model="messageNote"
                />
            </div>
            <div class="bottom">
                <div class="actions">                   
                    <ButtonBase text="Добавить" type="submit" />
                </div>                
            </div>
        </form>
    </div>
</template>

<style lang="scss"></style>

