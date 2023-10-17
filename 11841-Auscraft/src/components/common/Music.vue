<script>
export default {
  computed: {
    currentPage() {
      return this.$route.name;
    },
  },
  data() {
    return {
      isMusicOn: true,
    };
  },
  methods: {
    //play or pause music on button press
    toggleMusic() {
      const audio = this.$refs.backgroundMusic;
      if (this.isMusicOn) {
        audio.pause();
      } else {
        audio.play();
      }
      this.isMusicOn = !this.isMusicOn;
    },
  },
};
</script>

<template>
  <div>
    <img :id="currentPage" class="catDisc" :style="{ opacity: isMusicOn ? 1 : 0.5 }"
      src="/src/assets/images/cat-disc.webp" alt="" @click="toggleMusic" />
    <audio ref="backgroundMusic" src="/src/assets/audio/08 Minecraft.mp3" autoplay loop></audio>
  </div>
</template>

<style>
.catDisc {
  margin-top: 1em;
  height: 5em;
  cursor: pointer;
}

.catDisc:hover {
  scale: 1.1;
}

.catDisc#menu {
  visibility: hidden;
}
</style>
