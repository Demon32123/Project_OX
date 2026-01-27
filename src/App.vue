<template>
  <div id="app">
    <Header v-if="showHeaderFooter"/>
    
    <main class="main-content">
      <router-view />
    </main>
    
    <footer class="footer">
     <Footer v-if="showHeaderFooter"/>
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
  },
  computed: {
    showHeaderFooter() {
      return this.$route.path !== '/auth';
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>