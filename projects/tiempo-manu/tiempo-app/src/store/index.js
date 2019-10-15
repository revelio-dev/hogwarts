import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
        cities: [],
        citiesDetail: []
    },
    mutations: {
        SET_DEFINITION(state, payload) {
            state[payload.key] = payload.data;
        },
    },
    getters: {

    },
    actions: {
        setStateData({ commit }, payload) {
            commit('SET_DEFINITION', { key: payload.key, data: payload.data });
        }
    },
})

export default store