<template>
  <div id="app">
    <!-- Шапка остается всегда -->
    <Header />
    
    <!-- Здесь будет меняться контент страницы -->
    <main class="main-content">
      <router-view />
    </main>
    
    <!-- Если нужен подвал -->
    <footer class="footer">
     <Footer />
    </footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {

}

.main-content {
}

.footer {
}
</style>