<template>
  <Navbar :logo="logo_src" :alt="app_name" />
  <router-view/>
  <Footer/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  setup() {
    const logo_src = "/img/logo.png"
    const app_name = "Make your burger"
    
    return {
      logo_src,
      app_name
    }
  },
})
</script>

<style>
  * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .main-container {
    margin: 50px;
    min-height: 250px;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }
</style>
