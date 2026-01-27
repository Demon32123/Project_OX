<template>
    <div class="confident">
        <section class="title mb3">
            <div class="title-confident">
                <h1 class="title-confident__title">Конфиденциальность</h1>
                <p class="title-confident__subtitle p">Главная / Конфиденциальность</p>
            </div>
        </section>

        <section class="confident-rool mw14">
            <div class="pre-rule mb3">
                <p class="p">
                    Вопросы, обсуждаемые в ходе консультирования, являются строго конфиденциальными.
                    Я поддерживаю самые высокие этические и правовые нормы, касающиеся вашей частной жизни и 
                    конфиденциальности. Давайте разберём, как это проявляется в разных ситуациях.
                </p>
            </div>
            <img src="./images/icons/1.svg">
            <div class="first-rool mb3">

                <p class="p w49">
                    Если мы встречаемся в публичных пространствах, пожалуйста, помните, что по этическим соображениям я не могу поздороваться <br>с вами первой и обозначить, что мы знакомы, особенно, если вы не одни и я не одна, поскольку сам факт обращения ко мне тоже является конфиденциальным.

                </p>
                <p class="p w49">
                    Если вы посчитаете возможным для себя поздороваться со мной или кивнуть мне, я буду этому рада, но это не является обязательным. Для меня ваш комфорт и приватность важнее, я не обижусь и не сочту вас невежливыми, если вы сделаете вид, как будто мы не знакомы. Я помню своих клиентов и радуюсь их успехам, и могу поздороваться первой, когда мы наедине.

                </p>
            </div>
            <img src="./images/icons/2.svg">
            <div class="second-rool">
                
                <p class="p w49">
                    Если кто-то, например ваш близкий (мама, папа, муж, жена и т.д.), захочет узнать конфиденциальную информацию о вас, то я не смогу ответить без вашего согласия.

                </p>
                <p class="p w49">
                    Исключением из этого правила, в соответствии с законодательством РФ и большинства других стран, являются следующие ситуации:<br>
                    •  клиент представляет опасность для себя (существует угроза самоубийства),<br>
                    •  клиент представляет опасность для других (существует угроза убийства, нанесения тяжких повреждений другому лицу и т.д.),<br>
                    •  клиент раскрывает информацию о злоупотреблениях в отношении детей, пожилых людей, инвалидов.

                </p>
            </div>

            <div class="post-rule mt3">
                <p class="p">
                    Также информация, полученная на сессиях, может быть использована с целью повышения моей эффективности в работе над вашим случаем в ходе супервизий и интервизий
                </p>
                <p class="p mt1"><i>(СТРОГО без разглашения персональных данных и с изменением всех значимых элементов истории, которые позволяют идентифицировать клиента, таких как пол, возраст, профессия, семейные обстоятельства).</i></p>
            </div>
        </section>
    </div>
</template>

<style>
    .confident{
        max-width: 1900px;
        margin: 0 auto;
        font-family: "Montserrat";
        color: #312011;
    }

    .h3{
        font-family: 'Playfair Display', serif;
        font-size: 1.6rem;
        margin-bottom: 1rem;
        line-height: 1.3;
    }

    .h4{
        font-family: 'Playfair Display', serif;
        font-size: 1.4rem;
        margin-bottom: 1rem;
        line-height: 1.3;
    }

    .p{
        color: #312011;
        font-size: 1.2rem;
        line-height: 1.5;
    }

    .mw14{
        max-width: 1400px;
        margin: 0 auto;
    }

    .mw16{
        max-width: 1600px;
        margin: 0 auto;
    }

    .mw200{
        max-width: 160px !important;
    }

    .mt1{
        margin-top: 1rem;
    }

    .mb1{
        margin-bottom: 1rem;
    }
    
    .mb2{
        margin-bottom: 2rem;
    }
    
    .mb3{
        margin-bottom: 3rem;
    }

    .mt2{
        margin-top: 2rem;
    }

    .mt3{
        margin-top: 3rem;
    }

    .fw400{
        font-weight: 400;
    }

    .fw500{
        font-weight: 500;
    }

    .fw600{
        font-weight: 600;
    }

    .w49{
        width: 49%;
    }

    .title-confident{
        background-image: url('./images/title-confident.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 24px;
        overflow: hidden;
        padding: 4rem 12rem;

        .title-confident__title{
            font-family: "Playfair Display";
            font-size: 42px;
            font-weight: 600px;

        }

        .title-confident__subtitle{
            color: #00000080;
        }
    }

    .first-rool{
        display: flex;
        justify-content: space-between;
    }

    .second-rool{
        display: flex;
        justify-content: space-between;
    }

    .post-rule{
        background-color: #FFF5E0;
        padding: 2rem;
        border-radius: 12px;
    }
</style>