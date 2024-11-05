<script setup></script>

<template>
    <section class="hero">
        <div class="content">
            <h1 class="title">Мои заметки</h1>
            <p class="descr">Не забывай о важном, храни его в облаке.</p>
        </div>
        <div class="media">
            <div class="img-box">
                <img class="img" src="/img/hero_img.png" alt="Изображение доски с заметками" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_variables.scss' as *;
.hero {
    display: flex;
    align-items: center;
    gap: 60px;
    height: 100%;

    .content {
        width: 43%;
    }

    .title {
        margin-bottom: 40px;
        font-size: 104px;
        line-height: 104px;
        font-weight: 900;
    }

    .descr {
        display: inline-block;
        color: $color_gray;
        font-size: 32px;
        line-height: 48px;
        width: 60%;
    }

    .media {
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

        .img-box {
            padding: 150px 107px 0 107px;
            width: 100%;
            height: 100%;
        }
    }
}

@media (max-width: 1366px) {
    .hero {
        .media {
            .img-box {
                padding: 105px 75px 0 75px;
            }
        }
    }
}

@media (max-width: 1024px) {
    .hero {
        padding-top: 40px;
        flex-direction: column;
        gap: 0;
        align-items: center;

        .content {
            width: 100%;
            text-align: center;
        }

        .title {
            margin-bottom: 20px;
        }
    }
}

@media (max-width: 768px) {
    .hero {
        .media {
            padding: 0 65px;
            .img-box {
                padding: 94px 67px 0 67px;
            }
        }
    }
}

@media (max-width: 562px) {
    .hero {
        .title {
            font-size: 60px;
            line-height: 64px;
        }

        .descr {
            font-size: 24px;
            line-height: 36px;
            width: 100%;
        }

        .media {
            padding: 0;
            .img-box {
                padding: 80px 56px 0 56px;
            }
        }
    }
}

@media (max-width: 380px) {
    .hero {
        .media {
            .img-box {
                padding: 50px 36px 0 36px;
            }
        }
    }
}
</style>
