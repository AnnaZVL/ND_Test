<script setup>
import IconSignup from '@/components/UI/SVG/IconSignup.vue';
</script>

<template>
    <button class="btn">
        <IconSignup />
        Вход
    </button>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.btn {
    padding: 12px 24px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-radius: 32px;
    border: 1px solid transparent;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    line-height: 32px;
    font-weight: 500;
    color: $color_white;
    min-width: 144px;
    background: $color_green-light;
    transition: background 0.3s ease-in-out;

    &:hover {
        background: $color_green-middle;
    }

    &:active {
        background: $color_green-dark;
    }

    &:disabled {
        background: $color_gray;
    }
}
</style>
