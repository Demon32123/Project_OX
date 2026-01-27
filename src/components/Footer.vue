<template>
  <footer class="footer mt4">
    <div class="footer-container">
      <div class="footer-top">
        <div class="footer-column">
          <ul class="footer-nav-list ">
            <li v-for="item in navItems" :key="item.id" class="footer-nav-item">
              <a 
                :href="item.link" 
                class="footer-nav-link"
                :class="{ 'active': item.id === 1 }"
              >
                {{ item.title }}
              </a>
            </li>

          </ul>
        </div>

        <div class="footer-info mt2">
          <div class="footer-info__name">
          <p class="footer-info__name__title">Оксана Худякова</p>
          </div>
          <div class="footer-info__contacts">
            <img src="../views/images/icons/footer_img.svg" alt="Дипломированный психолог" class="footer__img">
            <p class="footer-phone mt2">+7 (961) 311-93-70</p>
          </div>

           <div class="footer-info__social-links">
              <a 
                href="https://t.me/oxana_hudyakova_psy" 
                target="_blank" 
                class="footer-info__social-links__social-link"
                @click="openTelegram"
              >
                Telegram
              </a>
              <a 
                href="#" 
                target="_blank" 
                class="footer-info__social-links__social-link"
              >
                Telegram-канал
              </a>
              <a 
                href="https://wa.me/79613119370" 
                target="_blank" 
                class="footer-info__social-links__social-link"
              >
                WhatsApp
              </a>
            </div>
        </div>
      </div>

      <div class="footer-copyrights">
        <div class="footer-copyrights__copyright">© url-name 2025</div>
        <div class="footer-copyrights__copyright">Create by <b>DIVA</b></div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      navItems: [
        { id: 1, title: 'Главная', link: '/' },
        { id: 2, title: 'Услуги', link: '/services' },
        { id: 3, title: 'Мероприятия', link: '/meets' },
        { id: 4, title: 'Статьи', link: '/articles' },
        { id: 5, title: 'Правила', link: '/rools' },
        { id: 6, title: 'Конфиденциальность', link: '/confident' }
      ]
    }
  },
  methods: {
    openTelegram() {
      window.open('https://t.me/oxana_hudyakova_psy', '_blank')
    }
  }
}
</script>

<style scoped>

.mb2{
  margin-bottom: 2rem;
}

.mt2{
  margin-top: 2rem;
}

.mt4{
  margin-top: 4rem;
}
.footer {
  background-image: url('../views/images/Footer.jpg');
  color: #53402E;
  padding: 2.5rem 0 1.5rem;
  font-family: 'Montserrat', sans-serif;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  padding: 4rem;
  max-height: 400px;
}

.footer-container {
  padding: 0 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.footer-info {
  min-width: 280px;
  display: flex;

  .footer-info__name{
    flex: 1;

    .footer-info__name__title {
      font-family: "Playfair Display";
      font-size: 4rem;
      font-weight: 500;
      margin-bottom: 1rem;
      color: #53402E;
    }
  }

  .footer-info__contacts{
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;

    .footer__img {
      max-width: 340px;
      height: auto;
      display: block;
      width: 100%;
    }

    .footer-phone {
      font-size: "Montserrat";
      font-size: 1.5rem;
      font-weight: 400;
      color: #53402E;
    }
  }

  .footer-info__social-links{
    display: flex;
    flex-direction: column;
    gap: 14px;
    flex: 1;
    justify-content: center;

    .footer-info__social-links__social-link {
      font-family: "Montserrat";
      background-color: #53402E;
      color: #FFF5E0;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 400;
      padding: 10px 16px;
      border: none;
      border-radius: 12px;
      transition: all 0.3s ease;
      text-align: center;
    }

    .footer-info__social-links__social-link:hover {
      transform: translateY(-2px);
    }
  }
}

.footer-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  gap: 12px;

  .footer-nav-link {
    color: #53402E;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 400;
    padding: 4px 0;
    display: inline-block;
    transition: all 0.3s ease;
    position: relative;
  }

  .footer-nav-link:hover {
    color: #8B7355;
    transform: translateY(-5px);
  }
}

.footer-copyrights{
  display: flex;
  justify-content: space-between;

  .footer-copyrights__copyright {
    font-size: 0.9rem;
    color: #8B7355;
    font-weight: 400;
    opacity: 0.8;
  }
}
/* Адаптивность */
@media (max-width: 1200px) {
  .footer {
    padding: 3rem;
    max-height: none;
  }

  .footer-info .footer-info__name .footer-info__name__title {
    font-size: 3.2rem;
  }
  
  .footer__img {
    max-width: 280px;
  }
}

