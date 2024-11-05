<script setup>
import { computed } from 'vue';

const maxLength = 255;

const props = defineProps({
    modelValue: String,
    name: String,
    title: String,
    placeholder: String,
});

const emits = defineEmits(['update:modelValue']);

const count = computed(() => props.modelValue.length);

const handelSubmit = (event) => {
    emits('update:modelValue', event.target.value);
};
</script>

<template>
    <div class="box">
        <span class="title">{{ title }}</span>
        <label class="label" :for="name">
            <textarea
                class="input"
                :value="modelValue"
                :id="name"
                :placeholder="placeholder"
                :maxlength="maxLength"
                @input="handelSubmit"
                autocomplete="off"
                rows="6"
            />
        </label>
        <div class="info">
            <span class="count title">{{ count + '/' + maxLength }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_variables.scss' as *;

.box {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;

    .title {
        margin-left: 24px;
        font-size: 18px;
        line-height: 28px;
        color: $color_gray;
    }

    .info {
        display: flex;
        gap: 5px;

        .count {
            margin-right: 24px;
            margin-left: auto;
        }
    }

    .label {
        position: relative;
        width: 100%;

        .input {
            padding: 22px 24px;
            font-family: 'Montserrat';
            font-size: 18px;
            line-height: 28px;
            color: $color_dark;
            outline: none;
            background: $color_white;
            border-radius: 36px;
            border: 2px solid transparent;
            transition: border 0.3s ease-in-out;
            width: 100%;

            &::placeholder {
                color: $color_gray;
                font-size: 18px;
                line-height: 28px;
            }

            &:hover,
            &:focus {
                border-color: $color_green-light;
                background: $color_white;
            }
        }
    }
}
</style>
