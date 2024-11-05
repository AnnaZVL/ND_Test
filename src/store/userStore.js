import { defineStore } from "pinia";
import { ref } from "vue";
import axios from 'axios'

export const useUserStore = defineStore('userStore', () => {
    const isAut = ref(!!localStorage.getItem('accessToken'));    
    const errorMessage = ref('');
    const accessToken = ref(localStorage.getItem('accessToken') || '');
    const userData = ref(JSON.parse(localStorage.getItem('userData')) || { id: null, email: '' });
 
    const getSign = async (data) => {      
        errorMessage.value = '';
        try {
            const response = await axios.post('/auth', data);
            
            getUserData(data);

            setToken(response.data.accessToken);
        } catch (error) {
            errorMessage.value = error.response?.data?.message || 'Ошибка авторизации';
            console.error('Ошибка авторизации', error);
        } 
    };

    const setToken = (token) => {
        accessToken.value = token;
        localStorage.setItem('accessToken', token);
        isAut.value = true;
    };

     const deleteToken = () => {
        accessToken.value = '';
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userData');
        localStorage.removeItem('notes');
        isAut.value = false;
    };

    const getUserData = async (data) => {
        try {
            const resUser = await axios.get('/auth', data);

            userData.value = resUser.data;            
            localStorage.setItem('userData', JSON.stringify(userData.value));
        } catch(error) {
            throw new Error('Ошибка получения данных пользователя', error.response)
        }
    }

    const registerUser = async (data) => {       
        errorMessage.value = '';
        try {
            await axios.post('/reg', data);

            await getSign({email: data.email, password: data.password});            
        } catch (error) {
            errorMessage.value = error.response?.data?.message || 'Ошибка регистрации';
            console.error('Ошибка регистрации', error);
        } finally {
            isLoading.value = false;
        }
        
        
    }
    
    const logout = () => {
        deleteToken();
    };


    return {
        isAut,
        accessToken,        
        errorMessage,
        getSign,
        logout,        
        userData,        
        registerUser
    };
})
