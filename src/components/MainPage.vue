<template>
    <div id="main-page">
      <section>
        <h1 class="image-text">To be honest,<br>I'd rather be here</h1>
        <img class="main-image" src="@/assets/trail1.jpg" alt="pic">
      </section>
      <ClockWidget></ClockWidget>
      <section v-if="showLinks">
        <hr>
        <ul>
          <li><a href="http://my.bestcare.org" target="_blank">My Bestcare</a></li>
          <li><a href="https://www.centrisfcu.org/online-banking/" target="_blank">Centris</a></li>
          <li><a href="http://www.starbucks.com/" target="_blank">Starbucks</a></li>
          <li><a href="http://www.tvhell.net/list6.html" target="_blank">TV Hell</a></li>
          <li><a href="http://www.woot.com/" target="_blank">Woot</a></li>
          <li><a href="https://www.udemy.com/" target="_blank">UDemy</a></li>
          <li><a href="https://github.com/" target="_blank">GitHub</a></li>
        </ul>
      </section>
      <hr>
      <WeatherWidget></WeatherWidget>
    </div>
</template>

<script>
    import ClockWidget from './ClockWidget'
    import WeatherWidget from './WeatherWidget'
    export default {
        name: 'MainPage',
        components: {ClockWidget, WeatherWidget},
      data () {
        return {
          showLinks: false
        }
      },
      created () {
          if (this.$route.query.links) {
            this.showLinks = true
          }
      },
      methods: {
      }
    }
</script>

<style scoped>
  #main-page{
    background-color: black;
  }
  a{
    color: white;
  }
  li{
    list-style: none;
  }
  .main-image{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .image-text{
    position: absolute;
    font-family: 'Bad Script', Helvetica, Arial, sans-serif;
    color: white;
    left: 45%;
    line-height: 35px;
  }
  @media only screen and (min-width: 360px) {
    .image-text{
      left: 50%;
    }
  }
  @media only screen and (min-width: 400px) {
    .image-text{
      left: 55%;
    }
    ul{
      column-count: 2;
    }
  }
  @media only screen and (min-width: 500px) {
    .image-text{
      left: 60%;
    }
  }
  @media only screen and (min-width: 600px) {
    .image-text{
      left: 70%;
      font-size: 25px;
    }
    ul{
      column-count: 3;
    }
  }
  @media only screen and (min-width: 768px) {
    .image-text{
      font-size: 30px;
      line-height: 45px;
    }
  }
  @media only screen and (min-width: 900px) {
    .image-text{
      width: 30%;
      line-height: 50px;
      margin-top: 40px;
    }
    ul{
      column-count: 4;
    }
  }
</style>
