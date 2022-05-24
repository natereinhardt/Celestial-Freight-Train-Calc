<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <header>
        <img alt="Vue logo" class="logo" src="@/assets/CECA_Logo_Submit.png" width="75" height="75" />
        <h2>Celestial Freight Train</h2>
    </header>

    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/documentation">Documentation</RouterLink>
    </nav>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
    text-align: center;
}

@media (min-width: 1024px) {

    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>
