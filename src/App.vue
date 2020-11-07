<template>
  <div id="app">
    <Navbar />
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>      
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
