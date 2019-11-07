import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: []
  },
  getters: {
    users: state => state.users
  },
  actions: {
    getUsers: () => {
      const url =
        "http://www.json-generator.com/api/json/get/cepXOxTWiG?indent=2";
      axios.get(url);
    }
  },
  mutations: {
    setUsers: (state, payload) => {
      state.users = payload;
    }
  }
});
