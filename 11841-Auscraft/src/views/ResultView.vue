<script setup>
import Back from '../components/common/back.vue'
import Calculator from '../components/common/Calculator.vue'
</script>

<template>
    <main>
        <Back />
        <div class="card">
            <div class="description">
                <Calculator />
            </div>
        </div>
    </main>
</template>

<style>
.card {
    width: 70vw;
    padding: 2em;
    height: fit-content;
    background-color: rgb(0, 105, 197);
    outline: solid black;
    display: flex;
    gap: 2em;
    flex-direction: row;
    align-items: center;
    background-color: #b6adaa;
    position: relative;
    border: 4px outset rgba(175, 175, 175, 0.62);
    border-radius: 1px;
    outline: 4px solid black;
}

.biome {
    position: relative;
    flex-shrink: 0;
    width: max-content;
    font-weight: 400;
    color: #242323;
    font-size: 1.5em;
    letter-spacing: 0;
    line-height: normal;
    text-shadow: 2px 2px 0px #707070ab;
}
</style>