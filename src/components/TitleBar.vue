<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <header class="top-nav">
        <div class="title text-2xl">
            <img alt="Ceca logo" class="logo" src="@/assets/CECA_Logo_Submit.png" width="75" height="75" />
            <h1 class="brand">Celestial Freight Train</h1>
        </div>

        <nav class="nav">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/documentation">Documentation</RouterLink>
        </nav>

    </header>
</template>

<style scoped>
.top-nav {
    width: 25em;
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    justify-content: space-around;
}

.brand {
    width: 25em;
    margin: auto;
    width: 15em;
    justify-self: center;
}

.title {
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    order: 1;

}

.nav {
    width: 25em;
    margin: auto;
    order: 2;
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
}
</style>
