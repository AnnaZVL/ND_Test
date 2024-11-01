<script setup>
import NoteCard from './components/NoteCard.vue';
import AddNote from './components/AddNote.vue';
const notes = [
    {
        id: 0,
        title: 'Title очень длинный очень длинный очень длинный',
        text: 'А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных.',
    },
    {
        id: 1,
        title: 'Title',
        text: 'А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных. А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных. А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных.',
    },
    {
        id: 2,
        title: 'Title очень длинный очень длинный очень длинный',
        text: 'А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных.',
    },
    {
        id: 3,
        title: 'Title очень длинный очень длинный очень длинный',
        text: 'А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных. А также явные признаки победы институционализации ',
    },
];
</script>

<template>
    <section class="notes">
        <NoteCard v-for="note in notes" :key="note.id" :note="note" />
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
