<script setup>
import LogoBase from '@/components/UI/SVG/LogoBase.vue';
import UserBlock from './components/UserBlock.vue';
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__container">
                <router-link class="logo" to="/" aria-label="На главную">
                    <LogoBase />
                </router-link>

                <UserBlock />
            </div>
        </div>
    </header>
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
