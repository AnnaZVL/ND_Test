<script setup>
import SignupForm from './SignupForm.vue';
import LoginForm from './LoginForm.vue';
import { ref } from 'vue';

const isSign = ref(true)

const beforeEnter = (el) => {
    el.style.opacity = 0;
};

const enter = (el, done) => {
    el.offsetHeight; 
    el.style.transition = 'opacity 0.3s ease-in-out';
    el.style.opacity = 1;
    done();
};

const leave = (el, done) => {
    el.style.transition = 'opacity 0.3s ease-in-out';
    el.style.opacity = 0;
    done();
};
</script>

<template>
    <transition name="form" @before-enter="beforeEnter" @enter="enter" @leave="leave">
        <SignupForm v-if="isSign" @change-form="isSign = !isSign"/>
        <LoginForm v-else @change-form="isSign = !isSign"/>
    </transition>
</template>

<style lang='scss' scoped>

</style>