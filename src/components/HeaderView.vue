<template>
  <div class="header-view">
    <div class="name-display">
      <router-link class="name-indent" to="/">Don Jensen</router-link>
    </div>
    <div class="nav-display">
      <router-link class="nav-spacing" to="/">
        <i class="fa fa-home"></i>
        <span class="nav-item-name">Main</span>
      </router-link>
      <router-link class="nav-spacing" to="/resume">
        <i class="fa fa-sticky-note"></i>
        <span class="nav-item-name">Resume</span>
      </router-link>
      <router-link class="nav-spacing" to="/contact">
        <i class="fa fa-envelope-open"></i>
        <span class="nav-item-name">Contact</span>
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
    float: left;
    padding-top: 18px;
    text-align: left;
    font-size: 100%;
    width: 50%;
  }
  .nav-display{
    float: right;
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
  .nav-item-name{
    display: none;
  }
  @media only screen and (min-width: 600px){
    .name-display{
      padding-top: 15px;
    }
    .nav-display{
      float: right;
      padding-top: 18px;
      width: 50%;
      text-align: right;
    }
    .nav-item-name{
      display: none;
    }
  }
  @media only screen and (min-width: 800px) {
    .nav-display{
      float: right;
      padding-top: 18px;
      width: 50%;
      text-align: right;
    }
    .nav-item-name{
      display: inline-block;
    }
  }
</style>
