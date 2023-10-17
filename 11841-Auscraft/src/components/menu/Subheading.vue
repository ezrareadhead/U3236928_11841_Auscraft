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
}
</script>

<template>
  <h2 class="tagline" :id="currentPage">Bringing the MC world to yours</h2>
</template>

<style>
.tagline {
  position: relative;
  text-shadow: 3px 3px 0px #705700ab;
  color: #fff400;
  vertical-align: baseline;
  text-align: center;
  opacity: 1;
  animation: pulse 1s infinite;
}

.tagline#search,
.tagline#howitworks,
.tagline#result {
  visibility: hidden;
}

@keyframes pulse {
  0% {
    transform-origin: center bottom;
    transform: scale(1) translate(50%, -100%) rotate(-20deg);
  }

  50% {
    transform-origin: center bottom;
    transform: scale(1.03) translate(50%, -100%) rotate(-20deg);
  }

  100% {
    transform-origin: center bottom;
    transform: scale(1) translate(50%, -100%) rotate(-20deg);
  }
}
</style>