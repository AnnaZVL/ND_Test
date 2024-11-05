import { createRouter, createWebHistory } from "vue-router";

import HeroBase from '@/views/HomePage/HeroBase.vue';
import HeaderHome from '@/components/Header/HeaderHome.vue';
import HeaderNotes from "@/components/Header/HeaderNotes.vue";
import NotesPage from "@/views/NotesPage/NotesPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/", 
            name: "Главная страница",
            components: { default: HeroBase, header: HeaderHome },
      
        },
        {
            path: "/notes", 
            name: "Страница заметок",
            components: { default: NotesPage, header: HeaderNotes },
      
        }
    ]
})

export default router;