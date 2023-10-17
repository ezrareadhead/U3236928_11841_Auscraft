<script setup>
import Logo from './Logo.vue'
import Subheading from '../menu/Subheading.vue'
import Music from './Music.vue'
</script>

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
  <div :id="currentPage" class="header">
    <div>
      <Music></Music>
    </div>
    <div>
      <transition>
        <Logo />
      </transition>
      <Subheading />
    </div>
    <div>
    </div>
  </div>
</template>

<style>
.header {
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 4fr 1fr;
  align-items: center;
  align-content: center;
  gap: 1em;
}

.header div {
  text-align: center;
}

.header div:nth-child(2) {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: baseline;
}

.header#menu {
  padding: 10em 0 10em 0;
}

.header#search,
.header#result,
.header#howitworks {
  align-items: self-start;
  width: 100vw;
  margin-top: 2em;
}

.header#search div:nth-child(2),
.header#result div:nth-child(2),
.header#howitworks div:nth-child(2) {
  align-items: center;
}
</style>