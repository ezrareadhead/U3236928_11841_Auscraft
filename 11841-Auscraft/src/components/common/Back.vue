<script>
export default {
  methods: {
    //conditional navigation
    navigate() {
      if (this.$route.name === 'search') {
        this.$router.push({ name: 'menu' });
      } else if (this.$route.name === 'result') {
        this.$router.push({ name: 'search' });
      } else {
        this.$router.go(-1);
      }
    },
  },
};
</script>
    
<template>
  <div class="buttonLink">
    <button @click="navigate" class="backButton">
      Back
    </button>
  </div>
</template>

<style>
.backButton {
  height: inherit;
  width: fit-content;
  font-size: 1.2em;
  text-align: center;
  padding: 0.3em 1em;
  font-weight: 400;
  color: #ffffff;
  letter-spacing: 0;
  line-height: normal;
  background-color: gray;
  text-shadow: 3px 3px 0px #242323;
  border: 4px outset rgba(140, 140, 140, 0.62);
  border-style: outset;
  outline: 4px solid black;
  background-repeat: no repeat;
  cursor: pointer;
  justify-content: center;
}

.buttonLink {
  width: fit-content;
}
</style>