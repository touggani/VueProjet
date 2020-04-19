<template>
    <div class="aleatoire">  
      <MenuBarre/>
            <!--<div  v-for="item in populaire" :key="item.id" class="film" v-bind:id="item.id">
                <a v-bind:href="'/detail-film/'+ item.id"><img v-bind:src="'http://image.tmdb.org/t/p/w500/' + item.poster_path" width='450px'>
                <p>{{item.title}}</p></a>
            </div>
            <button v-on:click="getNextImage()">RUN</button>-->
            <div class="boutonaleatoire">
                <button v-on:click="Aleatoire()">RUN</button>
            </div>
            
    </div>
</template>

<script>
import MenuBarre from './MenuBarre'
import axios from 'axios'

export default {
  name: 'Aleatoire',
  components: {
      MenuBarre
  }, 
  data: () => {
    return {
        populaire: ''
    }
  },
 created() {
    this.getPopular();
    this.Aleatoire(1,10);
  },
 methods: {
    getPopular() {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1a260002e6b25560efb27f6c948b8e62&language=en-US&page=1')   
        .then(populaire => (this.populaire = populaire.data.results))
        .catch(error => console.log(error))
    },
    Aleatoire(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
 }
}
</script>

<style>
    .boutonaleatoire button {
        margin-left:750px;
        width: 170px;
        border-radius: 10px;
        line-height: 30px;
        text-align: center;
        background-color: black;
        color: orange;
    }

    .boutonaleatoire button:hover {
    background-color: orange;
    color: white;
  }
</style>