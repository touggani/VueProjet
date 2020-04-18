<template>
    <div class="liste-film">
        <p>{{ detail.title }}</p>
        <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + detail.poster_path" width='300px'>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  components: {
  }, 
  data: () => {
    return {
      id: 0,
      detail: ''
    }
  },
  
  methods: {
      getDetailFilm() {
        axios.get('https://api.themoviedb.org/3/movie/'+this.id+'?api_key=1a260002e6b25560efb27f6c948b8e62&language=fr-FR')   
        .then(detail => (this.detail = detail.data))
        .catch(error => console.log(error))
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.getDetailFilm(); 
}
}
</script>

<style>


</style>
