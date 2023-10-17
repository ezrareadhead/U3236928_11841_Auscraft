<script>
export default {
  computed: {
    currentPage() {
      return this.$route.name;
    },
  },
  //play background music
  data() {
    return {
      isMusicOn: true,
    };
  },
}
</script>

<template>
  <div :id="currentPage" class="background"></div>
</template>

<style>
.background {
  width: 100vw;
  height: 100vh;
  background-image: url("/src/assets/videos/Panorama.mp4");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  position: absolute;
  z-index: -1;
}

.background#search,
.background#result {
  opacity: 0.5;
}
</style>