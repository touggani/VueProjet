<template>
    <div class="accueil">
      <MenuBarre/>
      <div class="pagestyle">
        <p class ="suggestion">
          Nos suggestions pour vous :
        <p>
        <div class="carousel">
              <img v-bind:src="list[imageIndex]">
          </div>
          <div class="bouton">
            <button v-on:click="getPreviewImage()">Precedent</button>
            <button v-on:click="getNextImage()">Suivant</button>
          </div>
        <div class="actualites">
          <p>CINEMA</p>
          <div class="alerte">
            <span>
              Le Covid-19 oblige les cinémas français à fermer leurs portes. 
              <br>Avec Wolrd Movies restez informés sur la situation actuelle et soutenez vos films
              favoris avec le hashtag suivant :
              <br>"#cinemaathome" sur les différents réseaux sociaux. 
              <br>Durant cette période, notre équipe restent mobilisées afin de vous proposer des alternatives VOD, SVOD, TV et Séries.
              <br>Restez chez vous ! Protégez-vous ! A vos marque, prêt, Watchez !
            </span>
          </div>
          <div class="bandeannonce">
            <p>DERNIERES BANDES ANNONCES</p>
            <iframe  width="500" height="344" src="http://fr.vid.web.acsta.net/nmedia/33/19/12/27/17//19587102_hd_013.mp4" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import laligneverte from '../assets/laligneverte.jpg'
import inglorious from '../assets/ingloriousbasterds.jpg'
import mib from '../assets/meninblack.jpg'
import lblblt from '../assets/lebonlabruteetletruand.jpg'
import MenuBarre from './MenuBarre'

export default {
  name: 'Accueil',
  components: {
    MenuBarre
  }, 
  data: () => {
    return {
      list: [
        laligneverte,
        inglorious,
        mib,
        lblblt
        ], 
        imageIndex: 0
    }
  },
  methods: {
    getNextImage(){
        if(this.imageIndex > this.list.length-2){
            this.imageIndex = 0;
        }
        else{
            this.imageIndex ++;
        }
    },
    getPreviewImage(){
        if(this.imageIndex < 0){
            this.imageIndex = this.list.length;
        }
        else{
            this.imageIndex --;
        }
    }
  }
}
</script>

<style>
  html {
    background-color: orange;
  }
  .suggestion {
    font-size: 25px;
    color: white;
    margin-left: 15px;
  }

  .carousel {
    margin-left: -45px;
  }

  .carousel img {
    width: 400px;
    height: 600px;
  }

.pagestyle {
  margin: 25px 0px 0px 700px;
}

  .bouton {
    margin-left: -40px;
    margin-top: 20px;
  }

  .bouton button {
    width: 170px;
    border-radius: 10px;
    line-height: 30px;
    margin-left: 20px;
    text-align: center;
    background-color: black;
    color: orange;
  }

  .bouton button:hover {
    background-color: orange;
    color: white;
  }
  
  .actualites {
    margin-top: 50px;
    font-size: 25px;
    margin-left: 90px;
    color: white;
  }
  
  .alerte {
    margin-top: -10px;
    margin-left: -175px;
    background-color: black;
    color: white;
    font-size: 16px;
    width: 500px;
    line-height: 20px;
    text-align: center;
  }

  .bandeannonce {
    margin-top: 50px;
    margin-left: -125px;
    color: white;
  }

  .bandeannonce iframe {
    margin-left: -55px;
  }
</style>