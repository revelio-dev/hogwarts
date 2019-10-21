<template>
  <b-container class="bv-example-row bv-example-row-flex-cols">
    <b-row align-self="center">
      <b-col cols="8">
        <b-form @submit="showWeather" @reset="onReset" v-if="show">
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
        <h1>{{city}}, {{country}}</h1>
      </div>
      <div class="container-fluid" id="form">
        <b-table-simple responsive>
          <b-thead>
            <b-tr>
              <b-th>TEMPERATURE</b-th>
              <b-th>HUMID</b-th>
              <b-th>MIN. TEMPERATURE</b-th>
              <b-th>MAX. TEMPERATURE</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td>{{temp}}&deg;C</b-td>
              <b-td>{{humidity}}%</b-td>
              <b-td>{{tempMin}}ºC</b-td>
              <b-td>{{tempMax}}&deg;C</b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
        <div class="col-12" align="center">
          <h3>
            <em>{{weatherDescription}}</em>
          </h3>
        </div>
        <div class="container-fluid" align="center" style="background: darkturquoise; ">
          <img :src="icon" alt="Weather icon" />
        </div>
      </div>
    </section>
    <div class="container-fluid" align="left" style="margin-top: 10px">
      <b-button :disabled="!query.length" @click="showWeather" variant="primary">Search</b-button>
      <!-- <b-button  variant="danger" @click="onReset">Reset</b-button> -->
    </div>
    <div class="container-fluid">
      <child-humidity></child-humidity>
    </div>
  </b-container>
</template>

<script>
import { API_KEY, URL } from "../../service/const";
import Humidityweather from "./Humidityweather";

export default {
  name: "Searchweather",
  components: { "child-humidity": Humidityweather },
  created: function() {
    this.showTemps();
  },
  data() {
    return {
      query: "",
      city: "",
      country: "",
      weatherDescription: "",
      temp: null,
      tempMin: null,
      tempMax: null,
      humidity: null,
      cod: null,
      icon: "",
      show: true,
      error: ""
    };
  },
  methods: {
    showWeather: function() {
      this.show = true;
      this.$http
        .get(URL + this.query + "&?units=metric&APPID=" + API_KEY)
        .then(response => {
          this.city = response.data.name;
          this.country = response.data.sys.country;
          this.weatherDescription = response.data.weather[0].description;
          this.temp = response.data.main.temp;
          this.tempMin = response.data.main.temp_min;
          this.tempMax = response.data.main.temp_max;
          this.humidity = response.data.main.humidity;
          this.cod = response.data.weather[0].icon;
          this.icon =
            "http://openweathermap.org/img/wn/" + this.cod + "@2x.png";
          this.error = false;
        })
        .catch(error => {
          this.error = true;
          this.city = "";
          // eslint-disable-next-line no-console
          //console.log(Object.keys(error), error.message);
        });
    },
    showTemps: function() {},
    showIcon: function() {},
    showAll: function() {
      this.showWeather();
    },
    onReset() {
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style scoped>
div {
  padding-top: auto;
}
</style>