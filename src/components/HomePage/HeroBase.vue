<script setup></script>

<template>
    <section class="hero">
        <div class="content">
            <h1 class="title">Мои заметки</h1>
            <p class="descr">Не забывай о важном, храни его в облаке.</p>
        </div>
        <div class="media">
            <img src="/img/hero_img.png" alt="" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.hero {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 60px;
    height: 100%;

    .content {
        flex: 43%;
    }

    .title {
        margin-bottom: 40px;
        font-size: 104px;
        line-height: 104px;
    }

    .descr {
        color: $color_gray;
        font-size: 32px;
        line-height: 48px;
        max-width: 60%;
    }

    .media {
        padding: 150px 105px 0 105px;
        position: relative;
        &::after {
            content: '';
            position: absolute;
            inset: 0;
            z-index: -1;
            width: 100%;
            height: 100%;
            background-image: url('/img/hero_bg.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
        }
    }
}

@media (max-width: 1366px) {
    .hero {
        .media {
            padding: 105px 75px 0 75px;
        }
    }
}

@media (max-width: 768px) {
    .hero {
        &__container {
            flex-direction: column;
            gap: 0;
        }

        // .content {
        //     flex: 100%;
        // }

        .title {
            margin-bottom: 20px;
        }
    }
}
</style>
