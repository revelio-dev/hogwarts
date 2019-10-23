<template>
  <div class="container-fluid col-6">
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="icon" class="rounded-0" style="background-color:blue"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="Your Weather now is">
            <b-card-text>Humidity: {{weatherData.humidity}}</b-card-text>
            <b-card-text>Temperature: {{weatherData.temp}}</b-card-text>
            <b-card-text>Max. Temperature: {{weatherData.tempMax}}</b-card-text>
            <b-card-text>Min. Temperature: {{weatherData.tempMin}}</b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { API_KEY, URL_GEO, URL } from "../../service/const";

export default {
  data() {
    return {
      weatherDescription: "",
      weatherData: null,
      sunrise: "",
      sunset: "",
      pressure: "",
      wind: "",
      overcast: "",
      icon: "",
      location: "",
      city: "",
      country: "",
      cod: null
    };
  },
  methods: {
    getWeather(url) {
      this.$http
        .get(url)
        .then(response => {
          this.city = response.data.name;
          this.country = response.data.sys.country;
          this.city = response.data.name;
          this.country = response.data.sys.country;
          this.weatherDescription = response.data.weather[0].description;
          this.weatherData = {
            temp: response.data.main.temp,
            tempMin: response.data.main.temp_min,
            tempMax: response.data.main.temp_max,
            humidity: response.data.main.humidity + "%"
          };
          this.wind = response.data.wind.speed + "m/s";
          this.pressure = response.data.main.pressure + "bars";
          this.overcast = response.data.weather[0].description;
          this.cod = response.data.weather[0].icon;
          this.icon =
            "http://openweathermap.org/img/wn/" + this.cod + "@2x.png";
          this.sunrise = new Date(response.data.sys.sunrise * 1000)
            .toLocaleTimeString("es-ES")
            .slice(0, 4);
          this.sunset = new Date(response.data.sys.sunset * 1000)
            .toLocaleTimeString("es-ES")
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
    geoError() {
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
