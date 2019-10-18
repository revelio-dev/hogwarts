<template>
  <div class="weathercard">
    <div class="city-detail-header">
      <div class="city__detail__return">
        <router-link to="/" :class="['city__detail_return__btn']">All Cities</router-link>
      </div>
      {{citiesDetail.city && citiesDetail.city.name}}
    </div>
    <div class="city-detail-box" v-for="(cityItem, key) in groupedCities" :key="key">
      <div
        class="city__detail__row"
        v-for="(dailyTimes, index) in cityItem"
        :key="`${key}${index}`"
      >
        <div
          class="city__detail__row__header"
          :class="[index[0] == 0 ? 'city-detail-hidden' : '']"
        >{{index == 0 ? key : ''}}</div>
        <div class="city__detail__status">
          <div class="city__detail__time">{{dailyTimes.dt_txt | momentClock}}</div>
          <div class="city__detail_temp">{{Math.floor(dailyTimes.main.temp)}} &#8451;</div>
          <div
            class="city__detail__case"
            v-for="(weatherItem,index) in dailyTimes.weather"
            :key="index"
          >
            <div class="city__detail__description">
              <img :src="cdnPath +'/'+ weatherItem.icon+'.png'" alt class="city__detail__image" />
              <div class="city__detail_text">{{weatherItem.description}}</div>
            </div>
          </div>
          <div
            class="city__detail__wind"
          >Wind : {{dailyTimes.wind.speed}} / m.s {{dailyTimes.wind.deg ? '('+Math.floor(dailyTimes.wind.deg)+')' : ''}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import config from "./../config";
import store from "./../store";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      citiesDetail: state => state.citiesDetail
    }),
    groupedCities: function() {
      let citiesDetail = _.sortBy(
        this.citiesDetail.list,
        city => {
          return moment(city.dt_txt).format("l");
        },
        ["asc"]
      );
      let grouped = _.groupBy(citiesDetail, city =>
        moment(city.dt_txt).format("dddd MMMM D YYYY")
      );
      return grouped;
    },
    cdnPath: function() {
      return config.cdnPath;
    }
  },
  methods: {
    getCitiesDetail(url) {
      return axios
        .get(url)
        .then(res => {
          this.$store.dispatch("setStateData", {
            key: "citiesDetail",
            data: res.data
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    const url =
      config.apiRoot +
      "/forecast?id=" +
      this.$route.params.id +
      "&APPID=" +
      config.apiKey +
      "&units=metric";
    this.getCitiesDetail(url);
  },
  filters: {
    momentDay: function(date) {
      return moment(date).format("dddd MMMM D YYYY");
    },
    momentClock: function(date) {
      return moment(date).format("HH:mm");
    }
  }
};
</script>