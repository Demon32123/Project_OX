<template>
  <header class="header">
    <div class="header-container">
      <div class="left-section">
        <button 
          class="mobile-menu-button" 
          @click="toggleMobileMenu"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Меню навигации"
        >
          <span class="menu-icon"></span>
          <span class="menu-icon"></span>
          <span class="menu-icon"></span>
        </button>

        <div class="logo-section">
          <h1 class="site-title">Оксана Худякова</h1>
        </div>
      </div>

      <nav class="nav-desktop">
        <ul class="nav-list">
          <li v-for="item in navItems" :key="item.id" class="nav-item">
            <a 
              :href="item.link" 
              class="nav-link"
              :class="{ 'active': item.id === 1 }"
            >
              {{ item.title }}
            </a>
          </li>
        </ul>
      </nav>
      
      <button @click="openTelegram" class="button-write-me">Написать</button>
    </div>
    
    <nav 
      class="nav-mobile" 
      v-if="isMobileMenuOpen"
      :class="{ 'show': isMobileMenuOpen }"
    >
      <ul class="nav-list-mobile">
        <li v-for="item in navItems" :key="item.id" class="nav-item-mobile">
          <a 
            :href="item.link" 
            class="nav-link-mobile"
            @click="closeMobileMenu"
          >
            {{ item.title }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMobileMenuOpen: false,
      navItems: [
        { id: 1, title: 'Главная', link: '/' },
        { id: 2, title: 'Услуги', link: '/services' },
        { id: 3, title: 'Мероприятия', link: '/meets' },
        { id: 4, title: 'Статьи', link: '/articles' },
        { id: 5, title: 'Правила', link: '/rools' }
      ]
    }
  },
  methods: {
    openTelegram() {
      window.open('https://t.me/oxana_hudyakova_psy', '_blank')
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    }
  },
  mounted() {
    document.addEventListener('click', (event) => {
      if (this.isMobileMenuOpen && 
          !event.target.closest('.mobile-menu-button') &&
          !event.target.closest('.nav-mobile')) {
        this.closeMobileMenu()
      }
    })

    window.addEventListener('resize', () => {
      if (window.innerWidth > 985 && this.isMobileMenuOpen) {
        this.closeMobileMenu()
      }
    })
  }
}
</script>

<style scoped>
.header {
  margin: 1rem;
  background: #FFF5E0;
  color: black;
  padding: 1rem 0;
  position: sticky;
  border-radius: 24px;
}

.header-container {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-section {
  display: flex;
  align-items: center;
  gap: 20px;
}

.site-title {
  font-family: "Playfair Display";
  font-size: 1.8rem;
  font-weight: 500;
}

.nav-desktop {
  display: flex;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 29px;
}

.nav-link {
  color: black;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0 6px;
  transition: color 0.3s ease;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
}

.nav-link.active {
  font-weight: 600;
}

.nav-link:hover {
  color: #53402E;
}

.mobile-menu-button {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.menu-icon {
  width: 100%;
  height: 3px;
  background-color: #53402E;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.mobile-menu-button:hover .menu-icon {
  background-color: #8B7355;
}

.button-write-me {
  padding: 10px 50px;
  background: #53402E;
  outline: none;
  border: none;
  color: white;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Montserrat', sans-serif;
}

.button-write-me:hover {
  transform: translateY(-2px);
}

.nav-mobile {
  display: none;
  background: #FFF5E0;
  padding: 20px;
  margin: 1rem 0;
  border-radius: 12px;
}

.nav-list-mobile {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.nav-link-mobile {
  color: #53402E;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 12px 20px;
  border-radius: 8px;
  display: block;
  transition: all 0.3s ease;
  text-align: center;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
}

.nav-link-mobile:hover {
  background: rgba(83, 64, 46, 0.1);
}

@media (max-width: 1070px) {
  .header-container {
    padding: 0 15px;
    justify-content: space-between;
  }

  .mobile-menu-button {
    display: flex;
  }

  .nav-desktop {
    display: none;
  }

  .site-title {
    display: none;
  }

  .nav-mobile {
    display: block;
  }

  .nav-mobile.show {
    animation: slideDown 0.3s ease-out;
  }

  .button-write-me {
    padding: 10px 30px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .header-container {
    padding: 0 10px;
  }

  .left-section {
    gap: 15px;
  }

  .button-write-me {
    padding: 8px 20px;
    font-size: 0.85rem;
  }

  .nav-mobile {
    padding: 15px;
    margin: 0.5rem 0;
  }

  .nav-link-mobile {
    font-size: 1rem;
    padding: 10px 15px;
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>