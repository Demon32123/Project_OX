<template>
  <div class="home">
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">Оксана Худякова</h1>
          
          <div class="hero-subtitle">
            <img 
              src="./images/icons/subtitle.svg" 
              alt="дипломированный психолог"
              class="subtitle-image"
            >
          </div>
          
          <p class="hero-description">
            Моя задача - помочь Вас прийти к добрым отношениям с собой и другими 
            без тревог и ограничений, без вины и стыда
          </p>
          
          <button class="hero-button" @click="openTelegram">
            Записаться на консультацию
          </button>
          
          <div class="bottom-certifications mt2">
            <div class="bottom-cert-item">&#9888; oxana_hudyakova_psy</div>
            <div class="bottom-cert-item">&#9888; +7 (961) 311-93-70</div>
            <div class="bottom-cert-item">&#9888; Shaslivaya_shzenchina</div>
          </div>
        </div>
        
        <div class="hero-image">
          <div class="top-certifications">
            <div class="top-cert-item">Сертифицированный расстановщик</div>
            <div class="top-cert-item">EMDR - терапевт</div>
          </div>
          
          <div class="image-container">
            <img 
              src="./images/ox.png"
              alt="Оксана Худякова"
              class="profile-image"
            >
          </div>
        </div>
      </div>
    </section>

    <section class="about-section">
      <div class="about block">
        <div class="about block__item">
          <div class="about block__item__content">
            <h3 class="h3">Обо мне</h3>
            <p>Работаю как в долгосрочной терапии для глубоких личных изменений, так и в краткосрочном консультировании, где за несколько сессий помогаю решить конкретный запрос.</p>
          </div>
        </div>
        
        <div class="about block__item">
          <div class="about block__item__content">
            <img 
              src="./images/icons/title17years.png" 
              alt="За 17 лет"
              class="about block__item__img"
            >
            <p class="ta">Специализируюсь на работе с тревожными расстройствами, паническими атаками и эмоциональным выгоранием.</p>
          </div>
        </div>
        
        <div class="about block__item bg4">
          <div class="about block__item__content">
            <h3 class="h3">Более 10 лет</h3>
            <p>Веду частную практику, разработала тренинговые программы, провожу индивидуальные консультации и терапию.</p>
          </div>
        </div>
        
        <div class="about block__item bg4">
          <div class="about block__item__content">
            <h3 class="h3">Регулярно</h3>
            <p>Прохожу личную терапию, участвую в супервизии и супервизорских группах.</p>
          </div>
        </div>
        
        <div class="about block__item bg4">
          <div class="about block__item__content">
            <h3 class="h3">Регулярно продолжаю </h3>
            <p>Обучение психотерапии в различных модальностях и направлениях.</p>
          </div>
        </div>
        
        <div class="about block__item bg4">
          <div class="about block__item__content">
            <h3 class="h3">Мужчины и женщины</h3>
            <p>Я работаю с разными людьми - домохозяйками, молодыми и взрослыми. С теми, кто в отношениях, одинокими, на грани развода и т.д</p>
          </div>
        </div>
      </div>
    </section>

    <section class="education-section mt3">
      <h2 class="section-title mw14">Образование</h2>
      
      <div class="diplomas-carousel mw16">
        <div class="carousel-container">
          <div class="diploma-slide">
            <img src="./images/diploma1.jpg" alt="Диплом 1" class="diploma-img">
          </div>

          <div class="diploma-slide">
            <img src="./images/diploma2.jpg" alt="Диплом 2" class="diploma-img">
          </div>

          <div class="diploma-slide">
            <img src="./images/diploma3.jpg" alt="Диплом 3" class="diploma-img">
          </div>

          <div class="diploma-slide">
            <img src="./images/diploma4.jpg" alt="Диплом 4" class="diploma-img">
          </div>

          <div class="diploma-slide">
            <img src="./images/diploma5.jpg" alt="Диплом 5" class="diploma-img">
          </div>

          <div class="diploma-slide">
            <img src="./images/diploma6.jpg" alt="Диплом 6" class="diploma-img">
          </div>

          <div class="diploma-slide">
            <img src="./images/diploma7.jpg" alt="Диплом 7" class="diploma-img">
          </div>

          <div class="diploma-slide">
            <img src="./images/diploma8.jpg" alt="Диплом 8" class="diploma-img">
          </div>

          <div class="diploma-slide">
            <img src="./images/diploma9.jpg" alt="Диплом 9" class="diploma-img">
          </div>

          <div class="diploma-slide">
            <img src="./images/diploma10.jpg" alt="Диплом 10" class="diploma-img">
          </div>
        </div>

        <div class="carousel-indicators">
          <span class="indicator active" data-slide="0"></span>
          <span class="indicator" data-slide="1"></span>
          <span class="indicator" data-slide="2"></span>
          <span class="indicator" data-slide="3"></span>
          <span class="indicator" data-slide="4"></span>
        </div>
      </div>
    </section>

    <section class="work-area-section mw14 mt3">
      <h2 class="section-title">Запросы с которыми я работаю</h2>
      <div class="work-area block">
        <div class="work-area block__item bg4" style="display: flex; flex-direction: column;">
          <div class="work-area block__item__content" style="flex-grow: 1; display: flex; flex-direction: column;">
            <h3 class="h3">Кризисные ситуации в жизни</h3>
            <p style="margin-top: auto;">Веду частную практику, разработала тренинговые программы, провожу индивидуальные консультации и терапию.</p>
          </div>
        </div>
        
        <div class="work-area block__item bg4" style="display: flex; flex-direction: column;">
          <div class="work-area block__item__content" style="flex-grow: 1; display: flex; flex-direction: column;">
            <h3 class="h3">Мужско-женские отношения</h3>
            <p style="margin-top: auto;">Прохожу личную терапию, участвую в супервизии и супервизорских группах.</p>
          </div>
        </div>
        
        <div class="work-area block__item bg4" style="display: flex; flex-direction: column;">
          <div class="work-area block__item__content" style="flex-grow: 1; display: flex; flex-direction: column;">
            <h3 class="h3">Травматический опыт</h3>
            <p style="margin-top: auto;">Незавершённые, тяжёлые травматичные ситуации, воспоминания, мешающие сегодняшней жизни</p>
          </div>
        </div>
        
        <div class="work-area block__item bg4" style="display: flex; flex-direction: column;">
          <div class="work-area block__item__content" style="flex-grow: 1; display: flex; flex-direction: column;">
            <h3 class="h3">Психосоматика</h3>
            <p style="margin-top: auto;">Любые психосоматические симптомы.</p>
          </div>
        </div>
        
        <div class="work-area block__item bg4" style="display: flex; flex-direction: column">
          <div class="work-area block__item__content" style="flex-grow: 1; display: flex; flex-direction: column;">
            <h3 class="h3">Работа с состояниями/<br>психологическими нарушениями</h3>
            <p style="margin-top: auto;">Панические атаки, тревожность, внутренние конфликты, эмоциональная нестабильность, депрессии, страхи, навязчивые мысли, раздражительность, неуверенность в себе, самоценность, негативные установки и убеждения</p>
          </div>
        </div>
        
        <div class="work-area block__item" style="display: flex; flex-direction: column;">
          <div class="work-area block__item__content" style="flex-grow: 1; display: flex; flex-direction: column; align-items: center">
            <img 
              src="./images/icons/work-area.svg" 
              alt="Запишись"
              class="work-area block__item__img ma"
              style="margin-bottom: 20px;"
            >
            <div style="margin-top: auto; width: 100%;">
              <button class="hero-button wa pd mt" @click="openTelegram" style="width: 100%; box-sizing: border-box;">
                Записаться на консультацию
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="my-principles-section mw16 mt3">
      <div class="my-principles-panel">
        <div class="principles-content">
          <div class="principles-block">
            <h4 class="h4">Мой основной принцип — гибкость.</h4>
            <p class="p">
              Для меня важно придерживаться высоких стандартов практики и применять научно доказанные методы в работе с вами.
            </p>
          </div>
          <div class="principles-block">
            <p class="p">
              Совместная работа с каждым из вас — это встреча с уникальным живым человеком, где важно доверие, поддержка и доброжелательное внимание.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="part-services mw14 mt3">
      <div class="part-services__head">
          <h1 class="section-title">Услуги</h1>
          <p 
              class="part-services__head__link"
              @click="goToServices"
          >
              Посмотреть все услуги &#10132
          </p>
        </div>
        <div class="part-services block">
          <div 
              class="part-services block__item bg4 " 
              v-for="service in services" 
              :key="service.id"
              @click="goToServices"
          >
          <div class="part-services__card__head">
              <h2>{{ service.title }}</h2>
              <p>&#10095</p>
          </div>
            <div class="part-services__card">
                <div class="part-services__grid__card__addition">
                  <p class="part-services__grid__card__addition__price">{{ service.price }} ₽</p>
                  
                  <p class="part-services__grid__card__addition__duration" v-if="service.duration">
                      {{ service.duration }}
                  </p>
                  <img class="block__item__img mw200 "  v-if="service.type === 'online'"  src="./images/icons/on.svg" :alt="service.title"/>  
                  <img class="block__item__img mw200 "  v-if="service.type === 'offline'"  src="./images/icons/of.svg" :alt="service.title"/>  
                </div>
              </div>
          </div>
      </div>        
    </section>

    <section class="format-work mw16 mt3">
      <div class="format-work-panel">
        <div class="format-work-content">
          <div class="format-work-block" style="width: 30%; padding: 0.5rem 0;">
            <div>
              <h4 class="section-title">Формат работы</h4>
              <div class="format-work-info mt3">
                <div>
                  <p>Я работаю очно</p>
                  <p class="mt05">И онлайн по всему Миру</p>
                </div>
                <div>
                  <p>г. Таганрог </p>
                  <p class="mt05">Zoom, Skype.</p>
                </div>
              </div>
            </div>
            <div class="format-work-rool">
              <p class="p mb1">
                Правила сеттинга<br>
                и условия совместной работы
              </p>
              <a class="format-work-link" href="">Смотрите здесь</a>
            </div>
          </div>
          <div class="format-work-block">
            <img class="format-work-img" src="./images/icons/Period.svg">
            <p class="p fw500">
              В рамках психологического консультирования/терапии встречи<br>
              я рекомендую проводить 
            </p>
            <p class="p fw600">
              1–2 раза в неделю<br>
              по 60 минут в постоянное время            </p>
            <p class="p fw500">
              <b>Но!</b> Я верю в энергию взрослых людей и то, что терапия живая, когда опирается на потребность в контакте, без искусственного насаждения режима встреч. Поэтому по частоте встреч            </p>
            <p class="p fw600">
              Вы сами решаете - раз в неделю,<br>
              в 2 недели, раз в месяц.
            </p>
            <p class="p fw400">
              Это мы можем обговорить на встрече.
            </p>
            <p class="p fw400">
              Поддерживающая терапия<br>
              (с клиентами, которые уже прошли курс терапии ранее)<br>
              по договоренности.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="my-principles-section mw16 mt3">
      <div class="my-principles-panel">
        <div class="principles-content">
          <div class="principles-block">
            <h4 class="h4">Мой основной принцип — гибкость.</h4>
            <p class="p">
              Для меня важно придерживаться высоких стандартов практики и применять научно доказанные методы в работе с вами.
            </p>
          </div>
          <div class="principles-block">
            <p class="p">
              Совместная работа с каждым из вас — это встреча с уникальным живым человеком, где важно доверие, поддержка и доброжелательное внимание.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
                {
                    id: 1,
                    title: 'Личная терапия',
                    price: '4 000',
                    duration: 'Сессия 60 мин',
                    format: '/images/icons/on.svg',
                    isPackage: false,
                    type: 'online'
                },
                {
                    id: 2,
                    title: 'Терапевтические проработки',
                    price: '2 600',
                    duration: 'аудио-формат',
                    format: '/images/icons/of.svg',
                    isPackage: true,
                    type: 'offline'
                }
            ]
    };
  },
  name: 'Home',
  methods: {
    openTelegram() {
      window.open('https://t.me/oxana_hudyakova_psy', '_blank')
    },
    goToServices() {
      this.$router.push('/services');
    }
  }
}
</script>

