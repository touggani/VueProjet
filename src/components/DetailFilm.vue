<template>
    <div class="detail-film">
        <h1>{{ detail.title }}</h1>
        <div class="detail">
            <i v-if="detail.adult == adult">Publics averti</i><i v-else>Tous publics</i><i class="vl"></i>
            <i>{{ detail.runtime }}</i><i class="vl"></i>
            <i>{{ genrefilm }}</i><i class="vl"></i>
            <i>{{ detail.release_date }}</i>
        </div>
        <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + detail.poster_path">
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
      detail: '',
      adult: 'adult'
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
    },
    computed: {
        genrefilm: function () {
        return this.detail.genres[0].name + ' / ' + this.detail.genres[1].name  + ' / ' + this.detail.genres[2].name
    }
  }
}
</script>

<style>
.detail-film{
    font-family: 'comfortaa';
    position: absolute;
    background-color: white;color: black;border: solid orange;
    width: 70%;
    height: 30em;
    text-align: center;
    left: 13%;
}
.detail-film img{
    position: absolute;
    width: 28%;
    bottom: 0px;
    left: 0;
}
.detail-film i{
    color: grey;
}

.detail-film .vl{
  border-left: 4px solid orange;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 10px;
}

</style>
