<template>
  <b-container class="bv-example-row bv-example-row-flex-cols">
    <b-row align-self="center">
      <b-col cols="8">
        <b-form @submit.prevent="showWeather" v-if="show">
          <b-form-group
            id="input-group-1"
            label="Enter the city name to check your current weather:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="query"
              type="text"
              required
              @keyup.enter="showWeather"
              placeholder="Enter city name"
            ></b-form-input>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
    <section v-if="city.length" class="weather-result">
      <div align="center" class="container" id="city-name">
        <h1>{{city}} {{country}}</h1>
      </div>
      <div class="col-12" align="center">
        <h3>
          <em>{{weatherDescription}}</em>
        </h3>
      </div>
    </section>
    <div v-if="city.error!=true" class="error-msg">
      <b-alert
        :show="dismissCountDown"
        dismissible
        variant="warning"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
      >Error en la ciudad</b-alert>
    </div>
    <div v-if="!city.city" class="container-fluid">
      <child-humidity v-if="weatherData" :data="weatherData"></child-humidity>
      <child-icon v-if="weatherData" :icon="icon"></child-icon>
    </div>
  </b-container>
</template>

<script>
import { API_KEY, URL } from "../../service/const";
import Humidityweather from "./Humidityweather";
import Imageweather from "./Imageweather";

export default {
  name: "Searchweather",
  components: {
    "child-humidity": Humidityweather,
    "child-icon": Imageweather
  },

  data() {
    return {
      query: "",
      city: "",
      country: "",
      weatherDescription: "",
      weatherData: null,
      cod: null,
      icon: "",
      show: true,
      error: "",
      dismissSecs: 5,
      dismissCountDown: 0
    };
  },
  methods: {
    showWeather: function() {
      this.show = true;
      this.$http
        .get(URL + this.query + "&units=metric&lang=es" + API_KEY)
        .then(response => {
          this.city = response.data.name;
          this.country = response.data.sys.country;
          this.weatherDescription = response.data.weather[0].description;
          this.weatherData = {
            temp: response.data.main.temp,
            tempMin: response.data.main.temp_min,
            tempMax: response.data.main.temp_max,
            humidity: response.data.main.humidity
          };
          this.cod = response.data.weather[0].icon;
          this.icon =
            "http://openweathermap.org/img/wn/" + this.cod + "@2x.png";
          this.error = false;
        })
        .catch(error => {
          this.error = true;
          this.city = {};
          this.weatherData = "";
          this.icon = {};
          // eslint-disable-next-line no-console
          //console.log(Object.keys(error), error.message);
          this.showAlert();
        });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  }
};
</script>

<style scoped>
div {
  padding-top: auto;
}
</style>