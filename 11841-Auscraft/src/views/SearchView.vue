<script setup>
import Back from '/src/components/common/Back.vue'
import Spinner from '../components/search/Spinner.vue'
import { mapState } from 'vuex';
import Search from '../components/search/Search.vue'
</script>

<script>
export default {
  computed: {
    currentPage() {
      return this.$route.name;
    },
    ...mapState({
      showLoading: state => state.showLoading
    }),
  },
  data() {
    return {
      isMusicOn: true,
      searchQuery: '',
    };
  },
  methods: {
  },
};
</script>

<template>
  <div class="about">
    <Back />
    <main :id="currentPage">
      <Search @userInput="searchQuery" />
      <Spinner v-if="showLoading" />
    </main>
  </div>
</template>

<style>
.about {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: top;
  gap: 2em;
}

main#search {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  height: fit-content;
  height: inherit;
}
</style>
