<template>
    <div id="liste-film">
        
    </div>   
</template>



<script>
import axios from 'axios'
export default {
  components: {
  }, 
  data: () => {
    return {
        query: '',
        results: ''
    }
  },
  created() {
    this.getPopular();
  },
  computed: {
    cards() {
      return this.$store.getters.getCards;
    },
  },
  methods: {
    getPopular() {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1a260002e6b25560efb27f6c948b8e62&language=en-US&page=1')
        console.log(this.results)
    }
}

}
</script>

<style>



</style>
