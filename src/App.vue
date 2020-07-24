<template>
  <div id="app">
    <HeaderView></HeaderView>
    <router-view/>
  </div>
</template>

<script>
  import HeaderView from './components/HeaderView'
  export default {
    name: 'App',
    components: {HeaderView}
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body{
  margin: 0;
}

</style>
