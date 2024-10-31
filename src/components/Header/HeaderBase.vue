<script setup>
import LogoBase from '@/components/UI/SVG/LogoBase.vue';
import ButtonBase from '@/components/UI/Buttons/ButtonBase.vue';
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__container">
                <router-link class="logo" to="/" aria-label="На главную">
                    <LogoBase />
                </router-link>
                <ButtonBase />
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
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
</style>
