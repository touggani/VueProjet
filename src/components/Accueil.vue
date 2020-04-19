<template>
    <div class="accueil">
      <MenuBarre/>
       <!--<div class="carousel">
            <img v-bind:src="list[imageIndex]">
        </div>
        <button v-on:click="getPreviewImage()">Precedent</button>
        <button v-on:click="getNextImage()">Suivant</button>-->
    </div>
</template>

<script>
//import laligneverte from '../assets/laligneverte.jpg'
//import meninblack from '../assets/meninblack.jpg'
//import ingloriousbasterds from '../assets/ingloriousbasterds.jpg'
import MenuBarre from './MenuBarre'

export default {
  name: 'Accueil',
  components: {
    MenuBarre
  }, 
  data: () => {
    return {
      
    }
  }
}
</script>

<style>


</style>
