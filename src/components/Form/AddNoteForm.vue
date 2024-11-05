<script setup>
import ButtonBase from '@/components/UI/Buttons/ButtonBase.vue';
import InputBase from './InputBase.vue';
import TextareaBase from './TextareaBase.vue';

import { ref, inject, watch } from 'vue';
import { useNotesStore } from '@/store/notesStore';

const notesStore = useNotesStore();

const emits = defineEmits(['update:modelValue']);

const titleNote = ref('');
const contentNote = ref('');
const errorMessage = ref('');

const closeModal = inject('toggle-modal');

const handleSubmit = async () => {
    errorMessage.value = '';
    const note = { title: titleNote.value, content: contentNote.value };

    if (!titleNote.value || !contentNote.value) {
        errorMessage.value = 'Поле не может быть пустым';
    } else {
        await notesStore.addNote(note);
        closeModal();
    }    
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
                    :maxLength="255"
                />
                <TextareaBase
                    v-model="contentNote"
                    name="contentNote"
                    title="Текст заметки"
                    placeholder="Введите текст"
                />
            </div>
            <div class="bottom">
                <div class="actions">
                    <ButtonBase text="Добавить" type="submit" />
                </div>
                <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
            </div>
        </form>
    </div>
</template>

<style lang="scss"></style>
