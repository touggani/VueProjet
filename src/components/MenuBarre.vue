<template>
    <div class="menu-barre">
        <div id="mySidenav" class="sidenav">
        <div><a href="/" ><img src="../illustration/logo.png" id="logo"></a></div>
        <div><a href="/liste-film"><img src="../illustration/logo-cinema.png"><span class="titre-menu">FILM</span></a></div>
        <div><a href="/liste-serie"><img src="../illustration/logo-cinema.png"><span class="titre-menu">SÉRIE</span></a></div>
        <div><a href="#"><img src="../illustration/logo-cinema.png"><span class="titre-menu">INSCRIPTION</span></a></div>
        <div><a href="#"><img src="../illustration/logo-cinema.png"><span class="titre-menu">ALÉATOIRE</span></a></div>
        <div><a href="#"><img src="../illustration/logo-cinema.png"><span class="titre-menu">BOUTIQUE</span></a></div>
        </div>
    </div>
</template>



<script>
    export default {
    name: 'MenuBarre',
    components: {
    
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
#mySidenav{
  position: fixed;
  left: -10px;
  top: -10px;
  transition: 0.3s;
  padding: 15px;
  height: 97.3%;
  text-decoration: none;
  font-size: 20px;
  color: white;
  border-radius: 0 5px 5px 0;
  background-color: rgb(0, 0, 0);
  z-index: 1000;
}
.titre-menu{display: none;}
#mySidenav:hover .titre-menu{display: initial;position: relative;top: -30px;color: white;font-family: 'comfortaa';font-size: 16px;}
a{text-decoration: none;}
#mySidenav:hover {width: 200px;left: 0;}
#logo{margin-bottom: 80px;}
#mySidenav a img{width: 50px;padding-bottom: 20px;}
</style>
