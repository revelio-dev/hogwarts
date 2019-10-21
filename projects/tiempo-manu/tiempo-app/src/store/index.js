import Vue from 'vue'
import Vuex from 'vuex'

import service from "@/services/service.js";

Vue.use(Vuex)

const store = {
    state: {
        weather: {},
        dataIsRecived: false
    },
    mutations: {
        UPDATE_WETHER(state) {
            service
                .getWeather().then(
                    response => {
                        state.weather = response.data.data[0]
                        state.dataIsRecived = true;
                        console.log(response)
                    }
                ).catch(
                    error => {
                        console.log("Error: ", error.response)
                    }
                )
        }
    },
    actions: {
        updateWeather(context) {
            context.commit("UPDATE_WEATHER")
        }
    }
}

export default store