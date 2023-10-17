<script setup>
//BORROWED CODE LINES 4 TO 28
//(Epic Spinners, n.d.)
import { FulfillingSquareSpinner } from 'epic-spinners'
</script>

<template>
  <div class="loader">
    <fulfilling-square-spinner :animation-duration="4000" :size="40" color="white" />
    <div class="loadingText">Calculating</div>
  </div>
</template>

<style>
.loader {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  color: white;
  gap: 2em;
  margin: auto 0;
}

.loader * {
  margin: 0 auto;
}

/* BORROWED CODE LINES 32 TO 57
(Pure CSS Animated Ellipsis, n.d.) */
.loadingText {
  text-align: left;
}

.loadingText:after {
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
  -webkit-animation: ellipsis steps(4, end) 900ms infinite;
  animation: ellipsis steps(4, end) 900ms infinite;
  content: "\2026";
  width: 0px;
}

@keyframes ellipsis {
  to {
    width: 1.25em;
  }
}

@-webkit-keyframes ellipsis {
  to {
    width: 1.25em;
  }
}
</style>