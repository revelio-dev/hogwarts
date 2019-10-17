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
import axios from "axios";

export default {
  data: function() {
    return {
      location: "",
      url: Vue.config.app.VUE_APP_API_ROOT,
      key: Vue.config.app.VUE_APP_API_KEY,
      weather: [],
      displayWeather: false
    };
  },
  methods: {
    getWeather: function() {
      axios
        .get(
          this.url +
            "find?q=" +
            this.location +
            this.country +
            "&units=imperial&appid=" +
            this.key
        )
        .then(response => {
          console.log(this.weather);
        })
        .catch(error => {
          console.log("Error", error);
        });
    }
  }
};
</script>