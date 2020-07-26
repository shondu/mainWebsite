<template>
    <div class="flex-container">
      <div class="city-tile tooltip" v-for="(weatherTile, index) in weatherList" :key="index">
        <div>
          {{weatherTile.name}}
        </div>
        <div>
          {{weatherTile.weather[0].main}}
        </div>
        <div>
          {{weatherTile.weather[0].description}}
        </div>
        <div>
          {{formatTemp(weatherTile.main.temp)}}&#176; F
        </div>
        <div class="tooltiptext">
          Min: {{formatTemp(weatherTile.main.temp_min)}}&#176; F <br>
          Max: {{formatTemp(weatherTile.main.temp_max)}}&#176; F <br>
          Feels like: {{formatTemp(weatherTile.main.feels_like)}}&#176; F <br>
          Humidity: {{weatherTile.main.humidity}}&#37;
        </div>
        <img
          :src="'http://openweathermap.org/img/wn/' + weatherTile.weather[0].icon +'@2x.png'"
          :alt="weatherTile.weather[0].main">
      </div>
    </div>
</template>

<script>
    export default {
        name: 'WeatherWidget',
      data () {
          return {
            weatherApiKey: process.env.KEYS.WEATHER_API,
            cityList: ['Omaha', 'Portland', 'Seattle', 'Colorado%20Springs'],
            weatherList: []
          }
      },
      created () {
          this.fetchWeatherData()
      },
      methods: {
        fetchWeatherData () {
          this.cityList.forEach(city => {
            let apiString =
              'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + this.weatherApiKey + '&units=imperial'

            fetch(apiString)
              .then(response => response.json())
              .then(data => {
                this.weatherList.push(data)
              })
          })
        },
        formatTemp (temp) {
          return Math.floor(temp)
        }
      }
    }
</script>

<style scoped>
  .city-tile{
    border-radius: 30px;
    padding: 5px;
    margin: 10px;
  }
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    background-color: transparent;
    justify-content: space-evenly;
    margin-bottom: 10px;
  }
  .flex-container > div {
    color: black;
    font-weight: bolder;
    background-color: lightblue;
    width: 150px;
    height: 150px;
    text-align: center;
    font-size: 75%;
    box-shadow:  5px 10px 18px grey;
  }
  .tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    top: -40px;
    left: 15px;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
  @media only screen and (min-width: 400px) {
    .flex-container > div {
      font-size: 100%;
      height: 200px;
    }
  }
  @media only screen and (min-width: 600px) {}
  @media only screen and (min-width: 768px) {
    .flex-container > div {
      width: 200px;
      height: 200px;
    }
    .tooltip .tooltiptext {
      left: 40px;
    }
  }

</style>