<style scoped>
.home {
  font-family: 'Montserrat', sans-serif;
}

.ta{
  text-align: end;
}

.ma{
  margin: 0 auto;
}

.w25{
  width: 25%;
}

.wa{
  width: 100%;
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
  font-family: "Montserrat";
  color: #312011;
  font-size: 1rem;
  line-height: 1.6;
}

.pd{
  padding: 1.5rem 0 !important;
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

.mt05{
  margin-top: 0.5rem;
}

.section-title{
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: #312011;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.hero-section {
  background: #FFF5E0;
  border-radius: 24px;
  margin: 1rem;
  position: relative;
  overflow: hidden;
  min-height: 600px;
  display: flex;
  align-items: stretch;
}

.hero-container {
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 100%;
}

.hero-content {
  flex: 1;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 600px;
  position: relative;
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: #312011;
  line-height: 1.2;
  margin-bottom: 0.5rem;
}

.hero-subtitle {
  margin-bottom: 2rem;
}

.subtitle-image {
  max-width: 340px;
  height: auto;
  display: block;
  width: 100%;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #312011;
  margin-bottom: 2.5rem;
  max-width: 600px;
}

.hero-button {
  background: #53402E;
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Montserrat', sans-serif;
  align-self: flex-start;
}

.hero-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(83, 64, 46, 0.3);
}

