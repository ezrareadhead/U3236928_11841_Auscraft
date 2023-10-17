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
  <RouterLink to="/">
    <img :id="currentPage" class="logo" src="/src/assets/images/auscraft-logo.png" alt="">
  </RouterLink>
</template>

<style>
.logo {
  transition: all 2s ease;
}

.logo#menu {
  width: 100%;
  cursor: default;
}

.logo#search,
.logo#howitworks,
.logo#result {
  height: 100px;
  cursor: pointer;
}
</style>