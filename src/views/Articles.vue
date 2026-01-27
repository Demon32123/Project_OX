<template>
    <div class="articles">
        <section class="title mb3">
            <div class="title-articles">
                <h1 class="title-articles__title">Статьи</h1>
                <p class="title-articles__subtitle p">Главная / Статьи</p>
            </div>
        </section>
    </div>
</template>
<style>
    .articles{
        max-width: 1900px;
        margin: 0 auto;
        font-family: "Montserrat";
        color: #312011;
    }
    .title-articles{
        background-image: url('./images/title-articles.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 24px;
        overflow: hidden;
        padding: 4rem 12rem;

        .title-articles__title{
            font-family: "Playfair Display";
            font-size: 42px;
            font-weight: 600px;

        }

        .title-articles__subtitle{
            color: #00000080;
        }
    }
</style>