<template>
    <div class="menu-barre">
        <ul id="Navigation">
            <li><a href="menu_definir.htm">Exemple 1</a></li>
            <li><a href="menu_formater.htm">Exemple 2</a></li>
            <li><a href="menu_rollover.htm">Exemple 3</a></li>
  </ul>
    </div>
</template>

<script>

export default {
  name: 'App',
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu-barre{
    background-color: black;
    width: 6%;
    height: 100%;
    min-height: 100vh;
    top: 100px;
}
ul#menu {
    margin: 0; padding: 0;
}
ul{
    list-style-type: none;
}
ul#menu li {
    list-style: none;
    margin: 0; padding: 0;
    list-style-type: none;
}


</style>
