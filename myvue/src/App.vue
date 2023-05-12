<template>
  <HelloWorld/>

  <!-- <BuatPosting/>
  <Postingan/> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import BuatPosting from './components/BuatPosting.vue';
// import Postingan from './components/Postingan.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    // BuatPosting,
    // Postingan
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
