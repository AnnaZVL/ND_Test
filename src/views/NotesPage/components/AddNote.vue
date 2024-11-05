<script setup>
import IconAddNote from '@/components/UI/SVG/IconAddNote.vue';
import ModalBase from '@/components/Modals/ModalBase.vue';
import AddNoteForm from '@/components/Form/AddNoteForm.vue';

import { provide, ref } from 'vue';

const showModal = ref(false);

const handlModal = () => {
    showModal.value = !showModal.value;
};

provide('toggle-modal', handlModal);
</script>

<template>
    <button
        class="add-note"
        @click="handlModal"
        title="Добавить заметку"
        aria-level="Добавить заметку"
    >
        <IconAddNote />
    </button>

    <ModalBase v-if="showModal">
        <AddNoteForm />
    </ModalBase>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_variables.scss' as *;

.add-note {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 40px;
    z-index: 100;
    right: 40px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 1px solid transparent;
    background: $color_green-light;
    box-shadow: 0 15px 46px -10px rgba(0, 0, 0, 0.6);
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    &:hover {
        background: $color_green-middle;
    }

    &:active {
        background: $color_green-dark;
    }

    &:disabled {
        background: $color_gray;
    }
}

@media (max-width: 1366px) {
    .add-note {
        right: 8px;
    }
}
</style>
