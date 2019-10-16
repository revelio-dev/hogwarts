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
                  id="input-group-1"
                  label="City:"
                  label-for="input-1"
                  description="Search your city."
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.ciudad"
                    type="text"
                    required
                    placeholder="Enter City Name"
                  ></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="primary">Get your Weather</b-button>
                <b-button type="reset" variant="danger">Reset your Weather</b-button>
              </b-form>
            </div>
            <div></div>
            <div>
              <h1>{{ info.name }}, {{ info.sys.country }}</h1>
              <h2>
                <span>Lon:</span>
                {{ info.coord.lon }}
                <span>Lat:</span>
                {{ info.coord.lat }}
              </h2>
              <h2>
                <span>Wind speed:</span>
                {{ info.wind.speed }}mph
              </h2>
              <h2>
                <span>Wind deg:</span>
                {{ info.wind.deg }}&deg;
              </h2>
              <h2>
                <span>Pressure:</span>
                {{ info.main.pressure }}
              </h2>
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
        ciudad: ""
      },
      show: true
    };
  },
  mounted() {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=Rye,uk&appid=375b5b72defecfdfccfa090d50f49db4"
      )
      .then(response => (this.info = response.data));
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      this.form.ciudad = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>