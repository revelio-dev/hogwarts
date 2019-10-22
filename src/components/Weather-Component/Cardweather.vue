<template>
  <div id="card-weather" v-cloak>
    <div class="container"></div>
  </div>
</template>

<script>
import { API_KEY, URL_GEO, URL } from "../../service/const";

export default {
  data() {
    return {
      currentTemp: "",
      minTemp: "",
      maxTemp: "",
      sunrise: "",
      sunset: "",
      pressure: "",
      humidity: "",
      wind: "",
      overcast: "",
      icon: "",
      location: ""
    };
  },
  methods: {
    getWeather(url) {
      this.$http
        .get(url)
        .then(response => {
          this.currentTemp = response.data.main.temp;
          this.minTemp = response.data.main.temp_min;
          this.maxTemp = response.data.main.temp_max;
          this.pressure = response.data.main.pressure;
          this.humidity = response.data.main.humidity + "%";
          this.wind = response.data.wind.speed + "m/s";
          this.overcast = response.data.weather[0].description;
          this.icon =
            "images/" + response.data.weather[0].icon.slice(0, 2) + ".svg";
          this.sunrise = new Date(response.data.sys.sunrise * 1000)
            .toLocaleTimeString("en-GB")
            .slice(0, 5);
          this.sunset = new Date(response.data.sys.sunset * 1000)
            .toLocaleTimeString("en-GB")
            .slice(0, 5);
        })
        .catch(error => {
          console.log(error);
        });
    },
    geolocation() {
      navigator.geolocation.getCurrentPosition(this.buildUrl, this.geoError);
    },
    buildUrl(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      this.getWeather(URL_GEO + "&lat=" + lat + "&lon=" + lon + API_KEY);
    },
    geoError(error) {
      this.getWeather(URL_GEO + "&lat=0&lon=0" + API_KEY);
    }
  },
  beforeMount() {
    this.geolocation();
  }
};
</script>

<style>
</style>