.hero-button:active {
  transform: translateY(-1px);
}

.bottom-certifications {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.bottom-cert-item {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  color: #53402E;
}

.hero-image {
  flex: 0 0 45%;
  position: relative;
  display: flex;
  align-items: stretch;
}

.top-certifications {
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
}

.top-cert-item {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #312011;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  text-align: right;
  max-width: 200px;
}

.image-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
}

.block {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

.block__item {
  border-radius: 12px;
  padding: 25px;
    transition: all 0.3s ease;
}

.bg4 {
  background-color: #FFF5E0;
}

.block__item__content {
  font-family: "Montserrat";
  color: #312011;
  font-size: 1rem;
  font-weight: 400;
}

.block__item__img {
  width: 100%;
  max-width: 400px;
  height: auto;
  display: block;
} 

.diplomas-carousel {
  overflow-x: auto;
  padding: 20px 0;
  scrollbar-width: thin;
}

.diplomas-carousel::-webkit-scrollbar {
  height: 8px;
}

.diplomas-carousel::-webkit-scrollbar-track {
  border-radius: 4px;
}

.diplomas-carousel::-webkit-scrollbar-thumb {
  border-radius: 4px;
}

.carousel-container {
  display: flex;
  gap: 30px;
  padding: 0 10px;
}

.my-principles-panel {
  background-image: url('./images/prak.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 24px;
  overflow: hidden;
  max-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
}

.principles-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

.principles-block {
  flex: 1;
  max-width: 35%;
}

.part-section{
  display: flex;
  flex-direction: column;
  
}

.part-services__head{
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #312011;
  font-weight: 500;
  font-family: "Montserrat";
}

.part-services__card__head{
  display: flex;  justify-content: space-between;
  align-items: center;
  color: #312011;
  font-weight: 500;
  font-family: 'Playfair Display', serif;
}


.part-services__head__link:hover{
  cursor: pointer;
}

.part-services.block__item{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.part-services.block__item:hover{
  cursor: pointer;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(83, 64, 46, 0.3);
}

.part-services__grid__card__addition{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.part-services__grid__card__addition__price{
  font-size: 36px;
}

.part-services__grid__card__addition__duration{
  color: #30241980;
}

.format-work-panel {
  background-image: url('./images/format-work-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 24px;
  overflow: hidden;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #312011;
}

.format-work-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1300px;
  padding:2rem;
}

.format-work-block {
  max-width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
}

.format-work-img{
  max-width: 300px;
}

.format-work-info{
  display: flex;
  justify-content: space-between;
}

.format-work-link{
  color: #312011;
}

@media (max-width: 1200px) {
  .my-principles-panel {
    padding: 3rem;
  }
  
  .principles-content {
    gap: 15%;
  }
}

@media (max-width: 777px) {
  .my-principles-section {
    margin: 3rem 0.5rem 0.5rem;
  }
  
  .my-principles-panel {
    padding: 3rem;
    min-height: 350px;
  }
  
  .principles-content {
    flex-direction: column;
    gap: 2rem;
  }
  
  .principles-block {
    max-width: 100%;
  }
  
  .h3 {
    font-size: 1.4rem;
  }
  
  .h4 {
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
  .my-principles-section {
    margin: 2rem 0.5rem 0.5rem;
  }
  
  .my-principles-panel {
    padding: 2.5rem;
  }
  
  .h3 {
    font-size: 1.3rem;
  }
  
  .h4 {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .my-principles-panel {
    padding: 2rem;
    min-height: 300px;
  }
  
  .h3 {
    font-size: 1.2rem;
  }
  
  .h4 {
    font-size: 1.1rem;
  }
  
  .p {
    font-size: 0.95rem;
  }
}

@media (max-width: 360px) {
  .my-principles-panel {
    padding: 1.5rem;
  }
  
  .h3 {
    font-size: 1.1rem;
  }
  
  .h4 {
    font-size: 1rem;
  }
  
  .p {
    font-size: 0.9rem;
  }
}

@media (min-width: 1600px) {
  .my-principles-section {
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 1200px) {
  .hero-content {
    padding: 3rem;
  }

  .top-certifications {
    display: none;
  }
  
  .hero-title {
    font-size: 3rem;
  }
  
  .subtitle-image {
    max-width: 300px;
  }
}

@media (max-width: 777px) {
  .hero-section {
    min-height: auto;
  }
  
  .hero-container {
    flex-direction: column;
  }
  
  .hero-content {
    padding: 3rem;
    text-align: center;
    min-height: auto;
    order: 2;
  }
  
  .hero-title {
    font-size: 2.8rem;
  }
  
  .hero-button {
    align-self: center;
    margin-bottom: 2rem;
  }
  
  .bottom-certifications {
    align-items: center;
  }
  
  .bottom-cert-item {
    text-align: center;
    width: 80%;
    max-width: 400px;
  }
  
  .hero-image {
    flex: 0 0 auto;
    width: 100%;
    height: 500px;
    order: 1;
  }
  
  .image-container {
    border-radius: 24px 24px 0 0;
  }
  
  .subtitle-image {
    margin: 0 auto;
    max-width: 280px;
  }
  
  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 768px) {
  .hero-section {
    margin: 0.5rem;
  }
  
  .hero-content {
    padding: 2rem;
  }
  
  .hero-title {
    font-size: 2.2rem;
  }
  
  .subtitle-image {
    max-width: 240px;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-button {
    padding: 0.9rem 2rem;
    font-size: 1rem;
  }
  
  .hero-image {
    height: 400px;
  }
  
  .bottom-cert-item {
    font-size: 1rem;
    padding: 0.7rem 1rem;
  }
  
  .block {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  .subtitle-image {
    max-width: 200px;
  }
  
  .hero-image {
    height: 350px;
  }
  
  .bottom-cert-item {
    font-size: 0.9rem;
    padding: 0.6rem 0.9rem;
  }
  
  .hero-button {
    padding: 0.8rem 1.8rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 360px) {
  .hero-title {
    font-size: 1.6rem;
  }
  
  .subtitle-image {
    max-width: 180px;
  }
  
  .hero-image {
    height: 300px;
  }
  
  .hero-content {
    padding: 1.5rem;
  }
}

@media (min-width: 1600px) {
  .hero-section {
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>