<template>
  <div class="container-fluid col-6">
    <b-card
      no-body
      class="overflow-hidden"
      header="Weather APP"
      header-tag="header"
      style="max-width: 540px;"
    >
      <b-row no-gutters class="align-content-center absolute">
        <b-col md="6">
          <b-card-img
            :src="icon"
            class="rounded-0"
            style="background-color: #333333; max-height: 248px;"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="Your Weather now is" body-class="text col-form-label-lg">
            <b-card-text>Humedad: {{weatherData.humidity}}</b-card-text>
            <b-card-text>Temperatura: {{weatherData.temp}}</b-card-text>
            <b-card-text>Max. Temperatura: {{weatherData.tempMax}}</b-card-text>
            <b-card-text>Min. Temperatura: {{weatherData.tempMin}}</b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
      <div class="marquee">
        <div>
          <b-card-footer footer-class="marquee">
            <span>
              <b-card-text>
                El amanecer en {{city}} está pronosticado a las {{sunrise}}.
                <img
                  src="@/assets/images/wi-sunrise.svg"
                  style="height:30px"
                />
                Para el dia de hoy tenemos actualmente, una temperatura de {{weatherData.temp}} ºC. con {{weatherDescription}}.
                El atardecer esta pronosticado a las {{sunset}}.
                <img
                  src="@/assets/images/wi-sunset.svg"
                  style="height:30px"
                />  Propicios dias, ciudadano.
              </b-card-text>
            </span>
          </b-card-footer>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import { API_KEY, URL_GEO, URL } from "../../service/const";

export default {
  data() {
    return {
      weatherDescription: "",
      weatherData: {},
      sunrise: "",
      sunset: "",
      pressure: "",
      wind: "",
      overcast: "",
      icon: "",
      location: "",
      city: "",
      country: "",
      cod: null,
      dismissSecs: 5,
      dismissCountDown: 0
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

      this.getWeather(URL_GEO + "&lat=" + lat + "&lon=" + lon +"&units=metric&lang=es"+ API_KEY);
    },
    geoError() {
      this.getWeather(URL_GEO + "&lat=0&lon=0&units=metric&lang=es" + API_KEY);
      this.showAlert();
    }
  },
  showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  beforeMount() {
    this.geolocation();
  }
};
</script>

<style>
.text {
  color: #ffffff;
  background: #333333;
  text-shadow: 0 -1px 4px #fff, 0 -2px 10px #ff0, 0 -10px 20px #ff8000,
    0 -18px 40px #f00;
  color: #ffffff;
  background: #333333;
  text-align: center;
}
body {
  margin: 20px;
}
.marquee {
  overflow: hidden;
  position: relative;
  height: 50px;
  width: 100%;
}

.marquee div {
  display: block;
  width: 1500px;
  height: 750px;
  position: absolute;
  overflow: hidden;
  animation: marquee 15s linear infinite;
}

.marquee span {
  float: right;
  width: 100%;
}

@keyframes marquee {
  10% {
    left: 0;
  }
  100% {
    left: -100%;
  }
}
</style>
