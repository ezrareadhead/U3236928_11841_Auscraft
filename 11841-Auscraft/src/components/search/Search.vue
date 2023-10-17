<script>
import { ref } from "vue";
import { useRouter } from 'vue-router';
import { mapState } from 'vuex';
const apiKey = '0b27db40cb0c4758a0125439231410';
export default {
  props: {
    value: String,
  },
  emits: ['userInput'],
  data() {
    return {
      searchQuery: this.value,
      suggestions: [],
      suggestionSelected: false,
      errorMessage: '',
      showError: false,
      showSuggestions: false,
      router: useRouter(),
    };
  },
  methods: {
    //create autofill suggestions using api
    async fetchAutocomplete() {
      //build api url
      const apiUrl =
        'http://api.weatherapi.com/v1/search.json?key=' +
        apiKey +
        '&q=' +
        this.searchQuery +
        '&aqi=no';
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data && data.length) {
          //show suggestions when data is available
          this.suggestions = data;
          this.showSuggestions = true; 
        } else {
          //hide suggestions if no data
          this.suggestions = [];
          this.showSuggestions = false; 
        }
      } catch (error) {
        console.error('Error:', error);
        this.suggestions = [];
        this.showSuggestions = false;
      }
    },
    //hide suggestions after selection
    autofillInput(value) {
      this.searchQuery = value;
      this.suggestionSelected = true;
      this.showSuggestions = false;
    },
    async searchCity() {
      //remove non-alphanumeric characters and trim the input
      const cleanSearchQuery = this.searchQuery.replace(/[^a-zA-Z0-9\s]/g, '').trim();
      //check if the selected city is in Australia
      const selectedCity = this.suggestions.find((suggestion) => {
        //remove non-alphanumeric characters and trim the suggestion name
        const cleanSuggestionName = suggestion.name.replace(/[^a-zA-Z0-9\s]/g, '').trim();
        return cleanSuggestionName.toLowerCase() === cleanSearchQuery.toLowerCase() &&
          suggestion.country === 'Australia';
      });
      //get api data
      try {
        const apiKey = "0b27db40cb0c4758a0125439231410";
        const apiUrl =
          "http://api.weatherapi.com/v1/current.json?key=" +
          apiKey +
          "&q=" +
          this.searchQuery +
          "&aqi=no";
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        //extract and log weather data from the response
        const weatherData = data?.current;
        if (weatherData) {
          console.log("Temperature:", weatherData.temp_c + "°C");
          console.log("Humidity:", weatherData.humidity + "%");
          //set the temperature and humidity values in the store
          this.$store.commit('setCityTemperature', weatherData.temp_c);
          this.$store.commit('setCityHumidity', weatherData.humidity);
        } else {
          console.error("No weather data found in the response.");
        }
      } catch (error) {
        console.error("API Request Error:", error);
      }
      if (selectedCity) {
        console.log('The city you have entered is: ' + selectedCity.name);
        this.$store.commit('setCityName', selectedCity.name);
        this.errorMessage = '';
        this.showError = false;
        //show loading spinner
        this.showSpinnerFor5Seconds = true;
        this.$store.dispatch('showLoader');
        //hide the spinner after 5 seconds
        setTimeout(async () => {
          this.showSpinnerFor5Seconds = false;
          //navigate to result page
          this.router.push('/result');
        }, 4000);
      } else {
        this.errorMessage = 'Please enter a valid city';
        this.showError = true;
        console.error('Error: Invalid city');
      }
      if (!selectedCity || this.showError) {
      }
      //hide suggestions after search
      this.showSuggestions = false; 
    },
    onBlur() {
      //delay hiding suggestions to allow time for the click event on suggestions list
      setTimeout(() => {
        this.showSuggestions = false;
      }, 200);
    },
  },
  computed: {
    currentPage() {
      return this.$route.name;
    },
    filteredSuggestions() {
      return this.suggestions.filter((suggestion) => suggestion.country === 'Australia');
    },
    ...mapState({
      showLoading: (state) => state.showLoading,
    }),
  },
};
</script>

<template>
  <div class="search">
    <form @submit.prevent="searchCity">
      <div class="searchBar">
        <h3>Search City</h3>
        <input type="text" v-model="searchQuery" @input="fetchAutocomplete" @blur="onBlur" spellcheck="false" />
        <img src="src/assets/images/search-icon.png" alt="" @click="searchCity" />
      </div>
    </form>
    <ul class="autofill" v-if="showSuggestions">
      <li v-for="(suggestion, index) in filteredSuggestions" :key="index" @click="autofillInput(suggestion.name)"> {{
        suggestion.name }} </li>
    </ul>
  </div>
  <div class="error-message" v-if="showError">{{ errorMessage }}</div>
</template>
  
<style>
.search {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: fit-content;
}

.autofill {
  width: inherit;
  background-color: #242323;
  border-radius: 1px;
  outline: 4px solid black;

  padding: 0.5em;
}

.autofill li {
  background-color: #898989;
  list-style: none;
  padding: 0.5em;
  border: 4px inset black;
  margin: 0.5em;
  cursor: pointer;
}

.autofill li:hover {
  outline: 3px solid white;
  transition: all 0.1s ease;
}

.back {
  width: fit-content;
  font-size: 1.2em;
}

.frame {
  height: inherit;
  z-index: 100;
  display: flex;
  flex-direction: row;
  gap: 2em;
  align-items: top;
}

.searchBar {
  width: inherit;
  flex-wrap: nowrap;
  display: flex;
  width: 70vw;
  height: 5em;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  background-color: #b6adaa;
  padding: 0.5em 1em;
  position: relative;
  border: 4px outset rgba(175, 175, 175, 0.62);
  border-radius: 1px;
  outline: 4px solid black;
  justify-content: space-between;
}

.searchBar input {
  height: 100%;
  background-color: #898989;
  border: 4px inset #242323;
  width: 100%;
  padding: 0.5em 1em;
  font-size: 1em;
  color: white;
  border-radius: 2px;
}

.searchBar input:focus {
  outline: 3px solid rgba(255, 255, 255, 0.75);
  outline-offset: 1px;
  transition: all 0.1s ease-in-out;

}

.searchBar img {
  background-color: transparent;
  border: none;
  height: 100%;
  cursor: pointer;
}

.searchBar img:hover {
  scale: 1.2;
  transition: all 0.1s;
  outline: none;
}

.searchBar h3 {
  position: relative;
  flex-shrink: 0;
  width: max-content;
  font-weight: 400;
  color: #242323;
  font-size: 1.5em;
  letter-spacing: 0;
  line-height: normal;
  text-shadow: 2px 2px 0px #707070ab;
}

.error-border {
  border: 2px solid red;
}

.error-input {
  color: red;
}

.error-message {
  color: red;
  margin-top: 5px;
}
</style>