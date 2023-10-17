<script>
import { computed } from "vue";
import { mapState, mapActions } from 'vuex';
import biomeData from '/src/biomes.json';
export default {
  computed: {
    //logged data
    ...mapState({
      cityTemperature: (state) => state.cityTemperature,
      cityHumidity: (state) => state.cityHumidity,
      cityName: (state) => state.cityName,
      mostSimilarBiome: (state) => state.mostSimilarBiome,
    }),
  },
  data() {
    return {
      mostSimilarBiome: '',
      temperatureTooltip: '',
    };
  },
  methods: {
    //calculate similarity score between city and biome
    calculateSimilarity(city, biome) {
      const temperatureDiff = city.temperature - biome.temperature;
      const humidityDiff = city.humidity - biome.humidity;
      return temperatureDiff ** 2 + humidityDiff ** 2;
    },
    //create a list of biomes with tied similarity scores
    findMostSimilarBiome() {
      const city = {
        temperature: this.cityTemperature,
        humidity: this.cityHumidity,
      };
      console.log('City:', city);
      let similarBiomes = [];
      let minDistance = Infinity;
      for (const biome of biomeData) {
        const similarity = this.calculateSimilarity(city, biome);
        console.log('Biome:', biome);
        console.log('Similarity:', similarity);
        if (similarity < minDistance) {
          minDistance = similarity;
          similarBiomes = [biome];
          console.log(similarBiomes)
        } else if (similarity === minDistance) {
          //if a biome has the same similarity value, add it to the list
          similarBiomes.push(biome);
        }
      }
      //pick a random biome from the list of similar biomes
      const randomIndex = Math.floor(Math.random() * similarBiomes.length);
      const mostSimilarBiome = similarBiomes[randomIndex];
      //set the tooltip text
      this.cityTooltip = `Temperature = ${this.cityTemperature}°C and Humidity = ${this.cityHumidity} %`;
      this.biomeTooltip = `Temperature ≈ ${mostSimilarBiome.temperature}°C and Humidity ≈ ${mostSimilarBiome.humidity} %`;
      this.humidityTooltipTooltip = `MC Humidity: ${this.cityHumidity} °C`;
      console.log('Most Similar Biome:', mostSimilarBiome.name);
      this.mostSimilarBiome = mostSimilarBiome;
    },
  },
  created() {
    this.findMostSimilarBiome();
  },
};
</script>

<template>
  <div class="cardWrapper">
    <img :src="mostSimilarBiome.img" alt="Most Similar Biome" class="biomeImage" />
    <div class="description">
      <p>If <span class="citySpan" :data-tooltip="cityTooltip"> {{ cityName }} </span> was a minecraft biome, <br>it would
        be...</p>
      <p class="biomeName" :data-tooltip="biomeTooltip">{{ mostSimilarBiome.name }}</p>
      <div class="info">
        <div class="infoSymbol">
          <p>i</p>
        </div>
        <div>
          <p class="info"><span>Want to know why?</span></p>
          <p class="info">Hover over the biome and city to see data</p>
        </div>
      </div>
    </div>
  </div>
</template> 

<style scoped >
.info {
  display: flex;
  flex-direction: row;
  gap: 1em;
  align-items: center;
  flex-wrap: 0;
}

.infoSymbol {
  position: relative;
  align-items: center;
  text-align: center;
  background-image: url("/Users/ezrareadhead/11841-auscraft/11841-Auscraft/src/assets/images/pixel-circle.png");
  background-size: contain;
  object-fit: fill;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: 2em;
  width: 2em;
}

.infoSymbol p {
  transform: translate(5%);
  font-size: 1.1em;
}

.cardWrapper {
  display: flex;
  flex-direction: row;
  gap: 2em;
}

p {
  color: white;
  font-size: 1.3em;
}

.info {
  font-size: 1em;
}

.info span {
  font-weight: 900;
  /* outline: solid 5px white; */
}

.citySpan {
  color: #fff400;
  text-shadow: 2px 2px 0px #707070ab;
  font-size: 1.3em;
}

.description {
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: space-around;
  height: inherit;
  /* align-items: flex-start; */
}

.biomeImage {
  height: 40vh;
  width: 40vh;
  object-fit: cover;
  background-color: #898989;
  border: 4px inset #888585;
  /* width: 100%; */
  /* padding: 0.5em 1em; */
  /* font-size: 1em; */
  color: white;
  border-radius: 2px;
}

.biomeName {
  position: relative;
  flex-shrink: 0;
  width: max-content;
  font-weight: 400;
  color: #242323;
  font-size: 3em;
  letter-spacing: 0;
  line-height: normal;
  text-shadow: 2px 2px 0px #707070ab;
  align-items: center;
}

.biomeName:hover::after,
.citySpan:hover::after {
  display: flex;
  content: attr(data-tooltip);
  position: absolute;
  margin-top: 1em;
  /* margin-left: 2em; */
  width: max-content;
  font-size: 0.8rem;
  color: white;
  background-color: rgb(12, 1, 22);
  /* text-shadow: none; */
  padding: 1em;
  outline: 2px solid rgb(51, 0, 133);
  outline-offset: -5px;
  border-radius: 3px;
  /* top: -50% */
}
</style>