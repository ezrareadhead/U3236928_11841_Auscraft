import { createStore } from 'vuex';
const store = createStore({
  state: {
    showLoading: false,
    cityTemperature: '',
    cityHumidity: '',
    cityName: '',
    mostSimilarBiome: '',
  },
  mutations: {
    setShowLoading(state, value) {
      state.showLoading = value;
    },
    setCityTemperature(state, temperature) {
      state.cityTemperature = temperature;
    },
    setCityHumidity(state, humidity) {
      state.cityHumidity = humidity;
    }, setCityName(state, name) {
      state.cityName = name;
    },
    setMostSimilarBiome(state, mostSimilarBiome) {
      state.mostSimilarBiome = mostSimilarBiome;
    },
  },
  actions: {
    showLoader({ commit }) {
      commit('setShowLoading', true);
      // Automatically hide the loader after 5 seconds
      setTimeout(() => {
        commit('setShowLoading', false);
      }, 5000);
    },
  },
  state() {
    return {
      showLoading: false,
      cityTemperature: '',
      cityHumidity: '',
      cityName: '',
      mostSimilarBiome: '',
    };
  },
});
export default store;