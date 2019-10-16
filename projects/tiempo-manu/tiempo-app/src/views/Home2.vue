<template>
  <div class="container">
    <b-card no-body class="overflow-hidden" style="max-width: 840px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img src="cdnPath +'/'+weatherItem.icon+'.png'" alt></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="Select City">
            <b-card-text>Select you city to get your weather</b-card-text>
            <div>
              <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group
                  id="input-city"
                  label="City:"
                  label-for="input-1"
                  description="Enter your city name."
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.city"
                    type="text"
                    required
                    placeholder="City"
                  ></b-form-input>
                </b-form-group>
              </b-form>
              <b-button type="submit" variant="primary">Get Weather</b-button>
              <b-button type="reset" variant="danger">Reset Weather</b-button>
            </div>
            <div></div>
            <div class="city-box" v-for="(city, index) in cities" :key="index">
              <div class="city__name">{{city.name}}</div>
            </div>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
import config from "./../config";
import store from "./../store";
import { mapState } from "vuex";

export default {
  data() {
    return {
      form: {
        city: "",
        weather: null
      },
      show: true
    };
  },
  computed: {
    ...mapState({
      cities: state => state.cities.list,
      citiesTemp: state => state.cities.list.main
    }),
    cdnPath: function() {
      return config.cdnPath;
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      console.log(form.city);
    },
    onReset(evt) {
      this.form.city = "";
      this.form.weather = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    getCities(url) {
      return axios
        .get(url)
        .then(res => {
          this.$store.dispatch("setStateData", {
            key: "cities",
            data: res.data
          });
        })
        .catch(error => {
          console.log("404");
        });
    }
  },
  created() {
    const url =
      config.apiRoot +
      "/group?id=745044,2988507,2950159,2643743,6539761&units=metric&APPID=" +
      config.apiKey;
    if (this.$store.state.cities.length == 0) {
      this.getCities(url);
    }
  }
};
</script>