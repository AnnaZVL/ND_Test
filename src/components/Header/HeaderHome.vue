<script setup>
import IconSignup from '@/components/UI/SVG/IconSignup.vue';
import LogoBase from '@/components/UI/SVG/LogoBase.vue';
import ButtonBase from '@/components/UI/Buttons/ButtonBase.vue';
import ModalBase from '../Modals/ModalBase.vue';
import AllForm from '../Form/AllForm.vue';

import { useRouter } from 'vue-router';
import { provide, ref } from 'vue';
import { useUserStore } from '@/store/userStore';

const showModalLogin = ref(false);
const router = useRouter();
const userStore = useUserStore();

const handlModal = () => {
    showModalLogin.value = !showModalLogin.value;
};

provide('toggle-modal', handlModal);
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__container">
                <router-link class="logo" to="/" aria-label="На главную">
                    <LogoBase />
                </router-link>

                <ButtonBase text="Вход" @click="handlModal">
                    <template #icon>
                        <IconSignup />
                    </template>
                </ButtonBase>
            </div>
        </div>
    </header>

    <ModalBase v-if="showModalLogin">
        <AllForm />
    </ModalBase>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_variables.scss' as *;

.header {
    padding: 40px 0;
    width: 100%;
    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;

        .logo {
            display: block;
            cursor: pointer;
            svg {
                width: 218px;
                height: 50px;
            }
        }
    }
}

@media (max-width: 1366px) {
    .header {
        padding: 20px 0;
    }
}

@media (max-width: 562px) {
    .header {
        .logo {
            svg {
                width: 154px;
                height: 36px;
            }
        }
    }
}
</style>
