import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios';

export default new Vuex.Store({
  state: {
    users: [],
    selectedGenders: [],
    selectedNationality: [],
  },
  getters: {
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_GENDERS(state, genders) {
      state.selectedGenders = genders;
    },
    SET_NATIONALITY(state,nationality) {
      state.selectedNationality = nationality;
    }
  },
  actions: {
    async generateRandomUsers({ commit, state }) {
      try {
        const genderQuery = state.selectedGenders.join(',');
        const nationalQuery = state.selectedNationality.join(',');
        await axios.get(`https://randomuser.me/api/?results=${10}&gender=${genderQuery}&nat=${nationalQuery}`).then(r=>{
          commit('SET_USERS', r.data.results);
        });
      } catch (error) {
        console.error('Error fetching random users:', error);
      }
    },
  },
  modules: {
  }
});

