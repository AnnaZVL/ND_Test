<script setup>
import IconUser from '@/components/UI/SVG/IconUser.vue';

import { useUserStore } from '@/store/userStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const isShow = ref(false);

const userStore = useUserStore();
const router = useRouter();

const logout = () => {
    userStore.logout();
    router.push({ name: 'Главная страница' });
};
</script>

<template>
    <div class="user">
        <span class="name">{{ userStore.userData.email }}</span>
        <IconUser class="icon" @click="isShow = !isShow" />

        <div class="logout" :class="{ visible: isShow }">
            <button class="btn" @click="logout">Выйти</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_variables.scss' as *;
.user {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    position: relative;
    z-index: 100;

    .name {
        font-size: 18px;
        line-height: 28px;
    }

    .icon {
        padding: 15px;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: $color_dark-middle;
        cursor: pointer;
    }

    .logout {
        position: absolute;
        bottom: -11px;
        right: 0;
        transform: translateY(-100%);
        z-index: 10;
        transition: transform 0.3s ease-in-out;

        .btn {
            padding: 40px;
            position: relative;
            background: $color_dark-middle;
            box-shadow: 0 15px 46px -10px rgba(0, 0, 0, 0.6);
            border-radius: 12px;
            border: 1px solid transparent;
            outline: none;
            cursor: pointer;
            color: $color_green-light;
            font-size: 18px;
            line-height: 28px;
            font-weight: bold;

            &::before {
                content: '';
                position: absolute;
                top: -9px;
                right: 20px;
                z-index: 1;
                width: 18px;
                height: 18px;
                transform: rotate(45deg);
                background: $color_dark-middle;
                box-shadow: 0 15px 46px -10px rgba(0, 0, 0, 0.6);
            }
        }

        &.visible {
            transform: translateY(100%);
        }
    }
}
</style>
