<script setup>
import Back from '../components/common/back.vue'
</script>

<template>
    <main>
        <Back />
        <div class="frame">
            <h1>How does it work?</h1>
            <p>Welcome to our Minecraft Biome Matcher, a fun and educational web app that brings the Minecraft universe to
                yours! Here's a peek into how it all works:</p>
            <h3>Step 1: Find Your City</h3>
            <p>Start by searching for your favorite Australian city. Just type in the name, and our app will fetch the
                latest temperature and humidity data for your location.</p>
            <h3>Step 2: The Boring Bits</h3>
            <p>We take the data from Minecraft, and translate it into real-world terms. Now you can understand these biomes
                as if they exist in your very own backyard.</p>
            <h3>Step 3: A Perfect Match!</h3>
            <p>With the data in hand, we'll identify the Minecraft biome that most closely resembles your city's climate. Is
                your city more like the scorching Desert or the cool Taiga?<br /><br />Find out!</p>
        </div>
    </main>
</template>

<style scoped>
main {
    text-align: left;
}

.frame {
    display: inline-block;
    text-align: left;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40vw;
    padding: 2em 4em;
    height: fit-content;
    background-color: rgb(0, 105, 197);
    outline: solid black;
    display: flex;
    gap: 2em;
    flex-direction: column;
    text-align: center;
    align-items: center;
    background-color: #b6adaa;
    position: relative;
    border: 4px outset rgba(175, 175, 175, 0.62);
    border-radius: 1px;
    outline: 4px solid black;
    color: white;
}

.frame * {
    margin: 0 auto;
}

.frame h1 {
    position: relative;
    flex-shrink: 0;
    width: max-content;
    font-weight: 400;
    color: #242323;
    font-size: 2.5em;
    letter-spacing: 0;
    line-height: normal;
    text-shadow: 3px 3px 0px #707070ab;
}

.frame h3 {
    font-size: 1.7em;
    text-shadow: 3px 3px 0px #707070ab;
}</style>