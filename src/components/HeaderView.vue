<template>
  <div class="header-view">
    <div class="float-left name-display">
      <router-link class="name-indent" to="/">Don Jensen</router-link>
    </div>
    <div class="float-right nav-display">
      <router-link class="nav-spacing" to="/">
        <i class="fa fa-home"></i>
        Main
      </router-link>
      <router-link class="nav-spacing" to="/resume">
        <i class="fa fa-sticky-note"></i>
        Resume
      </router-link>
      <router-link class="nav-spacing" to="/contact">
        <i class="fa fa-envelope-open"></i>
        Contact
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'HeaderView'
    }
</script>

<style scoped>
  .header-view{
    background-color: black;
    color: white;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 40px;
    margin: auto;
  }
  .name-indent{
    margin-left: 10px;
  }
  .name-display{
    padding-top: 4px;
    text-align: left;
    font-size: 150%;
    width: 50%;
  }
  .float-left{
    float: left;
  }
  .float-right{
    float: right;
  }
  .nav-display{
    padding-top: 18px;
    width: 50%;
    text-align: right;
  }
  a{
    color: white;
    text-decoration: none;
  }
  .nav-spacing{
    padding-right: 20px;
  }
</style>
