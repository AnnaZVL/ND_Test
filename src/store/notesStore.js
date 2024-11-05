import { defineStore } from "pinia";
import { ref } from "vue";
import axios from 'axios'

export const useNotesStore = defineStore('notesStore', () => {
    const notes = ref(JSON.parse(localStorage.getItem('notes')) || []);
    const note = ref({});
    
    const getNotes = async () => {
        try {
            const response = await axios.get('/notes')
            
            notes.value = response.data;

            localStorage.setItem('notes', JSON.stringify(notes.value));
        } catch(error) {
            
            throw new Error('Ошибка полученя заметок', error);
        }
    }

    const addNote = async (note) => {        
        try {
            const response = await axios.post('/notes', note)
            
            notes.value.push(response.data)
            localStorage.setItem('notes', JSON.stringify(notes.value));
        } catch(error) {           
            throw new Error('Ошибка добавлении заметки', error);                   
        }
    }

    const deleteNote = async (id) => {
        try {           
            await axios.delete(`/notes/${id}`)
            
            getNotes()
        } catch(error) {
            throw new Error('Ошибка при удалении заметки', error)
        }
    }


    return {
        note,
        notes,
        getNotes,
        addNote,
        deleteNote
    }
})