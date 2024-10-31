import { createRouter, createWebHistory } from "vue-router";
import HeroBase from '@/components/HomePage/HeroBase.vue';
import HeaderBase from '@/components/Header/HeaderBase.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/", 
            name: "Главная страница",
            components: { default: HeroBase, header: HeaderBase },
      
        }
    ]
})

export default router;