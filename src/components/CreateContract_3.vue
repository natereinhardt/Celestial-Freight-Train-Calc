<script setup>
// defineProps({
//     msg: {
//         type: String,
//         required: true,
//     },
// });
</script>

<template>
    <div class="container bg-sky-500/50">
        <h2 class=""><img alt="Ceca logo" class="logo" src="@/assets/contracts.png" width="35" height="35" />Create
            Contract</h2>
        <h3>
            Select Options (3/4)
        </h3>
    </div>
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

.container {
    padding: .5em;
    margin: .5em;
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
