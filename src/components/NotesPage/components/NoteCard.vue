<script setup>
import ButtonBase from '@/components/UI/Buttons/ButtonBase.vue';
import IconDelete from '@/components/UI/SVG/IconDelete.vue';
defineProps({ note: Object });

const deleteNote = () => {
    console.log('delete note');
};
</script>

<template>
    <div class="note">
        <div class="top">
            <h4 class="title">{{ note.title }}</h4>
            <span></span>
        </div>
        <p class="text">{{ note.text }}</p>
        <div class="bottom">
            <ButtonBase class="delete" text="Удалить" @click="deleteNote">
                <template #icon>
                    <IconDelete />
                </template>
            </ButtonBase>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.note {
    display: flex;
    flex-direction: column;
    background: $color_green-light;
    border-radius: 12px;    
    height: max-content;

    .top {
        padding: 20px 28px;
        width: 100%;
        border-bottom: 1px solid $color_green-middle;
        position: relative;

        span {
            display: inline-block;
            position: absolute;
            top: 0;
            right: -2px;
            width: 40px;
            height: 100%;
            border-left: 1px solid #000;
        }

        &::before {
            content: '';
            position: absolute;
            top: -4px;
            right: -4px;
            z-index: 10;
            border-radius: 12px 0 12px 12px;
            border-style: solid;
            border-width: 0 40px 40px 0;
            border-color: $color_dark $color_dark $color_green $color_green;
        }
    }
    .title {
        font-size: 24px;
        line-height: 32px;
        max-width: 80%;       
    }

    .text {
        padding: 20px 28px 28px 28px;
    }

    .bottom {
        padding: 8px;
    }
    .delete {
        margin-left: auto;
    }
}
</style>
