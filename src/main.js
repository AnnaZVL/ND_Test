import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/main.scss'
import router from '../router'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { useUserStore } from '@/store/userStore';

axios.defaults.baseURL = 'https://dist.nd.ru/api';

axios.interceptors.request.use((config) => {
    const userStore = useUserStore();
    if (localStorage.getItem('accessToken')) {        
        config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
    } 
    return config;
}, error => Promise.reject(error));


createApp(App).use(router).use(createPinia()).use(VueAxios, axios).mount('#app')
