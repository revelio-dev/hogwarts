<template>
  <div id="weatherApp">
    <form v-on:submit.prevent="getWeather">
      <p>
        <input type="text" name="location" v-model="location" />
      </p>
      <p>
        <button class="btn btn-primary">Search</button>
      </p>
    </form>
    <div v-if="displayWeather" class="container display-weather-section">
      <h1>{{ weather.name }}</h1>
      <coord v-bind:coord="weather.coord"></coord>
      <weather-display v-bind:weatherDisplay="weather.weather[0]"></weather-display>
      <temperature v-bind:temperature="weather.main"></temperature>
      <winds v-bind:wind="weather.wind"></winds>
      <clouds v-bind:cloud="weather.clouds"></clouds>
      <sun v-bind:sun="weather.sys"></sun>
    </div>
  </div>
</template>

<script>
import apiKey from "../../config";
export default {
  data: function() {
    return {
      location: "",
      apiKey: apiKey,
      weather: [],
      displayWeather: false
    };
  },

  methods: {
    getWeather: function() {
      return this.$http
        .get(
          "http://api.openweathermap.org/data/2.5/weather?q=" +
            this.location +
            "&appid=" +
            this.apiKey
        )
        .then(
          response => {
            this.weather = response.body;
            this.displayWeather = true;
          },
          response => {
            this.weather = [];
            this.displayWeather = false;
          }
        );
    }
  }
};
</script>