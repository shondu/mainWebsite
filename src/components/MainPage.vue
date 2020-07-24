<template>
    <div id="main-page">
      <section>
        <h1 class="image-header-line1">To be honest,</h1>
        <h1 class="image-header-line2">I'd rather be here.</h1>
        <img src="@/assets/trail1.jpg" alt="pic">
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
  img {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .image-header-line1 {
    top: 100px;
  }
  .image-header-line2 {
    top: 175px;
  }
  section >img {
    margin-top: -2px;
  }
  section > ul {
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
    list-style: none;
  }
  section > h1 {
    position: absolute;
    /*font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;*/
    font-family: 'Bad Script', Helvetica, Arial, sans-serif;
    left: 75%;
    width: 30%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 100;
    font-size: 50px;
    font-style: italic;
  }
  @media (max-width: 800px) {
    .image-header-line2{
      top: 150px;
    }
    section > h1 {
      font-size: 30px;
      width:60%;
    }
  }
</style>
