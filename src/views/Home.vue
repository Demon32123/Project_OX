<template>
  <div class="home">
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">Оксана Худякова</h1>
          
          <div class="hero-subtitle">
            <img 
              src="./icons/subtitle.svg" 
              alt="дипломированный психолог"
              class="subtitle-image"
            >
          </div>
          
          <p class="hero-description">
            Моя задача - помочь Вас прийти к добрым отношениям с собой и другими 
            без тревог и ограничений, без вины и стыда
          </p>
          
          <button class="hero-button" @click="scrollToConsultation">
            Записаться на консультацию
          </button>
          
          <div class="bottom-certifications">
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
              src="./icons/ox.png"
              alt="Оксана Худякова"
              class="profile-image"
            >
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="about-block">
  <div class="about-item">
    <div class="about-content">
      <h3>Обо мне</h3>
      <p>Работаю как в долгосрочной терапии для глубоких личных изменений, так и в краткосрочном консультировании, где за несколько сессий помогаю решить конкретный запрос.</p>
    </div>
  </div>
  
  <div class="about-item">
    <div class="about-content">
      <img 
            src="./icons/title17years.png" 
            alt="За 17 лет"
            class="about-img"
        >
      <p class="ta">Специализируюсь на работе с тревожными расстройствами, паническими атаками и эмоциональным выгоранием.</p>
    </div>
  </div>
  
  <div class="about-item bg4">
    <div class="about-content">
      <h3>Более 10 лет</h3>
      <p>Веду частную практику, разработала тренинговые программы, провожу индивидуальные консультации и терапию.</p>
    </div>
  </div>
  
  <div class="about-item bg4">
    <div class="about-content">
      <h3>Регулярно</h3>
      <p>Прохожу личную терапию, участвую в супервизии и супервизорских группах.</p>
    </div>
  </div>
  
  <div class="about-item bg4">
    <div class="about-content">
      <h3>Регулярно продолжаю </h3>
      <p>Обучение психотерапии в различных модальностях и направлениях.</p>
    </div>
  </div>
  
  <div class="about-item bg4">
    <div class="about-content">
      <h3>Мужчины и женщины</h3>
      <p>Я работаю с разными людьми - домохозяйками, молодыми и взрослыми. С теми, кто в отношениях, одинокими, на грани развода и т.д</p>
    </div>
  </div>
</div>

<!-- Образование -->
<section class="education-section">
  <h2 class="section-title">Образование</h2>
  
  <div class="diplomas-carousel">
    <div class="carousel-container">
      <!-- Диплом 1 -->
      <div class="diploma-slide">
        <img src="./diplomas/diploma1.jpg" alt="Диплом 1" class="diploma-img">
      </div>
      
      <!-- Диплом 2 -->
      <div class="diploma-slide">
        <img src="./diplomas/diploma2.jpg" alt="Диплом 2" class="diploma-img">
      </div>
      
      <!-- Диплом 3 -->
      <div class="diploma-slide">
        <img src="./diplomas/diploma3.jpg" alt="Диплом 3" class="diploma-img">
      </div>
      
      <!-- Диплом 4 -->
      <div class="diploma-slide">
        <img src="./diplomas/diploma4.jpg" alt="Диплом 4" class="diploma-img">
      </div>
      
      <!-- Диплом 5 -->
      <div class="diploma-slide">
        <img src="./diplomas/diploma5.jpg" alt="Диплом 5" class="diploma-img">
      </div>
    </div>
    
    <!-- Кнопки навигации -->
    <button class="carousel-btn prev-btn">‹</button>
    <button class="carousel-btn next-btn">›</button>
    
    <!-- Индикаторы -->
    <div class="carousel-indicators">
      <span class="indicator active" data-slide="0"></span>
      <span class="indicator" data-slide="1"></span>
      <span class="indicator" data-slide="2"></span>
      <span class="indicator" data-slide="3"></span>
      <span class="indicator" data-slide="4"></span>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    scrollToConsultation() {
      const element = document.getElementById('consultation');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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
  box-shadow: 0 4px 15px rgba(83, 64, 46, 0.2);
  font-family: 'Montserrat', sans-serif;
  align-self: flex-start;
  margin-bottom: 3rem;
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

.consultation-section {
  padding: 4rem 2rem;
  background: white;
  margin: 2rem;
  border-radius: 24px;
}

.about-block {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto; 
  padding: 20px; 
}
.bg4 {
    background-color: #FFF5E0;
}
.about-item {
  border-radius: 12px;
  padding: 25px;
}

.about-content h3 {
    font-family: "Playfair Display";
  color: #312011;
  font-size: 1.6rem;
  margin-bottom: 12px;
  font-weight: 400;
  margin-bottom: 2rem;
}
.about-img{
    width: 100%;
  max-width: 400px;
  height: auto;
  display: block;

}
.about-content p {
  color: #312011;
  line-height: 1.6;
  
  font-size: 1rem;
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

/* Убираем кнопки и индикаторы для простой версии */
.carousel-btn, .carousel-indicators {
  display: none;
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
  
  .top-certifications {
    top: 1.5rem;
    right: 1.5rem;
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
  .hero-section,
  .consultation-section {
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