@media (max-width: 992px) {
  .footer {
    padding: 2.5rem 2rem;
  }

  .footer-info {
    flex-direction: column;
    gap: 2rem;
  }

  .footer-info .footer-info__name {
    text-align: center;
  }

  .footer-info .footer-info__name .footer-info__name__title {
    font-size: 2.8rem;
    margin-bottom: 0.5rem;
  }

  .footer-info .footer-info__contacts {
    order: 1;
    flex: none;
    width: 100%;
  }

  /* Исправлено для картинки */
  .footer__img {
    max-width: 220px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    display: block;
  }

  .footer-info .footer-info__social-links {
    order: 2;
    flex: none;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
  }

  .footer-info .footer-info__social-links .footer-info__social-links__social-link {
    min-width: 140px;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 1.5rem;
    margin: 0.5rem;
    border-radius: 20px;
    overflow: visible; /* Исправлено: убрано скрытие overflow */
  }

  .footer-container {
    padding: 0 15px;
    overflow: visible; /* Добавлено */
  }

  .footer-top {
    flex-direction: column;
    gap: 30px;
    padding-bottom: 20px;
    overflow: visible; /* Добавлено */
  }

  .footer-column {
    min-width: 100%;
  }

  .footer-nav-list {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px 20px;
  }

  .footer-nav-item {
    flex: 0 0 auto;
  }

  .footer-info .footer-info__name .footer-info__name__title {
    font-size: 2.2rem;
  }

  .footer-info .footer-info__contacts .footer-phone {
    font-size: 1.3rem;
    text-align: center;
    width: 100%;
  }

  /* Исправлено для картинки */
  .footer__img {
    max-width: 180px;
  }

  .footer-info .footer-info__social-links {
    flex-direction: column;
    align-items: center;
  }

  .footer-info .footer-info__social-links .footer-info__social-links__social-link {
    width: 200px;
    max-width: 100%;
  }

  .footer-copyrights {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
  }
}

@media (max-width: 576px) {
  .footer {
    padding: 1.5rem 1rem;
    overflow: visible; /* Добавлено */
  }

  .footer-container {
    padding: 0 10px;
  }

  .footer-nav-list {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .footer-nav-link {
    font-size: 1rem;
  }

  .footer-info .footer-info__name .footer-info__name__title {
    font-size: 1.8rem;
    line-height: 1.2;
  }

  .footer-info .footer-info__contacts .footer-phone {
    font-size: 1.1rem;
    padding: 0 10px;
    word-break: break-all; /* Для очень длинных номеров */
  }

  /* Исправлено для картинки */
  .footer__img {
    max-width: 150px;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .footer-info .footer-info__social-links .footer-info__social-links__social-link {
    width: 180px;
    padding: 8px 14px;
    font-size: 0.95rem;
  }

  .footer-copyrights__copyright {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 1.2rem 0.8rem;
  }
  
  /* Исправлено для картинки */
  .footer__img {
    max-width: 130px;
    padding: 0 5px;
  }
  
  .footer-info .footer-info__contacts .footer-phone {
    font-size: 1rem;
    padding: 0 5px;
  }
}

@media (max-width: 400px) {
  .footer {
    padding: 1rem 0.6rem;
    margin: 0.3rem;
    border-radius: 15px;
  }
  
  .footer-container {
    padding: 0 8px;
  }
  
  /* Исправлено для картинки - добавлен этот медиазапрос */
  .footer__img {
    max-width: 110px;
    padding: 0;
  }
  
  .footer-info .footer-info__name .footer-info__name__title {
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
  }
  
  .footer-info .footer-info__contacts .footer-phone {
    font-size: 0.95rem;
    margin-top: 0.8rem;
  }
  
  .footer-info .footer-info__social-links .footer-info__social-links__social-link {
    width: 160px;
    padding: 7px 12px;
    font-size: 0.9rem;
  }
}

@media (max-width: 375px) {
  .footer {
    padding: 0.8rem 0.5rem;
  }

  .footer-info .footer-info__name .footer-info__name__title {
    font-size: 1.4rem;
  }

  .footer-info .footer-info__contacts .footer-phone {
    font-size: 0.9rem;
  }

  /* Исправлено для картинки */
  .footer__img {
    max-width: 100px;
  }

  .footer-info .footer-info__social-links .footer-info__social-links__social-link {
    width: 150px;
    padding: 6px 10px;
    font-size: 0.85rem;
  }
}

@media (max-width: 320px) {
  .footer {
    padding: 0.5rem 0.3rem;
    margin: 0.1rem;
  }
  
  .footer-container {
    padding: 0 4px;
  }

  /* Уменьшаем картинку еще сильнее */
  .footer__img {
    max-width: 50px; /* Было 90px, стало 70px */
    margin: 0 auto;
  }
  
  .footer-info .footer-info__contacts {
    padding: 0;
  }
  
  .footer-info .footer-info__contacts .footer-phone {
    font-size: 0.8rem; /* Уменьшили текст телефона */
    padding: 0 2px;
    margin-top: 0.5rem; /* Уменьшили отступ сверху */
  }
  
  .footer-info .footer-info__social-links .footer-info__social-links__social-link {
    width: 130px; /* Было 140px, стало 130px */
    padding: 4px 6px; /* Уменьшили padding */
    font-size: 0.75rem; /* Уменьшили шрифт */
  }
  
  .footer-info .footer-info__name .footer-info__name__title {
    font-size: 1.2rem; /* Уменьшили заголовок */
    margin-bottom: 0.2rem;
  }
}

/* Дополнительно можно добавить для очень маленьких экранов */
@media (max-width: 280px) {
  .footer__img {
    max-width: 30px; /* Еще меньше для очень маленьких экранов */
  }
  
  .footer-info .footer-info__social-links .footer-info__social-links__social-link {
    width: 120px;
    padding: 3px 5px;
    font-size: 0.7rem;
  }
  
  .footer-info .footer-info__name .footer-info__name__title {
    font-size: 1.1rem;
  }
  
  .footer-info .footer-info__contacts .footer-phone {
    font-size: 0.75rem;
  }
}
</style>