<script setup>
import IconDelete from '@/components/UI/SVG/IconDelete.vue';

import { inject, onMounted, onUnmounted } from 'vue';

const toggleModal = inject('toggle-modal');

onMounted(() => {
    document.body.classList.add('scroll-stop');
});

onUnmounted(() => {
    document.body.classList.remove('scroll-stop');
});
</script>

<template>
    <Teleport to="body">
        <div class="modal">
            <div class="wrapper" @click="toggleModal"></div>
            <div class="body" @click.stop>
                <button class="btn close" @click="toggleModal">
                    <IconDelete />
                </button>
                <slot></slot>
            </div>
        </div>
    </Teleport>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_variables.scss' as *;

.modal {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-height: 100vh;
    height: 100%;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, transform 0.3s ease-in-out;

    .wrapper {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(10, 31, 56, 0.7);
    }

    .body {
        padding: 80px;
        width: 780px;
        min-width: 30%;
        background-color: $color_dark-middle;
        border-radius: 40px;
        position: relative;
    }

    .close {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 56px;
        height: 56px;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 1px solid transparent;
        background: $color_green-light;
        box-shadow: 0 15px 46px -10px rgba(0, 0, 0, 0.6);
        cursor: pointer;
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
}

@media (max-width: 1366px) {
    .modal {
        .body {
            padding: 56px;
            width: 594px;
        }
    }
}

@media (max-width: 768px) {
    .modal {
        .body {
            padding: 56px;
            width: 688px;
        }
    }
}

@media (max-width: 562px) {
    .modal {
        .body {
            padding: 90px 16px;
            width: 100%;
        }

        .close {
            top: 12px;
            right: 12px;
        }
    }
}
</style>
