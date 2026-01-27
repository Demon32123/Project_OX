<template>
    <div class="meets">
        <section class="title mb3">
            <div class="title-meets">
                <h1 class="title-meets__title">Мероприятия</h1>
                <p class="title-meets__subtitle p">Главная / Мероприятия</p>
            </div>
        </section>
    </div>
</template>
<style>
    .meets{
        max-width: 1900px;
        margin: 0 auto;
        font-family: "Montserrat";
        color: #312011;
    }
    .title-meets{
        background-image: url('./images/title-meets.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 24px;
        overflow: hidden;
        padding: 4rem 12rem;

        .title-meets__title{
            font-family: "Playfair Display";
            font-size: 42px;
            font-weight: 600px;

        }

        .title-meets__subtitle{
            color: #00000080;
        }
    }
</style>