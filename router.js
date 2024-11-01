import { createRouter, createWebHistory } from "vue-router";

import HeroBase from '@/views/HomePage/HeroBase.vue';
import HeaderBase from '@/components/Header/HeaderBase.vue'
import NotesPage from "@/views/NotesPage/NotesPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/", 
            name: "Главная страница",
            components: { default: HeroBase, header: HeaderBase },
      
        },
        {
            path: "/notes", 
            name: "Страница заметок",
            components: { default: NotesPage, header: HeaderBase },
      
        }
    ]
})

export default router;