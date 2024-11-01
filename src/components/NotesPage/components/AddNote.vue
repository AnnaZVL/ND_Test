<script setup>
import ModalBase from '@/components/Modals/ModalBase.vue';
import AddNoteForm from '@/components/Form/AddNoteForm.vue';
import { ref } from 'vue';

const showModal = ref(false);

const emits = ['close-modal'];

const handlModal = () => {
    showModal.value = !showModal.value;    
};

</script>

<template>
    <button class="add-note" @click="handlModal" title="Добавить заметку" aria-level="Добавить заметку">
        <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M1 9H17M9 1L9 17" stroke="white" stroke-width="2" stroke-linecap="round" />
        </svg>
    </button>
    <ModalBase v-if="showModal" @close-modal="handlModal">
       <AddNoteForm/>
    </ModalBase>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

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
