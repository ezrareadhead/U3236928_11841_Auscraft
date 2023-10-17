<script setup>
import MenuItem from './MenuItem.vue'
import SearchIcon from './icons/SearchIcon.vue'
import QuestionIcon from './icons/QuestionIcon.vue'
</script>

<template>
  <div class="menuWrapper">
    <RouterLink to="/search">
      <button class="menuButton">
        <MenuItem>
          <template #icon>
            <SearchIcon />
          </template>
          <template #heading>Search</template>
        </MenuItem>
      </button>
    </RouterLink>
    <RouterLink to="/howitworks">
      <button class="menuButton">
        <MenuItem>
          <template #icon>
            <QuestionIcon />
          </template>
          <template #heading>How it works</template>
        </MenuItem>
      </button>
    </RouterLink>
  </div>
</template>

<style>
.menuWrapper {
  width: 30vw;
  display: grid;
  gap: 1em;
  margin: 0 auto;
}

.menuButton {
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  gap: 1em;
  min-width: 275px;
  text-align: center;
  padding: 0.3em 1em;
  font-weight: 400;
  font-size: 1.5rem;
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
</style>
