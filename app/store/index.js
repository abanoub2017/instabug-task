// import dependency to handle HTTP request to our back end
import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

// load Vuex
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    performances: [],
  },
  // to handle state
  getters: {
    allPerformances: (state) => state.performances,
  },
  actions: {
    getPerformances({ commit }) {
      axios
        .get('https://fe-task.getsandbox.com/performance')
        .then((response) => {
          commit('SET_PERFORMANCES', response.data);
        });
    },
  },
  mutations: {
    SET_PERFORMANCES(state, performances) {
      state.performances = performances;
    },
  },
});
export default store;
