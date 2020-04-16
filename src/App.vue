<template>
    <liste-film/>
</template>

<script>

//import MenuBarre from './components/MenuBarre.vue'
import ListeFilm from './components/ListeFilm.vue'

export default {
  name: 'App',
  components: {
    ListeFilm
  }, 
  data: () => {
    return {
      
    }
  },
  methods: {
    
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
