<script setup>
import NoteCard from './components/NoteCard.vue';
import AddNote from './components/AddNote.vue';

import { useNotesStore } from '@/store/notesStore';

const notesStore = useNotesStore()

</script>

<template>
    <section class="notes">
        <NoteCard v-for="note in notesStore.notes" :key="note.id" :note="note" />
        <AddNote />
    </section>
</template>

<style lang="scss" scoped>
.notes {
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 40px;
}

@media (max-width: 1366px) {
    .notes {
        gap: 20px;
    }
}
</style>
