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
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
}

.logo {
    margin: 0 1rem 0 2rem;
}

@media (hover: hover) {
    a:hover {
        background-color: hsla(236, 48%, 36%, 0.2);
    }
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}
</style>
