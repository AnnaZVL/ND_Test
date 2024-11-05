<script setup>
import IconPassword from '@/components/UI/SVG/IconPassword.vue';
import IconPasswordClose from '@/components/UI/SVG/IconPasswordClose.vue';

import { computed, ref } from 'vue';

const isShow = ref(false);

const props = defineProps({
    modelValue: String,
    name: String,
    type: String,
    title: String,
    placeholder: String,
    isIcon: Boolean,
    maxLength: Number,
});

const emits = defineEmits(['update:modelValue']);

const changeIcon = () => {
    isShow.value = !isShow.value;
};

const inputType = computed(() => {
    return props.type === 'password' && isShow.value ? 'text' : props.type;
});

const count = computed(() => props.modelValue.length);

const handelSubmit = (event) => {
    emits('update:modelValue', event.target.value);
};
</script>

<template>
    <div class="box">
        <span class="title">{{ title }}</span>
        <label class="label" :for="name">
            <input
                class="input"
                :value="modelValue"
                :type="inputType"
                :id="name"
                :placeholder="placeholder"
                :maxlength="maxLength"
                @input="handelSubmit"
                autocomplete="off"
            />
            <button class="btn" @click="changeIcon" v-if="isIcon" type="button">
                <IconPassword v-if="isShow" />
                <IconPasswordClose v-else />
            </button>
        </label>
        <div class="info" v-if="maxLength">
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

        .error {
            color: $color_error;
        }

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

        .btn {
            position: absolute;
            top: 50%;
            right: 0;
            padding-right: 17px;
            z-index: 10;
            border: 1px solid transparent;
            background: transparent;
            cursor: pointer;
            transform: translateY(-50%);
        }
    }

    &:not(:last-child) {
        margin-bottom: 24px;
    }
}
</style>
